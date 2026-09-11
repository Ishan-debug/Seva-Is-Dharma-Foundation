"use client";

import { FormEvent, useState } from "react";
import {
  CheckCircle,
  Heart,
  MapPin,
  Phone,
  Send,
  User,
  Mail,
} from "lucide-react";

const API_URL = (
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000"
).replace(/\/$/, "");

const INTEREST_OPTIONS = [
  "Animal Welfare",
  "Food Distribution",
  "Tree Plantation",
  "Environment Protection",
];

type VolunteerForm = {
  name: string;
  email: string;
  phone: string;
  city: string;
  interest: string;
};

const INITIAL_FORM: VolunteerForm = {
  name: "",
  email: "",
  phone: "",
  city: "",
  interest: "",
};

export default function Volunteer() {
  const [form, setForm] = useState<VolunteerForm>(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
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

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        let errorMessage = "Unable to submit your volunteer registration.";

        if (data) {
          if (typeof data.detail === "string") {
            errorMessage = data.detail;
          } else if (typeof data.error === "string") {
            errorMessage = data.error;
          } else if (typeof data === "object") {
            const firstError = Object.values(data).flat()[0];

            if (typeof firstError === "string") {
              errorMessage = firstError;
            }
          }
        }

        throw new Error(errorMessage);
      }

      setMessage(
        "Thank you for joining Seva Is Dharma Foundation. Your volunteer registration has been submitted successfully."
      );

      setForm(INITIAL_FORM);
    } catch (submitError) {
      console.error("Volunteer registration error:", submitError);

      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to connect to the volunteer server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-base font-medium text-gray-900 placeholder:text-gray-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100";

  return (
    <section
      id="volunteer"
      className="bg-gradient-to-br from-orange-50 via-white to-green-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
          <span className="inline-block w-fit rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            JOIN OUR MISSION
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Become a Volunteer ❤️
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
            Your time, energy, and compassion can make a real difference.
            Join Seva Is Dharma Foundation and help us serve people, protect
            animals, and care for nature.
          </p>

          {/* Benefits */}
          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <Heart size={21} fill="currentColor" />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Serve with Compassion
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Turn your willingness to help into meaningful Seva.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                <CheckCircle size={21} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Choose Your Cause
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Support the area where you feel you can contribute most.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <MapPin size={21} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Make a Local Impact
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Be part of community-focused Seva activities.
                </p>
              </div>
            </div>
          </div>

          {/* Cause List */}
          <div className="mt-9 rounded-2xl border border-orange-100 bg-white/80 p-5 shadow-sm sm:p-6">
            <h3 className="font-semibold text-gray-900">
              Current Focus Areas
            </h3>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <p className="text-sm font-medium text-gray-700">
                🐾 Animal Welfare
              </p>

              <p className="text-sm font-medium text-gray-700">
                🍛 Food Distribution
              </p>

              <p className="text-sm font-medium text-gray-700">
                🌳 Tree Plantation
              </p>

              <p className="text-sm font-medium text-gray-700">
                🌍 Environment Protection
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="rounded-3xl bg-white p-6 shadow-xl sm:p-8 lg:p-10">
          <div className="mb-8">
            <span className="text-sm font-semibold uppercase tracking-wide text-orange-600">
              Volunteer Registration
            </span>

            <h3 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              Start Your Seva Journey
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
              Fill in your details and tell us how you would like to help.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label
                htmlFor="volunteer-name"
                className="mb-2 block text-sm font-semibold text-gray-900"
              >
                Full Name
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  id="volunteer-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  className={`${inputClass} pl-11`}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="volunteer-email"
                className="mb-2 block text-sm font-semibold text-gray-900"
              >
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  id="volunteer-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  autoComplete="email"
                  required
                  className={`${inputClass} pl-11`}
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="volunteer-phone"
                className="mb-2 block text-sm font-semibold text-gray-900"
              >
                Phone Number
              </label>

              <div className="relative">
                <Phone
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  id="volunteer-phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  autoComplete="tel"
                  required
                  className={`${inputClass} pl-11`}
                />
              </div>
            </div>

            {/* City */}
            <div>
              <label
                htmlFor="volunteer-city"
                className="mb-2 block text-sm font-semibold text-gray-900"
              >
                City
              </label>

              <div className="relative">
                <MapPin
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  id="volunteer-city"
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="e.g. Ranchi"
                  autoComplete="address-level2"
                  required
                  className={`${inputClass} pl-11`}
                />
              </div>
            </div>

            {/* Interest */}
            <div>
              <label
                htmlFor="volunteer-interest"
                className="mb-2 block text-sm font-semibold text-gray-900"
              >
                How would you like to help?
              </label>

              <select
                id="volunteer-interest"
                name="interest"
                value={form.interest}
                onChange={handleChange}
                required
                className={`${inputClass} appearance-none`}
              >
                <option value="" disabled>
                  Select an area
                </option>

                {INTEREST_OPTIONS.map((interest) => (
                  <option key={interest} value={interest}>
                    {interest}
                  </option>
                ))}
              </select>
            </div>

            {/* Success */}
            {message && (
              <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-medium leading-6 text-green-700">
                <CheckCircle
                  size={20}
                  className="mt-0.5 shrink-0"
                />

                <p>{message}</p>
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium leading-6 text-red-700">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-4 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-orange-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                <>
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Become a Volunteer
                </>
              )}
            </button>

            <p className="text-center text-xs leading-5 text-gray-500">
              By submitting this form, you are expressing your interest in
              volunteering with Seva Is Dharma Foundation.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}