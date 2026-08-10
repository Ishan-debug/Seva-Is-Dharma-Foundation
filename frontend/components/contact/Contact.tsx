import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Contact Us
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            We'd Love to Hear From You
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Whether you'd like to volunteer, donate, partner with us, or ask a
            question, we're always here to help.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}