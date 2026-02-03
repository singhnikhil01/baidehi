"use client";

import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function HomeContact() {
  return (
    <section className="relative py-24 bg-[#0a231e] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-4 block">
              Join the Network
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Become a{" "}
              <span className="text-emerald-400 italic">Distributor</span>
            </h2>
            <p className="text-emerald-100/70 text-lg mb-8 leading-relaxed">
              Partner with Nepal's fastest-growing noodle brand. We offer
              competitive margins, marketing support, and reliable logistics
              from our Janakpur factory to your warehouse.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer hover:bg-white/5 p-4 rounded-xl transition-all border border-transparent hover:border-white/10">
                <div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                  <Phone className="h-5 w-5 text-amber-500 group-hover:text-black" />
                </div>
                <div>
                  <p className="text-emerald-100/50 text-xs uppercase tracking-wider">
                    Direct Line
                  </p>
                  <p className="text-white font-bold text-lg">
                    +977 98123 45678
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer hover:bg-white/5 p-4 rounded-xl transition-all border border-transparent hover:border-white/10">
                <div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                  <Mail className="h-5 w-5 text-amber-500 group-hover:text-black" />
                </div>
                <div>
                  <p className="text-emerald-100/50 text-xs uppercase tracking-wider">
                    Email Inquiry
                  </p>
                  <p className="text-white font-bold text-lg">
                    sales@baidehi.com.np
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-emerald-800/50 p-8 rounded-2xl shadow-2xl relative">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-amber-500 text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg">
              Response in 24h
            </div>

            <h3 className="text-2xl font-serif text-white mb-6">
              Quick Inquiry
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-emerald-100/50 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black/20 border border-emerald-800/50 rounded-lg p-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-emerald-100/50 uppercase tracking-wider mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-black/20 border border-emerald-800/50 rounded-lg p-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="+977"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-emerald-100/50 uppercase tracking-wider mb-2">
                  Location (City/District)
                </label>
                <input
                  type="text"
                  className="w-full bg-black/20 border border-emerald-800/50 rounded-lg p-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="e.g. Pokhara"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-emerald-100/50 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  rows={3}
                  className="w-full bg-black/20 border border-emerald-800/50 rounded-lg p-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="I am interested in..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-bold py-4 rounded-lg hover:from-amber-300 hover:via-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-900/20 flex items-center justify-center gap-2"
              >
                Send Inquiry <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
