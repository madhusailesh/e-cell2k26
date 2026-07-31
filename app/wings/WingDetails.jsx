"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Target, Briefcase } from "lucide-react";

export default function WingDetails({ wing, onClose }) {
  if (!wing) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm overflow-y-auto"
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
            <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
              <button
                onClick={onClose}
                className="flex items-center gap-2 border border-white/15 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
              >
                <ArrowLeft size={18} />
                Back
              </button>

              <h2 className="font-semibold">{wing.title}</h2>

              <div />
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 py-14">
            {/* Hero */}
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div className="flex justify-center">
                <div className="w-72 h-72 rounded-3xl border border-white/10 bg-neutral-900 flex items-center justify-center">
                  <Image
                    src={wing.image}
                    alt={wing.title}
                    width={220}
                    height={220}
                    className="object-contain"
                  />
                </div>
              </div>

              <div>
                <p className="uppercase tracking-[4px] text-sm text-gray-400">
                  {wing.tagline}
                </p>

                <h1 className="text-5xl font-black mt-4">{wing.title}</h1>

                <p className="text-gray-400 mt-6 leading-8">{wing.about}</p>
              </div>
            </div>

            {/* Grid */}

            <div className="grid lg:grid-cols-2 gap-8 mt-20">
              {/* Objectives */}

              <div className="border border-white/10 rounded-2xl p-8 bg-neutral-900">
                <div className="flex items-center gap-3 mb-6">
                  <Target />
                  <h3 className="text-2xl font-bold">Objectives</h3>
                </div>

                <ul className="space-y-4">
                  {wing.objectives.map((item, index) => (
                    <li key={index} className="flex gap-3 text-gray-300">
                      <span>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Responsibilities */}

              <div className="border border-white/10 rounded-2xl p-8 bg-neutral-900">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase />
                  <h3 className="text-2xl font-bold">Responsibilities</h3>
                </div>

                <ul className="space-y-4">
                  {wing.responsibilities.map((item, index) => (
                    <li key={index} className="flex gap-3 text-gray-300">
                      <span>•</span>
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
