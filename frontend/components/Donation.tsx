"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import {
  useRazorpay,
  type RazorpayOrderOptions,
} from "react-razorpay";

const API_URL = (
  process.env.NEXT_PUBLIC_API_URL ||
  "http://127.0.0.1:8000"
).replace(/\/$/, "");

type PaymentResponse = {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
};

type PaymentFailedResponse = {
  error?: {
    description?: string;
  };
};

type CreateOrderResponse = {
  message?: string;
  order_id: string;
  amount: number;
  currency: string;
  key_id: string;
  donation_id?: number;
  error?: string;
};

type VerifyResponse = {
  success?: boolean;
  message?: string;
  error?: string;
  donation_id?: number;
};

export default function Donation() {
  const {
    error: razorpayError,
    isLoading: razorpayLoading,
    Razorpay,
  } = useRazorpay();

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

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    try {
      // =====================================================
      // STEP 1: CREATE RAZORPAY ORDER
      // =====================================================

      const response = await fetch(
        `${API_URL}/api/volunteers/donations/create/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      let data: CreateOrderResponse;

      try {
        data = await response.json();
      } catch {
        throw new Error(
          "The server returned an invalid response."
        );
      }

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Unable to create donation order."
        );
      }

      // =====================================================
      // CHECK RAZORPAY
      // =====================================================

      if (!Razorpay) {
        throw new Error(
          "Razorpay is still loading. Please try again."
        );
      }

      if (!data.key_id) {
        throw new Error(
          "Razorpay key was not received from the server."
        );
      }

      if (!data.order_id) {
        throw new Error(
          "Razorpay order was not created."
        );
      }

      // =====================================================
      // STEP 2: RAZORPAY OPTIONS
      // =====================================================

      const options: RazorpayOrderOptions = {
        key: data.key_id,
        amount: data.amount,
        currency: "INR",
        name: "Seva Is Dharma Foundation",
        description: "Support our mission",
        order_id: data.order_id,

        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone,
        },

        // Your installed react-razorpay types expect notes
        // as a string.
        notes: form.purpose || "",

        theme: {
          color: "#ea580c",
        },

        // ===================================================
        // PAYMENT SUCCESS
        // ===================================================

        handler: async (
          paymentResponse: PaymentResponse
        ) => {
          // IMPORTANT:
          // Immediately stop "Processing..." after Razorpay
          // reports a successful payment.
          setLoading(false);
          setError("");
          setMessage("");

          try {
            // ===============================================
            // STEP 3: VERIFY PAYMENT ON BACKEND
            // ===============================================

            const verifyResponse = await fetch(
              `${API_URL}/api/volunteers/donations/verify/`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(
                  paymentResponse
                ),
              }
            );

            let verifyData: VerifyResponse;

            try {
              verifyData =
                await verifyResponse.json();
            } catch {
              throw new Error(
                "The verification server returned an invalid response."
              );
            }

            if (
              !verifyResponse.ok ||
              !verifyData.success
            ) {
              throw new Error(
                verifyData.error ||
                  "Payment verification failed."
              );
            }

            // ===============================================
            // SUCCESS
            // ===============================================

            setMessage(
              "🎉 Thank you! Your donation has been successfully verified."
            );

            setError("");

            setForm({
              name: "",
              email: "",
              phone: "",
              amount: "",
              purpose: "",
            });
          } catch (verificationError) {
            console.error(
              "Payment verification error:",
              verificationError
            );

            setError(
              verificationError instanceof Error
                ? verificationError.message
                : "Payment was received, but verification could not be completed. Please contact us."
            );
          } finally {
            // Safety reset
            setLoading(false);
          }
        },

        // ===================================================
        // PAYMENT MODAL CLOSED
        // ===================================================

        modal: {
          ondismiss: () => {
            setLoading(false);
            setError(
              "Donation payment was cancelled."
            );
          },
        },
      };

      // =====================================================
      // STEP 4: CREATE RAZORPAY INSTANCE
      // =====================================================

      const razorpay = new Razorpay(options);

      // =====================================================
      // PAYMENT FAILED
      // =====================================================

      razorpay.on(
        "payment.failed",
        (
          paymentFailure: PaymentFailedResponse
        ) => {
          console.error(
            "Razorpay payment failed:",
            paymentFailure
          );

          setError(
            paymentFailure.error?.description ||
              "Payment failed. Please try again."
          );

          setLoading(false);
        }
      );

      // =====================================================
      // STEP 5: OPEN RAZORPAY CHECKOUT
      // =====================================================

      razorpay.open();
    } catch (submitError) {
      console.error(
        "Donation submission error:",
        submitError
      );

      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to connect to the donation server."
      );

      setLoading(false);
    }
  };

  // =========================================================
  // INPUT STYLE
  // =========================================================

  const inputClass =
    "w-full rounded-xl border border-gray-300 bg-white p-3.5 text-base font-medium text-gray-900 placeholder:text-gray-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100";

  return (
    <section
      id="donate"
      className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">

        {/* =================================================
            LEFT SIDE
        ================================================== */}

        <div className="min-w-0">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            SUPPORT OUR MISSION
          </span>

          <h2 className="mt-6 break-words text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Every Donation Creates Hope ❤️
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
            Your contribution helps us protect animals,
            feed the hungry, plant trees and protect our
            environment.
          </p>

          <div className="mt-8 space-y-3 text-base font-medium text-gray-800 sm:text-lg">
            <p>🐾 Animal Welfare</p>
            <p>🍛 Food Distribution</p>
            <p>🌳 Tree Plantation</p>
            <p>🌍 Environment Protection</p>
          </div>

          {/* TEST MODE */}

          <div className="mt-8 rounded-2xl border border-orange-200 bg-white/80 p-5 shadow-sm">
            <p className="font-semibold text-gray-900">
              Test Mode
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-700">
              Online donations are currently being tested
              using Razorpay Test Mode. No real money will
              be collected during testing.
            </p>
          </div>
        </div>

        {/* =================================================
            DONATION FORM
        ================================================== */}

        <div className="min-w-0 rounded-3xl bg-white p-5 shadow-xl sm:p-8">
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* FULL NAME */}

            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            {/* EMAIL */}

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            {/* PHONE */}

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            {/* AMOUNT */}

            <div>
              <label
                htmlFor="amount"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Donation Amount
              </label>

              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-gray-700">
                  ₹
                </span>

                <input
                  id="amount"
                  type="number"
                  name="amount"
                  min="1"
                  step="1"
                  placeholder="Enter amount"
                  value={form.amount}
                  onChange={handleChange}
                  required
                  className={`${inputClass} pl-9`}
                />
              </div>
            </div>

            {/* PURPOSE */}

            <div>
              <label
                htmlFor="purpose"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Purpose
                <span className="ml-1 font-normal text-gray-600">
                  (Optional)
                </span>
              </label>

              <textarea
                id="purpose"
                name="purpose"
                placeholder="Tell us what you'd like to support"
                value={form.purpose}
                onChange={handleChange}
                rows={4}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* DONATE BUTTON */}

            <button
              type="submit"
              disabled={
                loading || razorpayLoading
              }
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-4 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-orange-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Heart size={18} />

              {loading
                ? "Processing..."
                : "Donate with Razorpay ❤️"}
            </button>

            {/* RAZORPAY LOADING */}

            {razorpayLoading && !loading && (
              <p className="text-center text-xs text-gray-500">
                Loading secure payment system...
              </p>
            )}

            {/* RAZORPAY ERROR */}

            {razorpayError && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-center text-sm font-medium text-red-700">
                Unable to load Razorpay. Please refresh
                and try again.
              </div>
            )}

            {/* SUCCESS */}

            {message && (
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-center text-sm font-medium leading-6 text-green-700">
                {message}
              </div>
            )}

            {/* ERROR */}

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-center text-sm font-medium leading-6 text-red-700">
                {error}
              </div>
            )}

            {/* SECURITY */}

            <p className="text-center text-xs leading-5 text-gray-500">
              🔒 Your payment is securely processed
              through Razorpay.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}