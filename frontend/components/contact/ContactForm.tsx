export default function ContactForm() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">
      <h3 className="mb-8 text-2xl font-bold">
        Send Us a Message
      </h3>

      <form className="space-y-6">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
        />

        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
        />

        <textarea
          rows={6}
          placeholder="Write your message..."
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          Send Message
        </button>

      </form>
    </div>
  );
}