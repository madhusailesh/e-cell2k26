"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Image from "next/image";
export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="relative w-full py-32 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <div className="text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-black tracking-wide"
            >
              About Us
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Card */}
            {/* Left Logo */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="lg:col-span-6 flex justify-center items-center"
>
  <Image
    src="/aboutus.svg"
    alt="E-Cell VSSUT"
    width={550}
    height={550}
    priority
    className="w-full max-w-xl h-auto object-contain"
  />
</motion.div>
            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
                

              <div className="space-y-6 text-gray-300 text-lg leading-9">
                <p>
                  Entrepreneurship Cell (E-Cell) is a non-profit,
                  student-run organization at Veer Surendra Sai
                  University of Technology (VSSUT), Burla, Odisha.
                </p>

                <p>
                  We aim to build a culture of innovation and
                  entrepreneurship by encouraging students to transform
                  their ideas into impactful ventures. Through various
                  initiatives, we help students develop creativity,
                  leadership, and problem-solving skills.
                </p>

                <p>
                  E-Cell provides opportunities to learn from successful
                  entrepreneurs, connect with industry professionals,
                  collaborate with like-minded innovators, and gain
                  access to valuable guidance and resources.
                </p>

                <p>
                  Our mission is to empower every aspiring entrepreneur
                  with the confidence, knowledge, and support needed to
                  create meaningful solutions for society.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}