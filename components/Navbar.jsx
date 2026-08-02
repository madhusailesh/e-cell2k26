"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-0" : "py-1 sm:py-2"}`}>
      
      {/* BACKGROUND GLASSMORPHISM */}
      <div 
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled 
            ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
            : "bg-transparent border-b border-transparent"
        } z-10`} 
      />

      {/* AMBIENT GLOW */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center">
        <motion.div
          animate={{ x: ["-5%", "5%", "-5%"], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 w-[80%] md:w-[50%] h-full bg-white/10 blur-[50px] md:blur-[70px]"
        />
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative z-20">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24 transition-all duration-300">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="E-Cell VSSUT Logo"
                fill
                sizes="(max-width: 768px) 80px, 100px"
                className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                priority
              />
            </div>
          </Link>

          {/* PC & TABLET (Landscape) LINKS */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-3 py-2 text-[11px] xl:text-xs font-semibold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-300"
              >
                {link.name}
                
                {/* Underline Hover Effect */}
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* MOBILE & TABLET (Portrait) HAMBURGER BUTTON */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-300 hover:text-white focus:outline-none p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Toggle Menu"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={26} className="sm:w-8 sm:h-8" /> : <Menu size={26} className="sm:w-8 sm:h-8" />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE & TABLET (Portrait) DROPDOWN DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-3xl border-b border-white/10 overflow-hidden shadow-2xl z-20"
          >
            <div className="px-6 py-6 sm:py-8 sm:px-10 space-y-5 sm:space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-base sm:text-xl font-medium tracking-[0.15em] uppercase text-neutral-400 hover:text-white hover:translate-x-3 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}