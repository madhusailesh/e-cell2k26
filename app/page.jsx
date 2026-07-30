"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "./about/page";
import EventsPage from "./events/page";
import Loader from "@/components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      
      <main className={`min-h-screen bg-[#05070B] text-white selection:bg-white selection:text-black ${loading ? "overflow-hidden h-screen" : ""}`}>
        {/* Responsive Glassmorphism Navbar */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Events Section */}
        <EventsPage />
      </main>
    </>
  );
}