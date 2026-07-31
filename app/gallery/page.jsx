"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import DomeGallery from "@/components/ui/DomeGallery";

export default function Gallery() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      <section className="relative pt-32 pb-20">
        {/* Background Glow */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-[600px] h-[600px] rounded-full bg-white/5 blur-[180px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h1 className="text-5xl md:text-6xl font-black tracking-wide">
              Gallery
            </h1>

            <p className="mt-5 text-gray-400 text-lg max-w-2xl mx-auto">
              A glimpse into the journey of E-Cell VSSUT through workshops,
              startup events, hackathons, speaker sessions, competitions and
              unforgettable moments.
            </p>
          </motion.div>

          {/* Glass Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden shadow-2xl"
          >
            <div className="h-[75vh]">
              <DomeGallery
                fit={1}
                minRadius={900}
                maxVerticalRotationDeg={18}
                segments={30}
                dragDampening={4.2}
                grayscale={false}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}