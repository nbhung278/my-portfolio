"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import Technologies from "@/components/Technologies";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Information from "@/components/Information";
import Contact from "@/components/Contact";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

const sections = [
  {
    id: "hero",
    className:
      "min-h-[80vh] flex flex-col items-center justify-center text-center relative z-10",
    content: <Information />,
  },
  {
    id: "projects",
    className:
      "py-20 flex flex-col items-center bg-gradient-to-b from-[#18122b] to-[#0a0a0a] w-full",
    content: (
      <SectionInView>
        <Projects />
      </SectionInView>
    ),
  },
  {
    id: "timeline",
    className: "py-20 flex flex-col items-center bg-black/90",
    content: (
      <SectionInView>
        <Timeline />
      </SectionInView>
    ),
  },
  {
    id: "technologies",
    className: "py-20 flex flex-col items-center bg-black/80",
    content: (
      <SectionInView>
        <Technologies />
      </SectionInView>
    ),
  },
  {
    id: "education",
    className: "py-20 flex flex-col items-center bg-black/80",
    content: (
      <SectionInView>
        <Education />
      </SectionInView>
    ),
  },
  {
    id: "cta",
    className: "py-20 flex flex-col items-center justify-center bg-black/90",
    content: (
      <SectionInView>
        <Contact />
      </SectionInView>
    ),
  },
];

function SectionInView({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.7 }}
      className="w-full"
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#1a1333] via-[#18122b] to-[#0a0a0a] min-h-screen w-full text-white font-sans scroll-smooth">
      <DotPattern
        width={30}
        height={30}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] "
        )}
      />

      <header className="w-full flex items-center justify-between px-4 py-4 md:px-12 z-20 relative">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">
            Hung Nguyen
          </span>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#hero" className="hover:underline">
              Home
            </a>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
            <a href="#cta" className="hover:underline">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/nbhung278"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/h%C6%B0ng-nguy%E1%BB%85n-334b13253/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>
      <main>
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className={section.className + " px-4 md:px-0"}
          >
            {section.content}
          </section>
        ))}
      </main>
      <footer className="py-8 text-center text-xs text-gray-500 bg-black/80 mt-12">
        © {new Date().getFullYear()} Hung Nguyen. Inspired by Vite. Built with
        Next.js, Tailwind CSS & Framer Motion.
      </footer>
    </div>
  );
}
