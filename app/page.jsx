import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import about from "./about/page";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070B] text-white selection:bg-white selection:text-black">
      {/* Responsive Glassmorphism Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
      <about />
    </main>
  );
}