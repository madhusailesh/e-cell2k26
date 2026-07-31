"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader({ onFinish }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 2.4,
        duration: 0.6,
        ease: "easeOut",
      }}
      onAnimationComplete={onFinish}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#05070B]"
      style={{ perspective: "2000px" }}
    >
      <motion.div
        initial={{
          scale: 0.05,
          opacity: 0,
          z: -2000,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          z: 0,
        }}
        transition={{
          duration: 2.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44"
      >
        <Image
          src="/logo.png"
          alt="E-Cell VSSUT Logo"
          fill
          priority
          className="object-contain"
        />
      </motion.div>
    </motion.div>
  );
}