import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export default function TermsPage() {
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
                { label: "Terms & Conditions" },
              ]}
            />

            <div className="mx-auto mt-10 max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-green-200">
                Website Guidelines
              </p>

              <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
                Terms & Conditions
              </h1>

              <p className="mt-5 text-green-50">
                Last updated: August 2026
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <article className="rounded-3xl bg-white p-8 shadow-sm sm:p-12">

              <p className="leading-8 text-gray-600">
                Welcome to the website of Seva Is Dharma Foundation.
                By accessing or using this website, you agree to use it
                responsibly and in accordance with these Terms & Conditions.
              </p>

              {/* 1 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  1. About This Website
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  This website provides information about the activities,
                  objectives, causes, volunteer opportunities, and other
                  initiatives associated with Seva Is Dharma Foundation.
                </p>
              </section>

              {/* 2 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  2. Website Use
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  Visitors agree to use this website only for lawful and
                  legitimate purposes.
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
                  <li>Do not attempt to damage or disrupt the website.</li>
                  <li>Do not submit false or misleading information.</li>
                  <li>Do not attempt unauthorized access to systems or data.</li>
                  <li>Do not use our content for fraudulent or unlawful activities.</li>
                  <li>Do not impersonate Seva Is Dharma Foundation or its representatives.</li>
                </ul>
              </section>

              {/* 3 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  3. Website Content
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  We aim to keep the information on this website accurate and
                  useful. However, information may change as our organization
                  develops, and we do not guarantee that every piece of
                  information will always be complete, current, or error-free.
                </p>
              </section>

              {/* 4 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  4. Intellectual Property
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  Unless otherwise stated, website content including text,
                  branding, logos, graphics, design elements, and original
                  materials belongs to or is used by Seva Is Dharma Foundation
                  with appropriate permission.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Content should not be reproduced, modified, distributed, or
                  commercially exploited without appropriate authorization.
                </p>
              </section>

              {/* 5 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  5. Volunteer Applications
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  Information submitted through volunteer forms should be
                  truthful and accurate. Submission of an application does not
                  automatically guarantee acceptance as a volunteer.
                </p>
              </section>

              {/* 6 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  6. Donations
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  Official donation facilities are currently being prepared.
                  Visitors should rely only on donation methods and account
                  details officially published on this website after they have
                  been verified.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  We will never ask donors to provide passwords, OTPs, PINs,
                  CVVs, or online banking credentials through our website.
                </p>
              </section>

              {/* 7 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  7. Third-Party Websites
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  Our website may eventually contain links to third-party
                  websites or social media platforms. We are not responsible
                  for the content, security, privacy practices, or availability
                  of external websites.
                </p>
              </section>

              {/* 8 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  8. Website Availability
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  We may temporarily suspend, modify, or discontinue parts of
                  the website for maintenance, security, technical updates, or
                  other operational reasons.
                </p>
              </section>

              {/* 9 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  9. Limitation of Liability
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  To the extent permitted by applicable law, Seva Is Dharma
                  Foundation will not be responsible for losses arising from
                  unauthorized use of the website, temporary website
                  unavailability, or reliance on information that has changed
                  after publication.
                </p>
              </section>

              {/* 10 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  10. Changes to These Terms
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  These Terms & Conditions may be updated as the organization,
                  website, and applicable requirements develop. Changes will be
                  published on this page with an updated date.
                </p>
              </section>

              {/* 11 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  11. Contact
                </h2>

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

              {/* Current Status */}
              <div className="mt-12 rounded-2xl border border-green-200 bg-green-50 p-6">
                <h3 className="font-semibold text-green-900">
                  Organizational Status
                </h3>

                <p className="mt-2 text-sm leading-7 text-green-800">
                  Seva Is Dharma Foundation is currently in the process of
                  establishing its formal organizational and legal structure.
                  Information on this website will be updated as the
                  organization progresses.
                </p>
              </div>

              <div className="mt-10 border-t border-gray-200 pt-8">
                <p className="text-sm leading-7 text-gray-500">
                  These website terms are intended as a general starting point
                  and should be reviewed by a qualified legal professional
                  before the organization begins substantial public fundraising
                  or enters formal agreements.
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