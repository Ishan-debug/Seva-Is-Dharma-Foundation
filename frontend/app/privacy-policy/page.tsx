import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50">
        {/* Header */}
        <section className="bg-green-700 py-16 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Privacy Policy" },
              ]}
            />

            <div className="mx-auto mt-10 max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-green-200">
                Your Privacy Matters
              </p>

              <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
                Privacy Policy
              </h1>

              <p className="mt-5 text-green-50">
                Last updated: August 2026
              </p>
            </div>
          </div>
        </section>

        {/* Policy */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <article className="rounded-3xl bg-white p-8 shadow-sm sm:p-12">

              <p className="leading-8 text-gray-600">
                Seva Is Dharma Foundation respects your privacy and is
                committed to handling personal information responsibly.
                This Privacy Policy explains how information may be
                collected and used when you visit or interact with our
                website.
              </p>

              {/* 1 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  1. Information We May Collect
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  Depending on how you use the website, we may receive
                  information such as:
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Subject and message submitted through our contact form</li>
                  <li>Information voluntarily provided when contacting or volunteering with us</li>
                  <li>Basic technical information required to operate and secure the website</li>
                </ul>
              </section>

              {/* 2 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  2. How We Use Information
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  Information submitted to us may be used to:
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
                  <li>Respond to enquiries and messages</li>
                  <li>Communicate with volunteers or supporters</li>
                  <li>Provide information about our activities</li>
                  <li>Improve the website and user experience</li>
                  <li>Maintain website security and prevent misuse</li>
                  <li>Meet applicable legal or administrative requirements</li>
                </ul>
              </section>

              {/* 3 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  3. Contact Forms
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  If you submit information through our contact form, the
                  information you provide may be used to respond to your
                  enquiry. Please avoid submitting passwords, financial
                  account credentials, identity documents, or other
                  unnecessary sensitive information through the website
                  contact form.
                </p>
              </section>

              {/* 4 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  4. Donations
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  Official online donation facilities are currently not
                  active. Donation information will be updated when the
                  foundation's official organizational banking and payment
                  arrangements are established.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  We will not ask visitors to provide banking passwords,
                  ATM PINs, OTPs, CVVs, or similar confidential banking
                  credentials through this website.
                </p>
              </section>

              {/* 5 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  5. Information Sharing
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  We do not intend to sell or rent personal information.
                  Information may be shared with service providers or
                  authorities where reasonably necessary to operate the
                  website, provide requested services, protect the
                  organization and its users, or comply with applicable law.
                </p>
              </section>

              {/* 6 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  6. Data Security
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  We take reasonable measures to protect information
                  submitted through our website. However, no internet
                  transmission or electronic storage system can be guaranteed
                  to be completely secure.
                </p>
              </section>

              {/* 7 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  7. Data Retention
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  We intend to retain personal information only for as long
                  as reasonably necessary for the purpose for which it was
                  collected, legitimate organizational requirements, or
                  applicable legal obligations.
                </p>
              </section>

              {/* 8 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  8. Your Choices
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  If you have submitted personal information to us and want
                  to ask about its use, correction, or deletion, you may
                  contact us using the contact details provided on our
                  website.
                </p>
              </section>

              {/* 9 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  9. Children
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  Our website is not intended to knowingly collect personal
                  information from children without appropriate involvement
                  of a parent or guardian.
                </p>
              </section>

              {/* 10 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  10. Changes to This Policy
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  We may update this Privacy Policy from time to time as our
                  website, organization, or legal obligations change. The
                  updated version will be published on this page with a
                  revised date.
                </p>
              </section>

              {/* 11 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  11. Contact Us
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  If you have questions about this Privacy Policy or the
                  handling of your information, please contact us.
                </p>

                <div className="mt-6 rounded-2xl bg-green-50 p-6">
                  <p className="font-semibold text-gray-900">
                    Seva Is Dharma Foundation
                  </p>

                  <p className="mt-2 text-gray-600">
                    Singh More, Ranchi, Jharkhand – 834003, India
                  </p>

                  <p className="mt-2 text-gray-600">
                    Phone: +91 91992 33328
                  </p>

                  <p className="mt-2 text-gray-600">
                    Email: contact@sevaisdharma.org
                  </p>
                </div>
              </section>

              {/* Disclaimer */}
              <div className="mt-12 border-t border-gray-200 pt-8">
                <p className="text-sm leading-7 text-gray-500">
                  This page is intended as a general website privacy notice
                  and should be reviewed and updated with appropriate
                  professional legal advice before the organization begins
                  large-scale data collection, fundraising, or other
                  regulated activities.
                </p>
              </div>

            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}