import Link from "next/link";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-black text-white"
    >
      {/* Thin green accent bar */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          z-20
          h-1
          w-48
          -translate-x-1/2
          rounded-b-full
          bg-emerald-500
        "
      />

      {/* Hero Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-88px)]
          w-full
          max-w-7xl
          items-center
          px-5
          py-16
          sm:px-8
          sm:py-20
          lg:px-12
          lg:py-24
        "
      >
        <div className="w-full max-w-4xl">

          {/* Main Heading */}
          <FadeIn delay={0.1}>
            <h1
              className="
                max-w-4xl
                text-4xl
                font-bold
                leading-[1.12]
                tracking-tight
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-[5.25rem]
              "
            >
              Serving Humanity.
              <br />
              Protecting Nature.
              <br />
              Inspiring Hope.
            </h1>
          </FadeIn>

          {/* Description */}
          <FadeIn delay={0.2}>
            <p
              className="
                mt-6
                max-w-3xl
                text-base
                leading-7
                text-white/80
                sm:mt-7
                sm:text-lg
                sm:leading-8
                lg:text-xl
              "
            >
              Seva Is Dharma Foundation is dedicated to creating lasting
              impact through compassion, animal welfare, food distribution,
              education, and environmental conservation.
            </p>
          </FadeIn>

          {/* Buttons */}
          <FadeIn delay={0.3}>
            <div
              className="
                mt-8
                flex
                w-full
                flex-col
                gap-3
                sm:mt-9
                sm:flex-row
                sm:items-center
              "
            >
              {/* Volunteer */}
              <Link
                href="/#volunteer"
                className="
                  inline-flex
                  min-h-[54px]
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  bg-emerald-500
                  px-7
                  py-3
                  text-base
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-emerald-950/30
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-emerald-400
                  hover:shadow-xl
                  sm:w-auto
                  sm:px-8
                "
              >
                Become a Volunteer
              </Link>

              {/* Donate */}
              <Link
                href="/donate"
                className="
                  inline-flex
                  min-h-[54px]
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/70
                  bg-transparent
                  px-7
                  py-3
                  text-base
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-white
                  hover:text-black
                  sm:w-auto
                  sm:px-8
                "
              >
                Donate Now
              </Link>
            </div>
          </FadeIn>

        </div>
      </div>

      {/* Subtle bottom transition */}
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