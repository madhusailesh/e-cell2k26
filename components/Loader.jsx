"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader({ onFinish }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.2 }}
      onAnimationComplete={onFinish}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#05070B] overflow-hidden"
    >
      <div className="text-center flex flex-col items-center space-y-6">
        
        {/* Logo Animation: Age se piche (Zoom out / Shrink & Fade) */}
        <motion.div
          initial={{ scale: 1.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-24 h-24 sm:w-32 sm:h-32"
        >
          <Image
            src="/logo.png"
            alt="E-Cell VSSUT Logo"
            fill
            className="object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
            priority
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-widest text-white uppercase"
        >
          E-CELL VSSUT
        </motion.h1>

        {/* Loading Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "160px" }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="h-0.5 bg-white mx-auto rounded-full"
        />

      </div>
    </motion.div>
  );
}