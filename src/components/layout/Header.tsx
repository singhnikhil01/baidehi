"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChefHat, Phone } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-sm py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold text-white tracking-tight">
              Baidehi
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-emerald-100 transition-colors hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-emerald-100 transition-colors hover:text-white"
            >
              Our Range
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-emerald-100 transition-colors hover:text-white"
            >
              About
            </Link>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 ml-4">
              <Link
                href="/recipes"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-600 bg-emerald-900/50 px-5 py-2 text-xs font-bold text-white transition-all hover:bg-emerald-800"
              >
                <ChefHat className="w-4 h-4 text-emerald-200" />
                Recipe Guide
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-2 text-xs font-bold text-black shadow-lg shadow-amber-900/20 transition-all hover:bg-amber-400 hover:scale-105"
              >
                <Phone className="w-3 h-3 fill-current" />
                Partner With Us
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 glass border-t border-emerald-800/50 p-6 lg:hidden flex flex-col gap-4 shadow-xl">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base font-medium text-white py-2"
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base font-medium text-white py-2"
          >
            Our Range
          </Link>
          <Link
            href="/recipes"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base font-medium text-white py-2"
          >
            Recipes
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base font-medium text-white py-2"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 flex items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-bold text-black"
          >
            Contact Sales
          </Link>
        </div>
      )}
    </header>
  );
}
