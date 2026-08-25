"use client";

import { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";

const API_URL = (
  process.env.NEXT_PUBLIC_API_URL ||
  "http://127.0.0.1:8000"
).replace(/\/$/, "");

type CreateOrderResponse = {
  message?: string;
  order_id?: string;
  amount?: number;
  currency?: string;
  key_id?: string;
  donation_id?: number;
  error?: string;
};

type VerifyResponse = {
  success?: boolean;
  message?: string;
  donation_id?: number;
  error?: string;
};

type RazorpayPaymentResponse = {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
};

type RazorpayOptions = {
  key: string;
  amount: number;
  currency: "INR";
  name: string;
  description: string;
  order_id: string;

  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };

  notes?: {
    purpose?: string;
  };

  theme?: {
    color?: string;
  };

  handler: (response: RazorpayPaymentResponse) => void;

  modal?: {
    ondismiss?: () => void;
  };
};

declare global {
  interface Window {
    Razorpay: new (
      options: RazorpayOptions
    ) => {
      open: () => void;
    };
  }
}

export default function Donation() {
  const [razorpayReady, setRazorpayReady] =
    useState(false);

  const [razorpayLoading, setRazorpayLoading] =
    useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    purpose: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const paymentCompleted = useRef(false);

  // =========================================================
  // LOAD RAZORPAY
  // =========================================================

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.Razorpay) {
      setRazorpayReady(true);
      setRazorpayLoading(false);
      return;
    }

    const existingScript = document.querySelector(
      'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
    );

    if (existingScript) {
      existingScript.addEventListener(
        "load",
        handleLoaded
      );

      existingScript.addEventListener(
        "error",
        handleError
      );

      return () => {
        existingScript.removeEventListener(
          "load",
          handleLoaded
        );

        existingScript.removeEventListener(
          "error",
          handleError
        );
      };
    }

    const script = document.createElement("script");

    script.src =
      "https://checkout.razorpay.com/v1/checkout.js";

    script.async = true;

    script.onload = handleLoaded;
    script.onerror = handleError;

    document.body.appendChild(script);

    return () => {
      script.onload = null;
      script.onerror = null;
    };

    function handleLoaded() {
      setRazorpayReady(true);
      setRazorpayLoading(false);
    }

    function handleError() {
      setRazorpayReady(false);
      setRazorpayLoading(false);

      setError(
        "Unable to load the secure payment system. Please refresh the page and try again."
      );
    }
  }, []);

  // =========================================================
  // HANDLE INPUT
  // =========================================================

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // =========================================================
  // VERIFY PAYMENT
  // =========================================================

  const verifyPayment = async (
    paymentResponse: RazorpayPaymentResponse,
    donationId?: number
  ) => {
    try {
      const response = await fetch(
        `${API_URL}/api/volunteers/donations/verify/`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            donation_id: donationId,

            razorpay_payment_id:
              paymentResponse.razorpay_payment_id,

            razorpay_order_id:
              paymentResponse.razorpay_order_id,

            razorpay_signature:
              paymentResponse.razorpay_signature,
          }),
        }
      );

      let data: VerifyResponse = {};

      try {
        data = await response.json();
      } catch {
        throw new Error(
          "The verification server returned an invalid response."
        );
      }

      if (!response.ok) {
        throw new Error(
          data.error ||
            data.message ||
            "Payment verification failed."
        );
      }

      if (data.success === false) {
        throw new Error(
          data.error ||
            data.message ||
            "Payment verification failed."
        );
      }

      paymentCompleted.current = true;

      setLoading(false);

      setMessage(
        "Thank you for supporting Seva Is Dharma Foundation. Your donation has been received successfully. ❤️"
      );

      setError("");

      setForm({
        name: "",
        email: "",
        phone: "",
        amount: "",
        purpose: "",
      });
    } catch (err) {
      console.error(
        "Payment verification error:",
        err
      );

      setLoading(false);

      setError(
        err instanceof Error
          ? err.message
          : "Payment was received, but verification failed. Please contact us."
      );
    }
  };

  // =========================================================
  // SUBMIT DONATION
  // =========================================================

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    setMessage("");
    setError("");

    paymentCompleted.current = false;

    // -------------------------------------------------------
    // VALIDATION
    // -------------------------------------------------------

    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!form.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!form.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    const amount = Number(form.amount);

    if (!amount || amount < 1) {
      setError(
        "Please enter a valid donation amount."
      );
      return;
    }

    if (
      !razorpayReady ||
      !window.Razorpay
    ) {
      setError(
        "Secure payment system is still loading. Please wait a moment and try again."
      );

      return;
    }

    setLoading(true);

    try {
      // =====================================================
      // CREATE RAZORPAY ORDER
      // =====================================================

      const response = await fetch(
        `${API_URL}/api/volunteers/donations/create/`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            phone: form.phone.trim(),
            amount: amount,
            purpose: form.purpose.trim(),
          }),
        }
      );

      let data: CreateOrderResponse = {};

      try {
        data = await response.json();
      } catch {
        throw new Error(
          "The donation server returned an invalid response."
        );
      }

      console.log(
        "Donation order response:",
        data
      );

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Unable to create donation order."
        );
      }

      if (!data.order_id) {
        throw new Error(
          "Donation order was not created correctly."
        );
      }

      if (!data.key_id) {
        throw new Error(
          "Razorpay key was not returned by the server."
        );
      }

      if (!data.amount) {
        throw new Error(
          "Donation amount was not returned by the server."
        );
      }

      // =====================================================
      // OPEN RAZORPAY
      // =====================================================

      const options: RazorpayOptions = {
        key: data.key_id,

        amount: data.amount,

        currency: "INR",

        name: "Seva Is Dharma Foundation",

        description: "Support our mission",

        order_id: data.order_id,

        prefill: {
          name: form.name.trim(),
          email: form.email.trim(),
          contact: form.phone.trim(),
        },

        notes: {
          purpose: form.purpose.trim(),
        },

        theme: {
          color: "#16a34a",
        },

        // ---------------------------------------------------
        // SUCCESS
        // ---------------------------------------------------

        handler: async (
          paymentResponse
        ) => {
          setMessage(
            "Payment received. Verifying your donation..."
          );

          setError("");

          await verifyPayment(
            paymentResponse,
            data.donation_id
          );
        },

        // ---------------------------------------------------
        // CLOSE
        // ---------------------------------------------------

        modal: {
          ondismiss: () => {
            if (!paymentCompleted.current) {
              setLoading(false);

              setMessage("");

              setError(
                "Payment was cancelled. No donation was recorded."
              );
            }
          },
        },
      };

      const razorpay =
        new window.Razorpay(options);

      razorpay.open();
    } catch (err) {
      console.error(
        "Donation error:",
        err
      );

      setLoading(false);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to start the donation."
      );
    }
  };

  // =========================================================
  // SAME STYLE AS CONTACT FORM
  // =========================================================

  const inputClass =
    "w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-500 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100 disabled:bg-gray-100";

  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg sm:p-8">

      <h3 className="mb-8 text-2xl font-bold text-gray-900">
        Make a Donation
      </h3>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        {/* NAME */}

        <div>
          <label
            htmlFor="donation-name"
            className="mb-2 block text-sm font-semibold text-gray-900"
          >
            Your Name
          </label>

          <input
            id="donation-name"
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            required
            disabled={loading}
            className={inputClass}
          />
        </div>

        {/* EMAIL */}

        <div>
          <label
            htmlFor="donation-email"
            className="mb-2 block text-sm font-semibold text-gray-900"
          >
            Email Address
          </label>

          <input
            id="donation-email"
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            required
            disabled={loading}
            className={inputClass}
          />
        </div>

        {/* PHONE */}

        <div>
          <label
            htmlFor="donation-phone"
            className="mb-2 block text-sm font-semibold text-gray-900"
          >
            Phone Number
          </label>

          <input
            id="donation-phone"
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            autoComplete="tel"
            required
            disabled={loading}
            className={inputClass}
          />
        </div>

        {/* AMOUNT */}

        <div>
          <label
            htmlFor="donation-amount"
            className="mb-2 block text-sm font-semibold text-gray-900"
          >
            Donation Amount
          </label>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700">
              ₹
            </span>

            <input
              id="donation-amount"
              name="amount"
              type="number"
              placeholder="Enter amount"
              value={form.amount}
              onChange={handleChange}
              min="1"
              step="1"
              required
              disabled={loading}
              className={`${inputClass} pl-9`}
            />
          </div>
        </div>

        {/* PURPOSE */}

        <div>
          <label
            htmlFor="donation-purpose"
            className="mb-2 block text-sm font-semibold text-gray-900"
          >
            Purpose
          </label>

          <textarea
            id="donation-purpose"
            name="purpose"
            rows={5}
            placeholder="Tell us what you'd like to support"
            value={form.purpose}
            onChange={handleChange}
            disabled={loading}
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* DONATE BUTTON */}

        <button
          type="submit"
          disabled={
            loading ||
            razorpayLoading ||
            !razorpayReady
          }
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3.5 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Heart size={19} />

          {razorpayLoading
            ? "Loading secure payment system..."
            : loading
            ? "Processing..."
            : "Donate with Razorpay"}
        </button>

        {/* SUCCESS */}

        {message && (
          <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-700">
            ✅ {message}
          </div>
        )}

        {/* ERROR */}

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700">
            ❌ {error}
          </div>
        )}

        {/* SECURITY */}

        <p className="text-center text-sm leading-6 text-gray-500">
          🔒 Your payment is securely processed through Razorpay.
        </p>

      </form>
    </div>
  );
}