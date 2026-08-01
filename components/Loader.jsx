"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader({ onFinish }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 1.6,
        duration: 0.5,
        ease: "easeInOut",
      }}
      onAnimationComplete={onFinish}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden pointer-events-none"
    >
      {/* Reference style container window expansion */}
      <motion.div
        initial={{
          width: "150px",
          height: "150px",
        }}
        animate={{
          width: ["150px", "150px", "250vmax"],
          height: ["150px", "150px", "250vmax"],
        }}
        transition={{
          duration: 1.2,
          times: [0, 0.3, 1],
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden rounded-[4px] shadow-[0_0_0_150vmax_#000000]"
      >
        {/* Black inner cover layer */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0, 0] }}
          transition={{ duration: 0.5, times: [0, 0.4, 1] }}
          className="absolute inset-0 bg-black z-10"
        />
      </motion.div>

      {/* Logo jo zoom hokar bilkul screenshot wale center size (w-[350px] max-w-[40vw]) par aayega */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.2,
        }}
        animate={{
          opacity: [0, 1, 1],
          scale: [0.2, 0.2, 1],
        }}
        transition={{
          duration: 1.2,
          times: [0, 0.2, 1],
          ease: [0.76, 0, 0.24, 1],
        }}
        className="relative w-[320px] sm:w-[420px] md:w-[500px] aspect-[3/1] z-[10000] will-change-transform"
      >
        <Image
          src="/logo.png"
          alt="E-Cell VSSUT Logo"
          fill
          priority
          className="object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]"
        />
      </motion.div>
    </motion.div>
  );
}