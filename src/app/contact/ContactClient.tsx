"use client";

import { Phone, Mail, MapPin, QrCode, Save } from "lucide-react";

export default function Contact() {
  const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Baidehi Nepal
TEL:+9779812345678
EMAIL:sales@baidehi.com.np
ADR:;;Janakpurdham, Dhanusha;;Nepal
END:VCARD`;

  const vCardHref = `data:text/vcard;charset=utf-8,${encodeURIComponent(vCardData)}`;

  return (
    <div className="bg-[#022c22] pt-32 pb-24 sm:pb-32 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Info Side */}
          <div>
            <span className="text-amber-500 font-bold tracking-widest uppercase text-xs">
              Distributor Network
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-serif text-white mb-8">
              Partner with <br />{" "}
              <span className="text-emerald-400 italic">Baidehi Janakpur</span>
            </h1>
            <p className="text-emerald-100/70 text-lg mb-12 max-w-lg">
              Headquartered in the cultural capital. We supply premium noodles
              to Kathmandu, Pokhara, and across Eastern Nepal.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-900 border border-emerald-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold">
                    Factory & Head Office
                  </h3>
                  <p className="text-emerald-100/60 text-sm mt-1">
                    Mithila Municipality-2, Janakpurdham,
                    <br />
                    Dhanusha, Nepal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-900 border border-emerald-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Call / WhatsApp</h3>
                  <p className="text-emerald-100/60 text-sm mt-1">
                    +977 98123 45678
                  </p>
                  <p className="text-xs text-emerald-100/40 mt-1">
                    Sun - Fri, 9am - 6pm
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop QR Code Section */}
            <div className="hidden md:inline-block p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <QrCode className="text-white h-5 w-5" />
                <span className="text-white font-bold text-sm">
                  Scan to Save Contact
                </span>
              </div>
              <div className="w-40 h-40 bg-white p-2 rounded-lg">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(vCardData)}`}
                  alt="Contact QR Code"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Mobile Save Contact Button */}
            <a
              href={vCardHref}
              download="baidehi-contact.vcf"
              className="md:hidden flex items-center justify-center gap-3 bg-white/5 border border-white/10 p-6 rounded-2xl text-white font-bold hover:bg-white/10 transition-colors"
            >
              <Save className="w-6 h-6 text-amber-500" />
              <div>
                <p className="text-base">Click to Save Contact</p>
                <p className="text-xs text-emerald-100/40 font-normal">
                  Add to Phonebook instantly
                </p>
              </div>
            </a>
          </div>

          {/* Form Side */}
          <div className="bg-[#064e3b] p-8 sm:p-10 rounded-3xl border border-emerald-800 shadow-2xl">
            <h3 className="text-2xl text-white font-serif mb-6">
              Wholesale Inquiry
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold text-emerald-100/80 uppercase tracking-widest mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-[#022c22] border border-emerald-800 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-bold text-emerald-100/80 uppercase tracking-widest mb-2"
                  >
                    Pasal / Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full bg-[#022c22] border border-emerald-800 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Business Name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-bold text-emerald-100/80 uppercase tracking-widest mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-[#022c22] border border-emerald-800 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="+977"
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-xs font-bold text-emerald-100/80 uppercase tracking-widest mb-2"
                >
                  Your Location
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full bg-[#022c22] border border-emerald-800 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="e.g. Biratnagar"
                />
              </div>

              <div>
                <label
                  htmlFor="requirements"
                  className="block text-xs font-bold text-emerald-100/80 uppercase tracking-widest mb-2"
                >
                  Weekly Requirement
                </label>
                <select
                  id="requirements"
                  className="w-full bg-[#022c22] border border-emerald-800 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none"
                >
                  <option>Retail (Trial)</option>
                  <option>50kg - 100kg</option>
                  <option>100kg - 500kg</option>
                  <option>Distributor (Tonnes)</option>
                </select>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-amber-500 text-black font-bold py-4 rounded-lg hover:bg-amber-400 transition-all hover:shadow-lg hover:shadow-amber-900/40 uppercase tracking-wider text-sm"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-96 rounded-3xl overflow-hidden border border-emerald-800 shadow-2xl relative">
          <div className="absolute top-4 left-4 z-10 bg-white/90 p-2 rounded-lg shadow text-xs font-bold text-black border border-black/10">
            📍 Janakpurdham, Nepal
          </div>
          {/* Map pointing to Janakpur */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57056.76466904128!2d85.89535073125002!3d26.727145200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec401a886a032f%3A0xc3f8e658e47bf1b6!2sJanakpur%2C%20Nepal!5e0!3m2!1sen!2snp!4v1707000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Baidehi Factory Location"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
