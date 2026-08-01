"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader({ onFinish }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 2.8,
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={onFinish}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05070B] overflow-hidden selection:bg-transparent"
      style={{ perspective: "1200px" }}
    >
      {/* Cinematic Border Frame Reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: [0, 1, 0.3], scale: [0.98, 1, 1] }}
        transition={{ duration: 2.6, times: [0, 0.6, 1], ease: "easeInOut" }}
        className="absolute inset-4 sm:inset-8 border border-white/10 rounded-2xl pointer-events-none"
      />

      {/* Soft Ambient Depth Aura */}
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: [0, 0.5, 0], scale: [0.4, 1.4, 0.9] }}
        transition={{ duration: 2.6, ease: "easeInOut" }}
        className="absolute w-72 h-72 sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-tr from-purple-900/40 via-indigo-900/20 to-transparent blur-[120px] pointer-events-none"
      />

      {/* Rotating Cybernetic Ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.2, rotate: -45 }}
        animate={{ opacity: [0, 0.8, 0], scale: [0.7, 1.2, 0.4], rotate: 315 }}
        transition={{
          opacity: { duration: 2.6, times: [0, 0.6, 1] },
          scale: { duration: 2.6, ease: [0.16, 1, 0.3, 1] },
          rotate: { duration: 10, ease: "easeOut" }
        }}
        className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full border border-white/10 pointer-events-none"
      />

      {/* Center 3D Logo: Screen se bahar aane wala POP effect (Zero Blur) */}
      <motion.div
        initial={{
          scale: 0.02,
          opacity: 0,
          z: -2500,
        }}
        animate={{
          scale: [0.02, 1.8, 0.5],     // Bohot chote se start -> Screen se bahar aate waqt bohot bada (1.8) -> Wapas piche jakar chota
          opacity: [0, 1, 0],            // Fade in -> Ekdum crystal clear -> Piche jaate waqt fade out
          z: [-2500, 600, -2000],        // Deep space se chal kar aage screen ke bahar aana (600) -> Piche fade out (-2000)
        }}
        transition={{
          duration: 2.6,
          times: [0, 0.55, 1],
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="relative w-28 h-28 sm:w-38 sm:h-38 md:w-48 md:h-48"
      >
        <Image
          src="/logo.png"
          alt="E-Cell VSSUT Logo"
          fill
          priority
          sizes="(max-width: 768px) 112px, 192px"
          className="object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.35)]"
        />
      </motion.div>

      {/* Branding Subtext */}
      <motion.div
        initial={{ opacity: 0, y: 10, letterSpacing: "0.2em" }}
        animate={{ opacity: [0, 0.8, 0], y: [10, 0, -5], letterSpacing: "0.4em" }}
        transition={{ duration: 2.0, delay: 0.3, ease: "easeOut" }}
        className="absolute bottom-16 text-[10px] sm:text-xs uppercase font-mono text-neutral-400 font-light"
      >
        E-Cell VSSUT
      </motion.div>

    </motion.div>
  );
}