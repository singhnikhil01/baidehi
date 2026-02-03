import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Save,
} from "lucide-react";

export default function Footer() {
  const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Baidehi Nepal
TEL:+9779812345678
EMAIL:sales@baidehi.com.np
ADR:;;Janakpurdham, Dhanusha;;Nepal
END:VCARD`;

  const vCardHref = `data:text/vcard;charset=utf-8,${encodeURIComponent(vCardData)}`;

  return (
    <footer className="bg-[#022c22] border-t border-emerald-800/50 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white">
              Baidehi{" "}
              <span className="block text-[10px] sm:text-xs font-sans font-normal text-amber-500 tracking-widest mt-1">
                THE PRIDE OF MITHILA
              </span>
            </h2>
            <p className="text-emerald-100/60 text-sm leading-relaxed max-w-xs">
              Born in the holy city of Janakpurdham. Bringing the authentic
              taste of Mithila to the rest of Nepal since 2008.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-emerald-900 flex items-center justify-center text-amber-500 hover:bg-emerald-800 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-emerald-900 flex items-center justify-center text-amber-500 hover:bg-emerald-800 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-emerald-900 flex items-center justify-center text-amber-500 hover:bg-emerald-800 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-emerald-100/60 hover:text-amber-400 text-sm transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-emerald-100/60 hover:text-amber-400 text-sm transition-colors"
                >
                  Our Range
                </Link>
              </li>
              <li>
                <Link
                  href="/recipes"
                  className="text-emerald-100/60 hover:text-amber-400 text-sm transition-colors"
                >
                  Maithili Recipes
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-emerald-100/60 hover:text-amber-400 text-sm transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-emerald-100/60 hover:text-amber-400 text-sm transition-colors"
                >
                  Distributor Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info & QR */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3 text-sm text-emerald-100/60">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  Mithila Municipality-2,
                  <br />
                  Janakpurdham, Dhanusha,
                  <br />
                  Nepal
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-emerald-100/60">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <a
                  href="tel:+9779812345678"
                  className="hover:text-white transition-colors"
                >
                  +977 98123 45678
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-emerald-100/60">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <a
                  href="mailto:namaste@baidehi.com.np"
                  className="hover:text-white transition-colors"
                >
                  namaste@baidehi.com.np
                </a>
              </li>
            </ul>

            {/* Desktop QR */}
            <div className="hidden md:flex items-center gap-3 bg-emerald-900/30 p-2 rounded-lg border border-emerald-800/50 max-w-fit">
              <div className="bg-white p-1 rounded-md shrink-0">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(vCardData)}`}
                  alt="QR"
                  className="w-12 h-12"
                />
              </div>
              <div>
                <p className="text-white text-xs font-bold">Save Contact</p>
                <p className="text-emerald-100/40 text-[10px]">Head Office</p>
              </div>
            </div>

            {/* Mobile Button */}
            <a
              href={vCardHref}
              download="baidehi-contact.vcf"
              className="md:hidden flex items-center gap-3 bg-amber-500 text-black px-4 py-3 rounded-lg font-bold text-sm w-full justify-center hover:bg-amber-400 transition-colors"
            >
              <Save className="w-4 h-4" />
              Click to Save Contact
            </a>
          </div>

          {/* Map Location */}
          <div className="h-full min-h-[200px] flex flex-col">
            <h3 className="text-white font-bold mb-6">Factory Location</h3>
            <div className="w-full h-48 rounded-xl overflow-hidden border border-emerald-800 shadow-inner bg-emerald-900/50">
              {/* Janakpur Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57056.76466904128!2d85.89535073125002!3d26.727145200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec401a886a032f%3A0xc3f8e658e47bf1b6!2sJanakpur%2C%20Nepal!5e0!3m2!1sen!2snp!4v1707000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Footer Location Map"
                className="grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
              ></iframe>
            </div>
            <a
              href="https://maps.google.com/?q=Janakpurdham"
              target="_blank"
              className="text-xs text-amber-500 mt-3 hover:underline flex items-center gap-1"
            >
              View on Google Maps <MapPin className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="border-t border-emerald-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-emerald-100/40">
            © {new Date().getFullYear()} Baidehi Udhyog Janakpur. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-emerald-100/40">
            <Link href="#" className="hover:text-emerald-100 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-emerald-100 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
