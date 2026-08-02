"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// --- 3D IMPORTS ---
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import wings from "./data";
import WingDetails from "./WingDetails";

// ==========================================
// 1. CARD KE ANDAR WALA 3D OBJECT
// ==========================================
function Card3DModel({ isHovered }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // Hover karne par speed badhegi
    const speed = isHovered ? 2.5 : 0.2;
    meshRef.current.rotation.x += delta * speed;
    meshRef.current.rotation.y += delta * speed;

    // Hover karne par thoda bada hoga
    const targetScale = isHovered ? 1.3 : 1;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
  });

  return (
    // Object ko card ke piche aur right side shift kiya hai
    <mesh ref={meshRef} position={[1.5, 0, -2]}>
      <octahedronGeometry args={[1.2, 0]} />
      <meshStandardMaterial 
        color="#ffffff" 
        wireframe={true} 
        transparent={true} 
        opacity={isHovered ? 0.25 : 0.05} // Hover par glow badhega
      />
    </mesh>
  );
}

// ==========================================
// 2. INDIVIDUAL WING CARD COMPONENT
// ==========================================
function WingCard({ wing, index, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="h-full"
    >
      <div
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="cursor-pointer rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0a0a0a] hover:border-white/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full flex flex-col group relative"
      >
        {/* --- 3D CANVAS INSIDE THE CARD --- */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 4] }}>
            <ambientLight intensity={1} />
            <Card3DModel isHovered={isHovered} />
          </Canvas>
        </div>

        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

        {/* Image Container */}
        <div className="h-52 sm:h-60 flex items-center justify-center border-b border-white/10 bg-[#111] p-6 relative z-10">
          <Image
            src={wing.image}
            alt={wing.title}
            width={180}
            height={180}
            className="object-contain max-h-full transition duration-500 group-hover:scale-110 relative z-10"
          />
        </div>

        {/* Content Section */}
        <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between relative z-10">
          <div>
            <p className="uppercase text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] text-gray-500 mb-2 sm:mb-3 font-medium">
              {wing.tagline}
            </p>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-gray-200 transition-colors">
              {wing.title}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-6 sm:leading-7 font-light group-hover:text-gray-300 transition-colors">
              {wing.shortDescription}
            </p>
          </div>
        </div>

        {/* Footer / Action */}
        <div className="px-5 sm:px-7 py-4 sm:py-5 border-t border-white/10 flex justify-between items-center bg-white/[0.02] relative z-10">
          <span className="text-xs sm:text-sm font-medium text-gray-400 group-hover:text-white transition-colors uppercase tracking-wider">
            View Details
          </span>
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-2 text-gray-400 group-hover:text-white sm:w-[18px] sm:h-[18px]"
          />
        </div>
      </div>
    </motion.div>
  );
}

// ==========================================
// 3. MAIN PAGE
// ==========================================
export default function WingsPage() {
  const [selectedWing, setSelectedWing] = useState(null);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
        {/* Hero Section */}
        <section className="pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight">
                Our Wings
              </h1>
            </motion.div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 md:mt-20">
              {wings.map((wing, index) => (
                <WingCard
                  key={wing.id}
                  wing={wing}
                  index={index}
                  onClick={() => setSelectedWing(wing)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Details Modal / Drawer */}
        {selectedWing && (
          <WingDetails
            wing={selectedWing}
            onClose={() => setSelectedWing(null)}
          />
        )}
      </main>
    </>
  );
}