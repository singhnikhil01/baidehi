"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "9779876543210";
  const message = encodeURIComponent(
    "Namaste! I am interested in Baidehi Noodles distributorship.",
  );

  return (
    <div className="w-full flex justify-center md:block md:w-auto">
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="
          /* Mobile: Inline Button */
          relative transform-none mb-6 flex items-center gap-2 bg-[#25D366] px-6 py-3 rounded-full font-bold text-white shadow-lg
          /* Desktop: Fixed FAB */
          md:fixed md:bottom-8 md:right-8 md:mb-0 md:p-0 md:w-14 md:h-14 md:justify-center md:z-[100] md:hover:scale-110
          transition-all
        "
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 md:w-8 md:h-8 fill-current" />
        {/* Text for Mobile */}
        <span className="md:hidden text-sm">Chat on WhatsApp</span>

        {/* Tooltip for Desktop */}
        <span className="hidden md:block absolute right-16 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
          Chat with Sales
        </span>
      </a>
    </div>
  );
}
