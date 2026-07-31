"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "./about/page";
import EventsPage from "./events/page";
import Loader from "@/components/Loader";
import Gallery from "./gallery/page";
import WingsPage from "./wings/page";
import TestimonialsPage from "./testimonials/page";
import ContactPage from "./contact/page";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true); // Har baar home par aane par true rahega

  const handleLoaderFinish = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loader onFinish={handleLoaderFinish} />
      ) : (
        <main className="min-h-screen bg-[#05070B] text-white selection:bg-white selection:text-black">
          <Navbar />
          <Hero />
          <About />
          <EventsPage />
          <Gallery />
          <WingsPage />
          <TestimonialsPage />
          <ContactPage />
          <Footer />
        </main>
      )}
    </>
  );
}