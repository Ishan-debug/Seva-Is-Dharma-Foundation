import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function OurStory() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeading
          badge="Our Story"
          title="Every Act of Kindness Creates Hope"
          description="Our journey is inspired by compassion, selfless service, and the belief that together we can build a better world."
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/about-story.jpg"
              alt="Volunteers serving people"
              width={700}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900">
              सेवा परमो धर्मः
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Seva Is Dharma Foundation was established with a simple yet
              powerful belief — true service has the power to transform lives.
              Inspired by the timeless principle <strong>"सेवा परमो धर्मः"</strong>,
              we work to support underprivileged communities, protect animals,
              and preserve nature for future generations.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every meal shared, every tree planted, every rescued animal, and
              every helping hand represents our commitment to building a kinder,
              healthier, and more sustainable world.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-green-50 p-6 text-center">
                <h4 className="text-4xl font-bold text-green-700">100%</h4>
                <p className="mt-2 text-gray-600">Committed to Service</p>
              </div>

              <div className="rounded-2xl bg-green-50 p-6 text-center">
                <h4 className="text-4xl font-bold text-green-700">
                  Together
                </h4>
                <p className="mt-2 text-gray-600">
                  Building a Better Tomorrow
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}