"use client";

import { motion } from "framer-motion";

import { usePathname } from "next/navigation";

export default function Template({ children }) {
  const pathname = usePathname();

  // Agar user Home page (/) par hai, toh parda/transition effect nahi chalega

  const isHome = pathname === "/";

  if (isHome) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Ultra-Modern Diagonal Wipe (Curtain) Effect for other pages */}

      <motion.div
        initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        animate={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
        exit={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
        style={{ originX: 1 }}
        className="fixed inset-0 z-50 bg-neutral-950 pointer-events-none flex items-center justify-center overflow-hidden border-l border-white/10"
      >
        {/* Glow Element traversing across the screen */}

        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: "-100vw", opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute w-40 h-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 blur-md"
        />
      </motion.div>

      {/* Content Cinematic Reveal */}

      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
