"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

// --- 3D IMPORTS ---
import { Canvas } from "@react-three/fiber";
import { Sparkles, Float } from "@react-three/drei";

export default function Template({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // PERFORMANCE HACK: Transition ke baad 3D Canvas remove karne ke liye
  const [show3D, setShow3D] = useState(true);

  useEffect(() => {
    if (!isHome) {
      setShow3D(true);
      // 1.2 seconds ke baad canvas hategi (jab parda pura khul jayega)
      const timer = setTimeout(() => setShow3D(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [pathname, isHome]);

  if (isHome) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Clean & Smooth Diagonal Wipe (Parda) */}
      <motion.div
        initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        animate={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
        transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
        style={{ originX: 1 }}
        className="fixed inset-0 z-50 bg-[#050505] pointer-events-none flex items-center justify-center overflow-hidden border-l border-white/5"
      >
        
        {/* --- 3D CANVAS (Ultra-Minimal) --- */}
        {show3D && (
          <div className="absolute inset-0 opacity-60">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={1} />
              
              {/* Thin, Elegant Intersecting Rings */}
              <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh rotation={[Math.PI / 3, 0, 0]}>
                  {/* args=[radius, tube_thickness] - Thickness bahut kam rakhi hai */}
                  <torusGeometry args={[1.5, 0.005, 16, 64]} />
                  <meshBasicMaterial color="#ffffff" transparent opacity={0.4} />
                </mesh>
                <mesh rotation={[Math.PI / 2.5, Math.PI / 4, 0]} scale={0.8}>
                  <torusGeometry args={[1.5, 0.005, 16, 64]} />
                  <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
                </mesh>
              </Float>

              {/* Slow & Subtle Dust */}
              <Sparkles 
                count={100} 
                scale={10} 
                size={0.8} 
                speed={0.1} 
                opacity={0.3} 
                color="#ffffff" 
              />
            </Canvas>
          </div>
        )}

        {/* Soft Light Sweep */}
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: "-100vw", opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute w-32 h-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-12 blur-xl"
        />
      </motion.div>

      {/* Clean Content Reveal (Bina over-scaling ke) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}