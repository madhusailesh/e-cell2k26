"use client";
import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <>
      {/* Page Transition Curtain (Parda Effect) */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ originY: 0 }}
        className="fixed inset-0 z-50 bg-black pointer-events-none"
      />

      {/* Page Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
}