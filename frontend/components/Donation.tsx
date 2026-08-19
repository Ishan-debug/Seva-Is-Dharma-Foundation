"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { useRazorpay } from "react-razorpay";

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    try {
      // Step 1: Create Razorpay order through Django
      const response = await fetch(
        "http://127.0.0.1:8000/api/volunteers/donations/create/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to create donation order."
        );
      }

      // Step 2: Razorpay Checkout options
      const options = {
        key: data.key_id,
        amount: data.amount,
        currency: data.currency,
        name: "Seva Is Dharma Foundation",
        description: "Support our mission",
        order_id: data.order_id,

        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone,
        },

        notes: form.purpose || "",

        theme: {
          color: "#ea580c",
        },

        // Step 3: Verify payment through Django
        handler: async function (paymentResponse: {
          razorpay_payment_id: string;
          razorpay_order_id: string;
          razorpay_signature: string;
        }) {
          try {
            const verifyResponse = await fetch(
              "http://127.0.0.1:8000/api/volunteers/donations/verify/",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(paymentResponse),
              }
            );

            const verifyData = await verifyResponse.json();

            if (!verifyResponse.ok || !verifyData.success) {
              throw new Error(
                verifyData.error || "Payment verification failed."
              );
            }

            setMessage(
              "🎉 Thank you! Your donation has been successfully verified."
            );

            setForm({
              name: "",
              email: "",
              phone: "",
              amount: "",
              purpose: "",
            });
          } catch (verificationError) {
            console.error(verificationError);

            setError(
              "Payment was received, but verification could not be completed. Please contact us."
            );
          } finally {
            setLoading(false);
          }
        },

        modal: {
          ondismiss: function () {
            setLoading(false);
            setError("Donation payment was cancelled.");
          },
        },
      };

      // Step 4: Open Razorpay Checkout
      const razorpay = new Razorpay(options);

      razorpay.on(
        "payment.failed",
        function (response: {
          error?: {
            description?: string;
          };
        }) {
          console.error("Razorpay payment failed:", response);

          setError(
            response.error?.description ||
              "Payment failed. Please try again."
          );

          setLoading(false);
        }
      );

      razorpay.open();
    } catch (submitError) {
      console.error(submitError);

      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to connect to the donation server."
      );

      setLoading(false);
    }
  };

  // Common input style
  const inputClass =
    "w-full rounded-xl border border-gray-300 bg-white p-3.5 text-base font-medium text-gray-900 placeholder:text-gray-600 placeholder:opacity-100 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100";

  return (
    <section
      id="donate"
      className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">

        {/* LEFT SIDE */}
        <div className="min-w-0">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            SUPPORT OUR MISSION
          </span>

          <h2 className="mt-6 break-words text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Every Donation Creates Hope ❤️
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
            Your contribution helps us protect animals, feed the hungry,
            plant trees and protect our environment.
          </p>

          <div className="mt-8 space-y-3 text-base font-medium text-gray-800 sm:text-lg">
            <p>🐾 Animal Welfare</p>
            <p>🍛 Food Distribution</p>
            <p>🌳 Tree Plantation</p>
            <p>🌍 Environment Protection</p>
          </div>

          {/* Test Mode */}
          <div className="mt-8 rounded-2xl border border-orange-200 bg-white/80 p-5 shadow-sm">
            <p className="font-semibold text-gray-900">
              Test Mode
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-700">
              Online donations are currently being tested using Razorpay Test
              Mode. No real money will be collected during testing.
            </p>
          </div>
        </div>

        {/* DONATION FORM */}
        <div className="min-w-0 rounded-3xl bg-white p-5 shadow-xl sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-gray-900"
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

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-gray-900"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold text-gray-900"
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

            {/* Amount */}
            <div>
              <label
                htmlFor="amount"
                className="mb-2 block text-sm font-semibold text-gray-900"
              >
                Donation Amount
              </label>

              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-gray-800">
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

            {/* Purpose */}
            <div>
              <label
                htmlFor="purpose"
                className="mb-2 block text-sm font-semibold text-gray-900"
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

            {/* Donate Button */}
            <button
              type="submit"
              disabled={loading || razorpayLoading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-4 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-orange-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Heart size={18} />

              {loading
                ? "Processing..."
                : "Donate with Razorpay ❤️"}
            </button>

            {/* Razorpay Error */}
            {razorpayError && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-center text-sm font-medium text-red-700">
                Unable to load Razorpay. Please refresh and try again.
              </div>
            )}

            {/* Success */}
            {message && (
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-center text-sm font-medium leading-6 text-green-700">
                {message}
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-center text-sm font-medium leading-6 text-red-700">
                {error}
              </div>
            )}

            {/* Security */}
            <p className="text-center text-xs leading-5 text-gray-500">
              🔒 Your payment is securely processed through Razorpay.
            </p>

          </form>
        </div>
      </div>
    </section>
  );
}