"use client";

import { useState } from "react";

const API_URL = (
  process.env.NEXT_PUBLIC_API_URL ||
  "http://127.0.0.1:8000"
).replace(/\/$/, "");

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
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

    setSubmitting(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch(
        `${API_URL}/api/contacts/send/`,
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
              : "Unable to send your message.";

        throw new Error(serverError);
      }

      setSuccess(
        "Thank you for contacting Seva Is Dharma Foundation. Your message has been received successfully. ❤️"
      );

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (submitError) {
      console.error(
        "Contact form error:",
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
    "w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-500 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100";

  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg sm:p-8">
      <h3 className="mb-8 text-2xl font-bold text-gray-900">
        Send Us a Message
      </h3>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text-gray-900"
          >
            Your Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

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
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-semibold text-gray-900"
          >
            Subject
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-gray-900"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Write your message..."
            value={form.message}
            onChange={handleChange}
            required
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-xl bg-green-600 py-3.5 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting
            ? "Sending..."
            : "Send Message"}
        </button>

        {success && (
          <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-700">
            ✅ {success}
          </div>
        )}

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700">
            ❌ {error}
          </div>
        )}
      </form>
    </div>
  );
}