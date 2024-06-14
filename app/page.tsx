import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion"; 
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <TechStack />
      <div className="flex flex-col gap-16 mt-10">
        <Experience/>
        <Project/>
      </div>
      <Contact />
    </div>
  );
}
