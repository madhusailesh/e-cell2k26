"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import DomeGallery from "@/components/ui/DomeGallery";
import { Sparkles } from "lucide-react";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-hidden">
      {/* Navbar Integration */}
      <Navbar />

      <section className="relative pt-32 pb-24 sm:pb-28">
        
        {/* Background Ambient Glow */}
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-white/5 blur-[180px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Heading Section */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-12 sm:mb-16"
          >
             

            <h1 className="text-4xl sm:text-6xl font-black tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
              Gallery
            </h1>

             
          </motion.div>

          {/* Borderless Glass Container for DomeGallery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-[28px] bg-transparent overflow-hidden"
          >
            <div className="h-[60vh] sm:h-[70vh] lg:h-[75vh] w-full relative">
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