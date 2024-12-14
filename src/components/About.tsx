"use client";
import useActive from "@/hook/use-active";
import { motion } from "framer-motion";

const AboutMe = () => {
  const { ref } = useActive("About");
  return (
    <section ref={ref} id="about" className="relative max-w-6xl mx-auto px-4 py-4 scroll-mt-12 sm:mt-16 mb-32" >
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center ">About Me</h1>

          <div className="space-y-6 text-lg">
            <p>
              I am a passionate <span className="font-semibold">software engineer</span> with a love for problem-solving. 
              <span className="italic">The thrill of discovering a solution to a</span> complex problem is what drives me in programming. 
              My core stack includes <span className="text-cyan-500 font-semibold">React, Next.js, Node.js, Nestjs, Django</span>. 
              I am always looking to learn new technologies.
            </p>

            <p>
              <span className="italic">When I am not coding,</span> I enjoy watching movies, reading books, and <span className="font-semibold">learning new things</span>.
            </p>
          </div>
        </div>

        <div className="relative w-72 h-96 flex-shrink-0  ">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-[40px] rotate-3 transition-transform duration-300 hover:rotate-6">
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-12 gap-4">
              {Array.from({ length: 96 }).map((_, i) => (
                <div key={i} className="bg-cyan-300/20 backdrop-blur-sm" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
