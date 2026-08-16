import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export default function DisclaimerPage() {
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
                { label: "Disclaimer" },
              ]}
            />

            <div className="mx-auto mt-10 max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-green-200">
                Important Information
              </p>

              <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
                Disclaimer
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

              {/* 1 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900">
                  1. General Information
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  The information provided on the Seva Is Dharma Foundation
                  website is intended for general informational purposes.
                  We aim to keep the information accurate and useful as our
                  organization develops.
                </p>
              </section>

              {/* 2 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  2. Organizational Status
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  Seva Is Dharma Foundation is currently establishing its
                  formal organizational and legal structure. Information
                  regarding registration, official status, banking
                  arrangements, and other organizational matters will be
                  updated on this website as they are officially established.
                </p>

                <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">
                  <p className="font-semibold text-green-900">
                    Transparency Notice
                  </p>

                  <p className="mt-2 leading-7 text-green-800">
                    Visitors should rely only on information that is officially
                    published and verified on this website. We will update
                    temporary information as the foundation's formal setup
                    progresses.
                  </p>
                </div>
              </section>

              {/* 3 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  3. Donations
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  Official donation facilities are currently not active.
                  Visitors should not send money to personal accounts or
                  unofficial payment methods claiming to represent Seva Is
                  Dharma Foundation.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Official donation details will be published on the Donate
                  page after the foundation's official banking and
                  organizational arrangements are completed.
                </p>
              </section>

              {/* 4 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  4. Contact Information
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  Contact information currently displayed on the website may
                  be updated as the foundation's official organizational
                  details are finalized.
                </p>

                <p className="mt-4 leading-8 text-gray-600">
                  Visitors should use the contact details currently published
                  on the official website and verify important information
                  before relying upon it.
                </p>
              </section>

              {/* 5 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  5. Causes and Activities
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  The causes, activities, service areas, and initiatives
                  described on this website represent the foundation's mission,
                  planned activities, or current outreach. Specific activities
                  and availability may change as our organization develops.
                </p>
              </section>

              {/* 6 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  6. External Links
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  The website may contain links to third-party websites,
                  platforms, or social media services. We are not responsible
                  for the content, security, availability, or privacy practices
                  of external websites.
                </p>
              </section>

              {/* 7 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  7. No Guarantee
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  While we make reasonable efforts to maintain accurate
                  information, we do not guarantee that all website content
                  will always be complete, current, or free from errors.
                </p>
              </section>

              {/* 8 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  8. Political Independence
                </h2>

                <div className="mt-5 rounded-2xl bg-gray-900 p-6 text-white">
                  <p className="text-lg font-semibold">
                    Seva Is Dharma Foundation is an independent,
                    non-political organization.
                  </p>

                  <p className="mt-3 leading-7 text-gray-300">
                    We will never collaborate with, endorse, or operate on
                    behalf of any political party. Our activities are intended
                    to serve communities and living beings without political
                    affiliation.
                  </p>
                </div>
              </section>

              {/* 9 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  9. Changes to This Disclaimer
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  This Disclaimer may be updated as the organization grows,
                  its legal status changes, or the website's services and
                  activities develop. Updates will be published on this page.
                </p>
              </section>

              {/* Contact */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  10. Contact
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

              {/* Legal note */}
              <div className="mt-12 border-t border-gray-200 pt-8">
                <p className="text-sm leading-7 text-gray-500">
                  This disclaimer is a general website notice and should be
                  reviewed by a qualified legal professional as the
                  organization's activities, registration, fundraising, and
                  legal obligations develop.
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