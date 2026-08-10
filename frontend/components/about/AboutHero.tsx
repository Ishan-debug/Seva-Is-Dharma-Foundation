import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Breadcrumb from "@/components/Breadcrumb";

export default function AboutHero() {
  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/about-hero.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <Container className="relative z-10">
        <Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "About" },
  ]}
/>

        <div className="max-w-3xl mt-6">
          <span className="inline-block rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white">
            About Seva Is Dharma Foundation
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-6xl">
            Serving Humanity.
            <br />
            Protecting Nature.
            <br />
            Inspiring Hope.
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-200">
            Seva Is Dharma Foundation is dedicated to creating lasting impact
            through compassion, animal welfare, food distribution, education,
            and environmental conservation.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button>Become a Volunteer</Button>

            <Button variant="outline">
              Donate Now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}