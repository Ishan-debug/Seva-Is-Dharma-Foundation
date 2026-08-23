"use client";

import { FormEvent, useState } from "react";

const API_URL = (
  process.env.NEXT_PUBLIC_API_URL ||
  "http://127.0.0.1:8000"
).replace(/\/$/, "");

const INTEREST_OPTIONS = [
  "Animal Welfare",
  "Food Distribution",
  "Tree Plantation",
  "Environment Protection",
];

export default function Volunteer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    area_of_interest: "Animal Welfare",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setSubmitting(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch(
        `${API_URL}/api/volunteers/register/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      let data: Record<string, unknown> = {};

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok) {
        const serverError =
          typeof data.error === "string"
            ? data.error
            : typeof data.detail === "string"
              ? data.detail
              : "Unable to submit the volunteer form.";

        throw new Error(serverError);
      }

      setSuccess(
        "🎉 Thank you for joining Seva Is Dharma Foundation! " +
          "Your volunteer registration has been received. " +
          "Stay connected for future seva activities, events, and opportunities."
      );

      setError("");

      setForm({
        name: "",
        email: "",
        phone: "",
        city: "",
        area_of_interest: "Animal Welfare",
        message: "",
      });
    } catch (submitError) {
      console.error(
        "Volunteer registration error:",
        submitError
      );

      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to connect to the server."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-gray-300 bg-white p-3.5 text-base font-medium text-gray-900 placeholder:text-gray-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100";

  return (
    <section
      id="volunteer"
      className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">

        {/* LEFT SIDE */}

        <div className="flex flex-col justify-center">
          <span className="inline-block w-fit rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            JOIN OUR MISSION
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Become a Volunteer ❤️
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
            Every act of kindness makes a difference.
            Join Seva Is Dharma Foundation and help us
            protect animals, feed the hungry, plant trees,
            and build a cleaner, greener future.
          </p>

          <div className="mt-8 space-y-3 text-base font-medium text-gray-800 sm:text-lg">
            <p>🐾 Animal Welfare</p>
            <p>🍛 Food Distribution</p>
            <p>🌳 Tree Plantation</p>
            <p>🌍 Environment Protection</p>
          </div>

          <p className="mt-8 text-sm font-semibold text-green-700 sm:text-base">
            सेवा परमो धर्मः ❤️
          </p>
        </div>

        {/* FORM */}

        <div className="rounded-3xl bg-white p-5 shadow-xl sm:p-8">
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* FULL NAME */}

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
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className={inputClass}
              />
            </div>

            {/* EMAIL */}

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-gray-900"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
                className={inputClass}
              />
            </div>

            {/* PHONE */}

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
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                className={inputClass}
              />
            </div>

            {/* CITY */}

            <div>
              <label
                htmlFor="city"
                className="mb-2 block text-sm font-semibold text-gray-900"
              >
                City
              </label>

              <input
                id="city"
                name="city"
                type="text"
                value={form.city}
                onChange={handleChange}
                placeholder="Enter your city"
                required
                className={inputClass}
              />
            </div>

            {/* AREA OF INTEREST */}

            <div>
              <label
                htmlFor="area_of_interest"
                className="mb-2 block text-sm font-semibold text-gray-900"
              >
                Area of Interest
              </label>

              <select
                id="area_of_interest"
                name="area_of_interest"
                value={form.area_of_interest}
                onChange={handleChange}
                required
                className={inputClass}
              >
                {INTEREST_OPTIONS.map((interest) => (
                  <option
                    key={interest}
                    value={interest}
                  >
                    {interest}
                  </option>
                ))}
              </select>
            </div>

            {/* MESSAGE */}

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-gray-900"
              >
                Message{" "}
                <span className="font-normal text-gray-600">
                  (Optional)
                </span>
              </label>

              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us why you want to volunteer"
                rows={5}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* SUBMIT */}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-orange-600 px-5 py-4 text-base font-semibold text-white shadow-md transition hover:bg-orange-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting
                ? "Submitting..."
                : "Become a Volunteer ❤️"}
            </button>

            {/* SUCCESS */}

            {success && (
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-700">
                {success}
              </div>
            )}

            {/* ERROR */}

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700">
                ❌ {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}