"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader({ onFinish }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 2.6,
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={onFinish}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05070B] overflow-hidden selection:bg-transparent"
    >
      {/* Cinematic Border Frame Reveal (GPU Optimized) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: [0, 1, 0.3], scale: [0.98, 1, 1] }}
        transition={{ duration: 2.4, times: [0, 0.6, 1], ease: "easeInOut" }}
        className="absolute inset-4 sm:inset-8 border border-white/10 rounded-2xl pointer-events-none"
      />

      {/* Soft Ambient Depth Aura */}
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: [0, 0.4, 0], scale: [0.5, 1.3, 0.9] }}
        transition={{ duration: 2.4, ease: "easeInOut" }}
        className="absolute w-72 h-72 sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-tr from-purple-900/30 via-indigo-900/15 to-transparent blur-2xl pointer-events-none"
      />

      {/* Rotating Cybernetic Ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.3, rotate: 0 }}
        animate={{ opacity: [0, 0.7, 0], scale: [0.7, 1.1, 0.4], rotate: 360 }}
        transition={{
          opacity: { duration: 2.4, times: [0, 0.6, 1] },
          scale: { duration: 2.4, ease: [0.16, 1, 0.3, 1] },
          rotate: { duration: 8, repeat: Infinity, ease: "linear" }
        }}
        className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full border border-dashed border-white/10 pointer-events-none"
      />

      {/* Center Logo: Ultra-Smooth GPU Accelerated Pop-out & Retreat Effect */}
      <motion.div
        initial={{
          scale: 0.1,
          opacity: 0,
        }}
        animate={{
          scale: [0.1, 1.7, 0.6],    // Chote se start -> Screen se bahar aate waqt bada (1.7) -> Piche jakar chota
          opacity: [0, 1, 0],           // Fade in -> Ekdum crystal clear -> Fade out
        }}
        transition={{
          duration: 2.4,
          times: [0, 0.55, 1],
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative w-28 h-28 sm:w-38 sm:h-38 md:w-48 md:h-48 will-change-transform"
      >
        <Image
          src="/logo.png"
          alt="E-Cell VSSUT Logo"
          fill
          priority
          sizes="(max-width: 768px) 112px, 192px"
          className="object-contain drop-shadow-[0_0_35px_rgba(255,255,255,0.3)]"
        />
      </motion.div>

      {/* Branding Subtext */}
      <motion.div
        initial={{ opacity: 0, y: 10, letterSpacing: "0.2em" }}
        animate={{ opacity: [0, 0.8, 0], y: [10, 0, -5], letterSpacing: "0.4em" }}
        transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-16 text-[10px] sm:text-xs uppercase font-mono text-neutral-400 font-light"
      >
        E-Cell VSSUT
      </motion.div>

    </motion.div>
  );
}