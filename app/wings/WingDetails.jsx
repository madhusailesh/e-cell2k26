"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Target, Briefcase } from "lucide-react";

// --- 3D IMPORTS ---
import { Canvas, useFrame } from "@react-three/fiber";

// Image ke piche ghoomne wala 3D element
function Modal3DDecor() {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.8}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial 
        color="#ffffff" 
        wireframe 
        transparent 
        opacity={0.1} 
      />
    </mesh>
  );
}

export default function WingDetails({ wing, onClose }) {
  if (!wing) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md overflow-y-auto"
      >
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="min-h-screen bg-[#0d0d0d] text-white"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 bg-black/80 backdrop-blur border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-4 sm:py-5 flex items-center justify-between">
              <button
                onClick={onClose}
                className="flex items-center gap-2 border border-white/15 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
              >
                <ArrowLeft size={18} />
                Back
              </button>

              <h2 className="font-semibold tracking-wide uppercase text-sm sm:text-base hidden sm:block text-gray-300">
                {wing.title}
              </h2>

              <div className="w-24 hidden sm:block" />
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 py-14">
            
            {/* Hero */}
            <div className="grid md:grid-cols-2 gap-10 sm:gap-14 items-center">
              
              <div className="flex justify-center relative">
                
                {/* Image Box with 3D inside */}
                <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-3xl border border-white/10 bg-neutral-900 flex items-center justify-center relative overflow-hidden group">
                  
                  {/* 3D CANVAS (Image ke piche) */}
                  <div className="absolute inset-0 z-0 opacity-60">
                    <Canvas camera={{ position: [0, 0, 4] }}>
                      <ambientLight intensity={1} />
                      <Modal3DDecor />
                    </Canvas>
                  </div>

                  <Image
                    src={wing.image}
                    alt={wing.title}
                    width={200}
                    height={200}
                    className="object-contain relative z-10 group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                  />
                </div>
              </div>

              <div>
                <p className="uppercase tracking-[4px] text-xs sm:text-sm text-gray-400 font-medium">
                  {wing.tagline}
                </p>
                <h1 className="text-4xl sm:text-5xl font-black mt-4">{wing.title}</h1>
                <p className="text-gray-400 mt-6 leading-8 font-light text-sm sm:text-base">
                  {wing.about}
                </p>
              </div>
            </div>

            {/* Grid */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mt-16 sm:mt-20">
              
              {/* Objectives */}
              <div className="border border-white/10 rounded-2xl p-6 sm:p-8 bg-neutral-900/50 hover:bg-neutral-900 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="text-gray-300" />
                  <h3 className="text-xl sm:text-2xl font-bold">Objectives</h3>
                </div>
                <ul className="space-y-4">
                  {wing.objectives.map((item, index) => (
                    <li key={index} className="flex gap-3 text-gray-400 font-light text-sm sm:text-base leading-relaxed">
                      <span className="text-gray-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Responsibilities */}
              <div className="border border-white/10 rounded-2xl p-6 sm:p-8 bg-neutral-900/50 hover:bg-neutral-900 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="text-gray-300" />
                  <h3 className="text-xl sm:text-2xl font-bold">Responsibilities</h3>
                </div>
                <ul className="space-y-4">
                  {wing.responsibilities.map((item, index) => (
                    <li key={index} className="flex gap-3 text-gray-400 font-light text-sm sm:text-base leading-relaxed">
                      <span className="text-gray-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}