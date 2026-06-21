import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import AboutGroup from "@/components/sections/AboutGroup";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AboutGroup />
      </main>

      <Footer />
    </>
  );
}