import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";

import AboutGroup from "@/components/sections/AboutGroup";

import Divisions from "@/components/sections/Divisions";                                                                                    import Impact from "@/components/sections/Impact";
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AboutGroup />
        <Divisions />
        <Impact />
      </main>

      <Footer />
    </>
  );
}