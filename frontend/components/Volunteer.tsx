"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

export default function Volunteer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    interest: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/volunteers/register/",
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
        if (data.email) {
          alert("❌ This email is already registered as a volunteer.");
        } else {
          alert("❌ Registration failed. Please try again.");
          console.error(data);
        }
        return;
      }

      setSuccess("🎉 Thank you for registering as a volunteer!");

      setForm({
        name: "",
        email: "",
        phone: "",
        city: "",
        interest: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="volunteer"
      className="bg-gradient-to-b from-orange-50 to-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}
          <FadeIn>
            <div>
              <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                JOIN OUR MISSION
              </span>

              <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
                Become a Volunteer
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Every act of kindness makes a difference. Join our volunteers
                and help us protect animals, feed the hungry, plant trees,
                and build a cleaner, greener future.
              </p>

              <div className="mt-8 space-y-4 text-gray-700">
                <p>🐾 Animal Welfare</p>
                <p>🍛 Food Distribution</p>
                <p>🌳 Tree Plantation</p>
                <p>🌍 Environment Protection</p>
              </div>
            </div>
          </FadeIn>

          {/* Right Side */}
          <FadeIn delay={0.2}>
            <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-5">

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
                />

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number *"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
                />

                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="City *"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
                />

                <select
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
                >
                  <option value="">Select Area of Interest *</option>
                  <option value="Animal Welfare">Animal Welfare</option>
                  <option value="Food Distribution">Food Distribution</option>
                  <option value="Tree Plantation">Tree Plantation</option>
                  <option value="Environment Protection">
                    Environment Protection
                  </option>
                </select>

                <textarea
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us why you want to volunteer..."
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-orange-600 py-4 font-semibold text-white transition hover:bg-orange-700 disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Become a Volunteer ❤️"}
                </button>

                {success && (
                  <div className="rounded-xl bg-green-100 p-4 text-center font-medium text-green-700">
                    {success}
                  </div>
                )}

              </form>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}