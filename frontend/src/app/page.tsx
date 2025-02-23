// landing page

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ToolSection from "@/components/ToolSection";

export default function Home() {
  return (
    <main>
      <section>
        <Navbar/>
        <Hero/>
        <ToolSection/>
      </section>
    </main>
  );
}
