"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import Navbar from "@/components/Navbar";
import { Quote } from "lucide-react";

// Testimonials Data
const Testimonials = [
  {
    name: 'KIIT TBI',
    url:  '/testimonials/kiit.png',
    caption: 'Bhubaneshwar',
    details: 'EcellVSSUT will act as an essential element for the future of startups and entrepreneurship in the near future.',
  },
  {
    name: 'Aman Dhattarwal',
    url: '/testimonials/ad.png',
    caption: 'Founder of Apni Kaksha',
    details: 'Tedx of VSSUT is better than that of IIT Guwahati.',
  },
  {
    name: 'Mayank Rajput',
    url: '/testimonials/mr.png',
    caption: 'CEO at RoboManiax EduTech Pvt. Ltd.',
    details: 'A superb team and a fantastic work culture make up E-cell VSSUT. Looking forward to collaboration with this body.',
  },
  {
    name: 'Shri L N Mishra',
    url: '/testimonials/lmm.png',
    caption: 'Former Director of MCL',
    details: 'E-Cell VSSUT Burla truly deserves personal appreciation. The kind of start-ups they have established within this short time is remarkable.',
  },
  {
    name: 'Dean',
    url: '/testimonials/dean.png',
    caption: 'RMSOEE IIT Kharagpur',
    details: 'A very young Entrepreneurship Cell with a very healthy start-up culture.',
  },
  {
    name: 'OrissaPost',
    url: '/testimonials/orissaPost.png',
    caption: 'Media Partner',
    details: 'An amazing and engaging student society of Odisha where young engineering undergrads generate ideas quite refreshing with a vision for social change.',
  }
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      <section className="relative w-full pt-40 pb-32 overflow-hidden">
        
        {/* Subtle Spotlight */}
        <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(circle_at_top,#ffffff10,transparent_55%)]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="space-y-5 text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black tracking-tight"
            >
              What People Say
            </motion.h1>
          </div>

          {/* Testimonials Slider Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <TestimonialSlider />
          </motion.div>

        </div>
      </section>
    </main>
  );
}

// Slider Sub-component with Progress Bar and EffectCards
function TestimonialSlider() {
  const [progress, setProgress] = useState(0);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        speed={900}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        onAutoplayTimeLeft={(s, time, progressVal) => {
          setProgress((1 - progressVal) * 100);
        }}
        className="w-full py-6"
      >
        {Testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="overflow-visible">
            <div className="relative rounded-[30px] border border-white/10 bg-gradient-to-b from-[#111111] to-[#080808] overflow-hidden transition-all duration-500 hover:border-white/20 hover:scale-[1.015] p-8 sm:p-12 shadow-2xl">
              
              {/* Huge Decorative Quotation Mark */}
              <div className="absolute top-8 left-10 opacity-5 pointer-events-none">
                <Quote size={130} strokeWidth={1.2} />
              </div>

              <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                
                {/* Details */}
                <p className="text-lg sm:text-2xl leading-[1.8] font-light text-neutral-200 max-w-2xl mx-auto">
                  "{testimonial.details}"
                </p>

                {/* Author Info - Sizes Prop Added */}
                <div className="flex flex-col items-center gap-3 pt-4">
                  <div className="relative w-28 h-28 rounded-full border-2 border-white/20 overflow-hidden bg-neutral-900 shadow-xl">
                    <Image
                      src={testimonial.url}
                      alt={testimonial.name}
                      fill
                      sizes="112px"
                      className="object-cover scale-110"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold tracking-wide text-white">{testimonial.name}</h3>
                    {testimonial.caption && (
                      <p className="text-neutral-500 tracking-[0.25em] text-[11px] uppercase mt-1">
                        {testimonial.caption}
                      </p>
                    )}
                  </div>
                </div>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Progress Bar */}
      <div className="flex justify-center mt-8">
        <div className="w-28 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}