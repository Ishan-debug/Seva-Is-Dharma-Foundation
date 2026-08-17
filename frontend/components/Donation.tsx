"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { useRazorpay } from "react-razorpay";

export default function Donation() {
  const { error: razorpayError, isLoading: razorpayLoading, Razorpay } =
  useRazorpay();

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

        handler: async function (paymentResponse: {
          razorpay_payment_id: string;
          razorpay_order_id: string;
          razorpay_signature: string;
        }) {
          try {
            // Step 3: Verify payment through Django
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

  return (
    <section
      id="donate"
      className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* Left Side */}
        <div>
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            SUPPORT OUR MISSION
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Every Donation Creates Hope ❤️
          </h2>

          <p className="mt-6 text-gray-600">
            Your contribution helps us protect animals, feed the hungry,
            plant trees and protect our environment.
          </p>

          <div className="mt-8 space-y-3 text-lg text-gray-700">
            <p>🐾 Animal Welfare</p>
            <p>🍛 Food Distribution</p>
            <p>🌳 Tree Plantation</p>
            <p>🌍 Environment Protection</p>
          </div>

          <div className="mt-8 rounded-2xl border border-orange-200 bg-white/70 p-5">
            <p className="font-semibold text-gray-900">
              Test Mode
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Online donations are currently being tested using Razorpay Test
              Mode. No real money will be collected during testing.
            </p>
          </div>
        </div>

        {/* Donation Form */}
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border p-3 outline-none focus:border-orange-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border p-3 outline-none focus:border-orange-500"
            />

            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full rounded-lg border p-3 outline-none focus:border-orange-500"
            />

            <input
              type="number"
              name="amount"
              min="1"
              step="1"
              placeholder="Donation Amount (₹)"
              value={form.amount}
              onChange={handleChange}
              required
              className="w-full rounded-lg border p-3 outline-none focus:border-orange-500"
            />

            <textarea
              name="purpose"
              placeholder="Purpose (Optional)"
              value={form.purpose}
              onChange={handleChange}
              className="w-full rounded-lg border p-3 outline-none focus:border-orange-500"
              rows={4}
            />

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 py-4 font-semibold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Heart size={18} />

              {loading
                ? "Processing..."
                : "Donate with Razorpay ❤️"}
            </button>

            {/* Success */}
            {message && (
              <div className="rounded-xl bg-green-100 p-4 text-center font-medium text-green-700">
                {message}
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="rounded-xl bg-red-100 p-4 text-center font-medium text-red-700">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}