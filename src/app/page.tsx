import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import LeetCodeActivity from "@/components/LeetCodeActivity";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Projects />
        <LeetCodeActivity />
        <Experience />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}
