"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- 3D IMPORTS ---
import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";

// ==========================================
// 1. 3D NAVBAR BACKGROUND
// ==========================================
function Nav3DBackground() {
  return (
    // Navbar choda (wide) aur patla (thin) hota hai, isliye scale ko [30, 2, 2] rakha hai
    <Sparkles 
      count={150} 
      scale={[30, 3, 2]} 
      size={1.5} 
      speed={0.3} 
      opacity={0.4} 
      color="#ffffff" 
    />
  );
}

// ==========================================
// 2. MAIN NAVBAR COMPONENT
// ==========================================
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    // { name: "Startups", href: "/startups" },
    { name: "Wings", href: "/wings" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
    { name: "Team", href: "/team" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      
      {/* 
        MAIN NAVBAR CONTAINER 
        Glassmorphism effect ke sath
      */}
      <div className="absolute inset-0 bg-[#050505]/60 backdrop-blur-xl border-b border-white/10 z-10" />

      {/* --- 3D CANVAS BEHIND NAVBAR --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <Nav3DBackground />
        </Canvas>
      </div>

      {/* --- FOREGROUND CONTENT (z-20) --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex items-center justify-between h-20 sm:h-24 transition-all duration-300">
          
          {/* Constant & Big Logo on Left Side */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="E-Cell VSSUT Logo"
                fill
                className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                priority
              />
            </div>
          </Link>

          {/* Desktop & Tablet Links (With Framer Motion Hover Magic) */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-4 py-2 text-sm font-medium uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300"
              >
                {link.name}
                
                {/* Sexy Animated Underline Effect */}
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile & Tablet Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Toggle Menu"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE/TABLET DROPDOWN DRAWER (Framer Motion) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden shadow-2xl z-20"
          >
            <div className="px-6 py-6 space-y-4">
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
                    className="block text-lg font-medium tracking-wider uppercase text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300"
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