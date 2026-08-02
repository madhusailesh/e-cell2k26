"use client";

import React, { useState } from "react";

import Image from "next/image";

import Navbar from "@/components/Navbar";

import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";

import wings from "./data";

import WingDetails from "./WingDetails";

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
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight">
                Our Wings
              </h1>
            </motion.div>

            {/* Cards Grid - Fully Responsive */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 md:mt-20">
              {wings.map((wing, index) => (
                <motion.div
                  key={wing.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                  }}
                  className="h-full"
                >
                  <div
                    onClick={() => setSelectedWing(wing)}
                    className="cursor-pointer rounded-2xl sm:rounded-3xl border border-white/10 bg-[#111] hover:border-white/30 transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full flex flex-col group"
                  >
                    {/* Image Container */}

                    <div className="h-52 sm:h-60 flex items-center justify-center border-b border-white/10 bg-[#181818] p-6">
                      <Image
                        src={wing.image}
                        alt={wing.title}
                        width={180}
                        height={180}
                        className="object-contain max-h-full transition duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Content Section */}

                    <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="uppercase text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] text-gray-500 mb-2 sm:mb-3">
                          {wing.tagline}
                        </p>

                        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                          {wing.title}
                        </h2>

                        <p className="text-gray-400 text-sm sm:text-base leading-6 sm:leading-7">
                          {wing.shortDescription}
                        </p>
                      </div>
                    </div>

                    {/* Footer / Action */}

                    <div className="px-5 sm:px-7 py-4 sm:py-5 border-t border-white/10 flex justify-between items-center bg-white/[0.02]">
                      <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                        View Details
                      </span>

                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-2 text-gray-300 group-hover:text-white sm:w-[18px] sm:h-[18px]"
                      />
                    </div>
                  </div>
                </motion.div>
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
