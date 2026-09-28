import Link from "next/link";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-[calc(100vh-88px)]
        w-full
        items-center
        overflow-hidden
        bg-[#F8F6F0]
      "
    >
      {/* Soft green glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-96
          w-96
          rounded-full
          bg-emerald-400/15
          blur-3xl
        "
      />

      {/* Soft orange glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-40
          h-96
          w-96
          rounded-full
          bg-orange-400/10
          blur-3xl
        "
      />

      {/* Very subtle center glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/60
          blur-3xl
        "
      />

      {/* Main Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-7xl
          items-center
          px-6
          py-24
          sm:px-8
          sm:py-28
          lg:px-12
          lg:py-32
        "
      >
        <div className="w-full max-w-4xl">

          {/* Small Label */}
          <FadeIn>
            <div className="mb-7">
              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-emerald-600/20
                  bg-emerald-500/10
                  px-5
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-emerald-700
                  sm:text-sm
                "
              >
                Seva Is Dharma Foundation
              </span>
            </div>
          </FadeIn>

          {/* Main Heading */}
          <FadeIn delay={0.1}>
            <h1
              className="
                max-w-5xl
                text-4xl
                font-bold
                leading-[1.08]
                tracking-[-0.03em]
                text-gray-950
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
                mt-8
                max-w-3xl
                text-base
                leading-7
                text-gray-600
                sm:mt-9
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
                mt-9
                flex
                w-full
                flex-col
                gap-3
                sm:mt-10
                sm:flex-row
                sm:items-center
              "
            >
              {/* Volunteer */}
              <Link
                href="/#volunteer"
                className="
                  inline-flex
                  min-h-[56px]
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  bg-emerald-600
                  px-7
                  py-3
                  text-base
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-emerald-900/15
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-emerald-700
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
                  min-h-[56px]
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-gray-900
                  bg-transparent
                  px-7
                  py-3
                  text-base
                  font-semibold
                  text-gray-900
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-gray-900
                  hover:text-white
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
    </section>
  );
}