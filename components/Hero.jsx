"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Particles from "./ui/Particles";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse coordinates for interactive glow/spotlight
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full h-screen h-[100dvh] flex items-center justify-center overflow-hidden bg-black px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* Interactive Mouse Spotlight Gradient following cursor */}
      <div 
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-1"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168,85,247,0.12), transparent 80%)`
        }}
      />

      {/* Background Interactive Particles Effect */}
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-80">
        <Particles
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="#A855F7"
          gradientTo="#B497CF"
          glowColor="#120F17"
        />
      </div>

      {/* Deep Cinematic Vignette Gradient Overlay */}
      <div className="absolute inset-0 z-1 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/60 via-transparent to-black pointer-events-none" />

      {/* Foreground Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 pt-16 sm:pt-0 pointer-events-none">
        
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white uppercase leading-[1.05]">
            <span className="font-extralight text-neutral-400 block sm:inline">E-Cell</span>{" "}
            <span className="font-semibold tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
              VSSUT
            </span>
          </h1>
        </motion.div>

        {/* Refined Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] font-mono font-light text-neutral-400 max-w-xl mx-auto"
        >
          Where Innovation Meets Entrepreneurship
        </motion.p>

        {/* Stylish Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
        >
          <Link
            href="/events"
            className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden text-black font-medium bg-white rounded-full hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] cursor-pointer hover:scale-105 active:scale-95"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-semibold">
              Explore Events
            </span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/about"
            className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden text-white font-medium bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm cursor-pointer hover:scale-105 active:scale-95"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-300 group-hover:text-white transition-colors">
              Our Vision
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}