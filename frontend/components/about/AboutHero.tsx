import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Breadcrumb from "@/components/Breadcrumb";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-28">
      {/* Subtle green glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-72
          w-72
          rounded-full
          bg-emerald-500/5
          blur-3xl
        "
      />

      <Container className="relative z-10">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "About" },
          ]}
        />

        <div className="mt-8 max-w-4xl">
          {/* Small section label */}
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
            About Us
          </p>

          {/* Heading */}
          <h1
            className="
              mt-5
              text-4xl
              font-bold
              leading-[1.12]
              tracking-tight
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Serving Humanity.
            <br />
            Protecting Nature.
            <br />
            Inspiring Hope.
          </h1>

          {/* Description */}
          <p
            className="
              mt-7
              max-w-3xl
              text-base
              leading-7
              text-white/75
              sm:text-lg
              sm:leading-8
            "
          >
            Seva Is Dharma Foundation is dedicated to creating lasting impact
            through compassion, animal welfare, food distribution, education,
            and environmental conservation.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 sm:mt-10">
            <Button>
              Become a Volunteer
            </Button>

            <Button variant="outline">
              Donate Now
            </Button>
          </div>
        </div>
      </Container>

      {/* Bottom transition */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-12
          bg-gradient-to-t
          from-black
          to-transparent
        "
      />
    </section>
  );
}