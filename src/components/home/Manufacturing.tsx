"use client";

import { useState } from "react";
import { Wheat, Droplets, Hammer, Flame } from "lucide-react";

const recipeSteps = [
  {
    title: "Sourcing Sharbati Wheat",
    description:
      "We select only premium Sharbati wheat grains, known for their golden luster and high protein content.",
    icon: Wheat,
    color: "bg-amber-500",
  },
  {
    title: "The Perfect Hydration",
    description:
      "Our dough is hydrated with RO-purified water to exact ratios, ensuring elasticity without stickiness.",
    icon: Droplets,
    color: "bg-blue-400",
  },
  {
    title: "High-Pressure Rolling",
    description:
      "Passed through 7 rollers to align the gluten borders, creating a chewiness that holds up in the wok.",
    icon: Hammer,
    color: "bg-zinc-400",
  },
  {
    title: "Steam & Dry",
    description:
      "Flash steamed to lock in the structure, then slow-dried to preserve shelf life naturally.",
    icon: Flame,
    color: "bg-orange-500",
  },
];

export default function Manufacturing() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#022c22] py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-linear-to-b from-transparent to-emerald-800" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <p className="text-secondary font-bold tracking-widest uppercase text-xs mb-3">
            Our Process
          </p>
          <h2 className="text-4xl text-white font-serif italic">
            The Recipe of{" "}
            <span className="text-emerald-400 not-italic font-bold">
              Perfection
            </span>
          </h2>
          <p className="mt-4 text-emerald-200/60">
            How we create the raw noodle brick that powers thousands of street
            stalls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recipeSteps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-full p-8 rounded-2xl border border-emerald-800/50 bg-emerald-900/20 hover:bg-emerald-800/20 transition-all duration-300">
                <div
                  className={`w-12 h-12 rounded-lg ${step.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <step.icon
                    className={`h-6 w-6 ${step.color.replace("bg-", "text-")}`}
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-serif">
                  {step.title}
                </h3>
                <p className="text-sm text-emerald-200/60 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (Desktop) */}
              {index !== recipeSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-px bg-emerald-800/50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
