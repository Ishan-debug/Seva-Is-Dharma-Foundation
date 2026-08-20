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

  // Same input styling as Donation form
  const inputClass =
    "w-full rounded-xl border border-gray-300 bg-white p-3.5 text-base font-medium text-gray-900 placeholder:text-gray-600 placeholder:opacity-100 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100";

  return (
    <section
      id="volunteer"
      className="bg-gradient-to-b from-orange-50 to-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <FadeIn>
            <div>
              <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                JOIN OUR MISSION
              </span>

              <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
                Become a Volunteer
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-700">
                Every act of kindness makes a difference. Join our volunteers
                and help us protect animals, feed the hungry, plant trees,
                and build a cleaner, greener future.
              </p>

              <div className="mt-8 space-y-4 text-gray-800">
                <p>🐾 Animal Welfare</p>
                <p>🍛 Food Distribution</p>
                <p>🌳 Tree Plantation</p>
                <p>🌍 Environment Protection</p>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT SIDE */}
          <FadeIn delay={0.2}>
            <div className="rounded-3xl border border-orange-100 bg-white p-5 shadow-xl sm:p-8">

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

                {/* City */}
                <div>
                  <label
                    htmlFor="city"
                    className="mb-2 block text-sm font-semibold text-gray-900"
                  >
                    City
                  </label>

                  <input
                    id="city"
                    type="text"
                    name="city"
                    placeholder="Enter your city"
                    value={form.city}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>

                {/* Area of Interest */}
                <div>
                  <label
                    htmlFor="interest"
                    className="mb-2 block text-sm font-semibold text-gray-900"
                  >
                    Area of Interest
                  </label>

                  <select
                    id="interest"
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    required
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="">
                      Select Area of Interest *
                    </option>

                    <option value="Animal Welfare">
                      Animal Welfare
                    </option>

                    <option value="Food Distribution">
                      Food Distribution
                    </option>

                    <option value="Tree Plantation">
                      Tree Plantation
                    </option>

                    <option value="Environment Protection">
                      Environment Protection
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-gray-900"
                  >
                    Message
                    <span className="ml-1 font-normal text-gray-600">
                      (Optional)
                    </span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us why you want to volunteer"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center rounded-xl bg-orange-600 px-5 py-4 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-orange-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading
                    ? "Submitting..."
                    : "Become a Volunteer ❤️"}
                </button>

                {/* Success Message */}
                {success && (
                  <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-center text-sm font-medium leading-6 text-green-700">
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