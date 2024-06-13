import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Project from "@/components/Project";

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
      <div className="bg-black">hello</div>
    </div>
  );
}
