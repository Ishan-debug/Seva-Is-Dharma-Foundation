"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  Utensils,
  HeartHandshake,
  Trees,
  Users,
} from "lucide-react";

const stats = [
  {
    icon: Utensils,
    number: 0,
    label: "Meals Served",
  },
  {
    icon: HeartHandshake,
    number: 0,
    label: "Animals Helped",
  },
  {
    icon: Trees,
    number: 0,
    label: "Trees Planted",
  },
  {
    icon: Users,
    number: 0,
    label: "Volunteers",
  },
];

export default function Impact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-b from-orange-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-orange-600 font-semibold uppercase tracking-widest">
            Our Impact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Small Acts.
            <span className="text-orange-500">
              {" "}Big Difference.
            </span>
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Every meal served, every animal protected, and every tree planted
            brings us closer to a compassionate and sustainable future.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="bg-white rounded-3xl shadow-lg p-8 text-center border border-orange-100"
            >
              <item.icon
                className="mx-auto mb-5 text-orange-500"
                size={42}
              />

              <h3 className="text-5xl font-bold text-gray-900">
                {inView ? (
                  <CountUp end={item.number} duration={2} />
                ) : (
                  0
                )}
                +
              </h3>

              <p className="mt-3 text-gray-600 font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}