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
    Razorpay: new (options: RazorpayOptions) => {
      open: () => void;
    };
  }
}

export default function Donation() {
  const [razorpayReady, setRazorpayReady] = useState(false);
  const [razorpayLoading, setRazorpayLoading] = useState(true);

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
  // LOAD RAZORPAY DIRECTLY
  // =========================================================

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Already loaded
    if (window.Razorpay) {
      setRazorpayReady(true);
      setRazorpayLoading(false);
      return;
    }

    const existingScript = document.querySelector(
      'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
    );

    if (existingScript) {
      existingScript.addEventListener("load", handleLoaded);
      existingScript.addEventListener("error", handleError);

      return () => {
        existingScript.removeEventListener("load", handleLoaded);
        existingScript.removeEventListener("error", handleError);
      };
    }

    const script = document.createElement("script");

    script.src = "https://checkout.razorpay.com/v1/checkout.js";
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
  // HANDLE INPUTS
  // =========================================================

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

      // IMPORTANT:
      // Payment is now successfully verified.
      paymentCompleted.current = true;

      setLoading(false);

      setMessage(
        "Thank you for supporting Seva Is Dharma Foundation! Your donation has been received successfully. ❤️"
      );

      setError("");

      // Clear the form AFTER successful verification.
      setForm({
        name: "",
        email: "",
        phone: "",
        amount: "",
        purpose: "",
      });
    } catch (err) {
      console.error("Payment verification error:", err);

      setLoading(false);

      setError(
        err instanceof Error
          ? err.message
          : "Payment was received, but verification failed. Please contact us."
      );
    }
  };

  // =========================================================
  // CREATE ORDER + OPEN RAZORPAY
  // =========================================================

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (loading) return;

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
      setError("Please enter a valid donation amount.");
      return;
    }

    if (!razorpayReady || !window.Razorpay) {
      setError(
        "Secure payment system is still loading. Please wait a moment and try again."
      );
      return;
    }

    setLoading(true);

    try {
      // =====================================================
      // STEP 1 — CREATE ORDER
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

      console.log("Donation order response:", data);

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Unable to create donation order."
        );
      }

      // =====================================================
      // STEP 2 — VALIDATE ORDER
      // =====================================================

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
      // STEP 3 — OPEN RAZORPAY
      // =====================================================

      const currency: "INR" =
        data.currency === "INR"
          ? "INR"
          : "INR";

      const options: RazorpayOptions = {
        key: data.key_id,

        amount: data.amount,

        currency,

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
          color: "#f4511e",
        },

        // ===================================================
        // PAYMENT SUCCESS
        // ===================================================

        handler: async (
          paymentResponse: RazorpayPaymentResponse
        ) => {
          console.log(
            "Razorpay payment successful:",
            paymentResponse
          );

          setMessage(
            "✅ Payment received. Verifying your donation..."
          );

          setError("");

          // Do NOT close/reset anything here.
          // First verify with Django.
          await verifyPayment(
            paymentResponse,
            data.donation_id
          );
        },

        // ===================================================
        // USER CLOSES RAZORPAY
        // ===================================================

        modal: {
          ondismiss: () => {
            console.log("Razorpay modal dismissed.");

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

      const razorpay = new window.Razorpay(options);

      razorpay.open();
    } catch (err) {
      console.error("Donation error:", err);

      setLoading(false);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to start the donation."
      );
    }
  };

  // =========================================================
  // UI
  // =========================================================

  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">
      <h3 className="mb-8 text-2xl font-bold text-gray-900">
        Make a Donation ❤️
      </h3>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* NAME */}

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          autoComplete="name"
          disabled={loading}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none disabled:bg-gray-100"
        />

        {/* EMAIL */}

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          autoComplete="email"
          disabled={loading}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none disabled:bg-gray-100"
        />

        {/* PHONE */}

        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          autoComplete="tel"
          disabled={loading}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none disabled:bg-gray-100"
        />

        {/* AMOUNT */}

        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-semibold text-gray-700">
            ₹
          </span>

          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="Donation Amount"
            min="1"
            step="1"
            disabled={loading}
            className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 focus:border-orange-500 focus:outline-none disabled:bg-gray-100"
          />
        </div>

        {/* PURPOSE */}

        <textarea
          name="purpose"
          value={form.purpose}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us what you'd like to support"
          disabled={loading}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none disabled:bg-gray-100"
        />

        {/* BUTTON */}

        <button
          type="submit"
          disabled={loading || razorpayLoading || !razorpayReady}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 py-4 font-semibold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Heart size={20} />

          {razorpayLoading
            ? "Loading secure payment system..."
            : loading
            ? "Processing..."
            : "Donate with Razorpay ❤️"}
        </button>

        {/* SUCCESS */}

        {message && (
          <div className="rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-medium leading-6 text-green-700">
            {message}
          </div>
        )}

        {/* ERROR */}

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium leading-6 text-red-600">
            {error}
          </div>
        )}

        {/* SECURITY */}

        <p className="text-center text-sm text-gray-500">
          🔒 Your payment is securely processed through Razorpay.
        </p>
      </form>
    </div>
  );
}