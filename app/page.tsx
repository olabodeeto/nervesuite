import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Showcase } from "@/components/sections/Showcase";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative flex-1">
        <Hero />
        <Features />
        <Showcase />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
