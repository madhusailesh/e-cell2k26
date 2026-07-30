"use client";
import { motion } from "framer-motion";

export default function Loader({ onFinish }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.0 }}
      onAnimationComplete={onFinish}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#05070B]"
    >
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold tracking-widest text-white uppercase"
        >
          E-CELL VSSUT
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="h-0.5 bg-white mt-4 mx-auto rounded-full"
        />
      </div>
    </motion.div>
  );
}