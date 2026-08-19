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

  const inputStyle = {
    color: "#111827",
    backgroundColor: "#ffffff",
    WebkitTextFillColor: "#111827",
  };

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

              <h2 className="mt-6 text-4xl font-bold text-gray-950 md:text-5xl">
                Become a Volunteer
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-700">
                Every act of kindness makes a difference. Join our volunteers
                and help us protect animals, feed the hungry, plant trees,
                and build a cleaner, greener future.
              </p>

              <div className="mt-8 space-y-4 text-gray-900">
                <p>🐾 Animal Welfare</p>
                <p>🍛 Food Distribution</p>
                <p>🌳 Tree Plantation</p>
                <p>🌍 Environment Protection</p>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT SIDE */}
          <FadeIn delay={0.2}>
            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-xl sm:p-8">

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* FULL NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold text-gray-950"
                  >
                    Full Name *
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    style={inputStyle}
                    className="w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-base font-semibold text-gray-950 placeholder:text-gray-800 placeholder:opacity-100 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-gray-950"
                  >
                    Email Address *
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    style={inputStyle}
                    className="w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-base font-semibold text-gray-950 placeholder:text-gray-800 placeholder:opacity-100 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-bold text-gray-950"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    style={inputStyle}
                    className="w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-base font-semibold text-gray-950 placeholder:text-gray-800 placeholder:opacity-100 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                {/* CITY */}
                <div>
                  <label
                    htmlFor="city"
                    className="mb-2 block text-sm font-bold text-gray-950"
                  >
                    City *
                  </label>

                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                    required
                    style={inputStyle}
                    className="w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-base font-semibold text-gray-950 placeholder:text-gray-800 placeholder:opacity-100 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                {/* AREA OF INTEREST */}
                <div>
                  <label
                    htmlFor="interest"
                    className="mb-2 block text-sm font-bold text-gray-950"
                  >
                    Area of Interest *
                  </label>

                  <select
                    id="interest"
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    className="w-full cursor-pointer rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-base font-semibold text-gray-950 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  >
                    <option value="" style={{ color: "#111827" }}>
                      Select Area of Interest *
                    </option>

                    <option
                      value="Animal Welfare"
                      style={{ color: "#111827" }}
                    >
                      Animal Welfare
                    </option>

                    <option
                      value="Food Distribution"
                      style={{ color: "#111827" }}
                    >
                      Food Distribution
                    </option>

                    <option
                      value="Tree Plantation"
                      style={{ color: "#111827" }}
                    >
                      Tree Plantation
                    </option>

                    <option
                      value="Environment Protection"
                      style={{ color: "#111827" }}
                    >
                      Environment Protection
                    </option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-gray-950"
                  >
                    Message
                    <span className="ml-1 font-normal text-gray-700">
                      (Optional)
                    </span>
                  </label>

                  <textarea
                    id="message"
                    rows={4}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us why you want to volunteer..."
                    style={inputStyle}
                    className="w-full resize-none rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-base font-semibold text-gray-950 placeholder:text-gray-800 placeholder:opacity-100 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-orange-600 py-4 font-semibold text-white shadow-md transition-all duration-300 hover:bg-orange-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading
                    ? "Submitting..."
                    : "Become a Volunteer ❤️"}
                </button>

                {/* SUCCESS MESSAGE */}
                {success && (
                  <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-center font-medium leading-6 text-green-700">
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