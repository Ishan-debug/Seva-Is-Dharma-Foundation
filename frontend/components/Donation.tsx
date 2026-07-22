"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

export default function Donation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    purpose: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/donations/create/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        alert("Thank you for supporting Seva Is Dharma Foundation ❤️");

        setForm({
          name: "",
          email: "",
          phone: "",
          amount: "",
          purpose: "",
        });
      } else {
        alert("Unable to submit your donation.");
      }
    } catch (error) {
      alert("Server connection failed.");
    }

    setLoading(false);
  };

  return (
    <section
      id="donate"
      className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-24"
    >
      <div className="mx-auto max-w-7xl grid gap-16 px-6 lg:grid-cols-2">
        <div>
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            SUPPORT OUR MISSION
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            Every Donation Creates Hope ❤️
          </h2>

          <p className="mt-6 text-gray-600">
            Your contribution helps us protect animals, feed the hungry,
            plant trees and protect our environment.
          </p>

          <div className="mt-8 space-y-3 text-lg">
            <p>🐄 Animal Welfare</p>
            <p>🍛 Food Distribution</p>
            <p>🌳 Tree Plantation</p>
            <p>🌍 Environment Protection</p>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border p-3"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border p-3"
            />

            <input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full rounded-lg border p-3"
            />

            <input
              type="number"
              name="amount"
              placeholder="Donation Amount (₹)"
              value={form.amount}
              onChange={handleChange}
              required
              className="w-full rounded-lg border p-3"
            />

            <textarea
              name="purpose"
              placeholder="Purpose (Optional)"
              value={form.purpose}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
              rows={4}
            />

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 py-4 font-semibold text-white hover:bg-orange-700 disabled:opacity-50"
            >
              <Heart size={18} />
              {loading ? "Submitting..." : "Donate Now"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}