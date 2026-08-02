"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detect karne ke liye simple logic
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Wings", href: "/wings" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
    { name: "Team", href: "/team" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-1" : "py-2 sm:py-3"}`}>
      
      {/* PERFORMANCE OPTIMIZED BACKGROUND */}
      <div 
        className={`absolute inset-0 transition-all duration-300 ${
          scrolled 
            ? "bg-[#050505]/95 shadow-[0_4px_20px_rgba(0,0,0,0.8)] border-b border-white/5" 
            : "bg-gradient-to-b from-black/80 to-transparent"
        } z-10`} 
      />

      {/* FOREGROUND CONTENT */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-20">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 transition-transform active:scale-95">
              <Image
                src="/logo.png"
                alt="E-Cell VSSUT Logo"
                fill
                sizes="(max-width: 768px) 60px, 80px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* PC & TABLET LINKS */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative py-2 text-[11px] xl:text-xs font-semibold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}
          </div>

          {/* MOBILE HAMBURGER BUTTON (100% Bug-Free Pure CSS Fix) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative flex items-center justify-center w-10 h-10 text-neutral-300 hover:text-white focus:outline-none rounded-full active:bg-white/10 transition-colors"
              aria-label="Toggle Menu"
            >
              {/* Menu Icon */}
              <Menu 
                size={28} 
                className={`absolute transition-all duration-300 transform ${
                  isOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
                }`} 
              />
              {/* Close (X) Icon */}
              <X 
                size={28} 
                className={`absolute transition-all duration-300 transform ${
                  isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
                }`} 
              />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#050505] border-b border-white/10 overflow-hidden shadow-2xl z-20"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base sm:text-lg font-medium tracking-wider uppercase text-neutral-400 hover:text-white active:translate-x-2 transition-all duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}