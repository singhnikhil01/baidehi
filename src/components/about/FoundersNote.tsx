"use client";

import { Quote } from "lucide-react";

export default function FoundersNote() {
  return (
    <section className="relative py-24 bg-emerald-950 overflow-hidden">
      {/* Decorative Texture */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/10 mb-8">
          <Quote className="w-5 h-5 text-amber-500" />
        </div>

        <h2 className="text-3xl md:text-4xl font-serif text-white mb-8 leading-snug">
          "For 15 years, our mission has been simple: to create a noodle that
          holds the{" "}
          <span className="text-emerald-400 italic">soul of Mithila</span> in
          every strand."
        </h2>

        <div className="flex flex-col items-center">
          {/* Signature / Name */}
          <p className="text-xl font-bold text-white mb-1">Mr. R.K. Yadav</p>
          <p className="text-emerald-100/50 text-xs uppercase tracking-widest mb-6">
            Founder & Chairman
          </p>

          <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
          <p className="mt-6 text-emerald-100/70 italic text-sm max-w-lg">
            "We started in Janakpur with a single machine. Today, Baidehi is a
            testament to the fact that world-class quality can originate from
            the heart of Nepal."
          </p>
        </div>
      </div>
    </section>
  );
}
