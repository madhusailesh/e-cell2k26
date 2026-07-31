"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import wings from "./data";
import WingDetails from "./WingDetails";

export default function WingsPage() {
  const [selectedWing, setSelectedWing] = useState(null);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">

        {/* Hero */}
        <section className="pt-36 pb-24">

          <div className="max-w-7xl mx-auto px-6">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >

               

              <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                Our Wings
              </h1>

              <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
                Every wing at E-Cell VSSUT has a unique purpose. From internships
                and startup acceleration to collaborations, each division works
                together to build a strong entrepreneurial ecosystem.
              </p>

            </motion.div>

            {/* Cards */}

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

              {wings.map((wing, index) => (

                <motion.div
                  key={wing.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                  }}
                >

                  <div
                    onClick={() => setSelectedWing(wing)}
                    className="cursor-pointer rounded-3xl border border-white/10 bg-[#111] hover:border-white/30 transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full"
                  >

                    {/* Image */}

                    <div className="h-60 flex items-center justify-center border-b border-white/10 bg-[#181818]">

                      <Image
                        src={wing.image}
                        alt={wing.title}
                        width={180}
                        height={180}
                        className="object-contain transition duration-300 hover:scale-105"
                      />

                    </div>

                    {/* Content */}

                    <div className="p-7">

                      <p className="uppercase text-xs tracking-[3px] text-gray-500 mb-3">

                        {wing.tagline}

                      </p>

                      <h2 className="text-2xl font-bold mb-4">

                        {wing.title}

                      </h2>

                      <p className="text-gray-400 leading-7">

                        {wing.shortDescription}

                      </p>

                    </div>

                    {/* Footer */}

                    <div className="px-7 py-5 border-t border-white/10 flex justify-between items-center">

                      <span className="text-sm font-medium">

                        View Details

                      </span>

                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-2"
                      />

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </section>

        {/* Details */}

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