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
  //   {
  //     id: "community",
  //     className:
  //       "py-20 flex flex-col items-center bg-gradient-to-b from-black/80 to-gray-900/90",
  //     content: (
  //       <SectionInView>
  //         <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">
  //           Loved by the community
  //         </h2>
  //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
  //           {[1, 2, 3].map((i) => (
  //             <motion.div
  //               key={i}
  //               initial={{ opacity: 0, y: 30 }}
  //               whileInView={{ opacity: 1, y: 0 }}
  //               viewport={{ once: true }}
  //               transition={{ delay: i * 0.1, duration: 0.5 }}
  //               className="bg-black/60 rounded-xl p-6 shadow border border-gray-800"
  //             >
  //               <p className="text-gray-300 mb-4">
  //                 &quot;Hung is a very enthusiastic developer, his products are
  //                 always polished and creative.&quot;
  //               </p>
  //               <div className="flex items-center gap-3">
  //                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-700 to-indigo-700" />
  //                 <div>
  //                   <div className="font-semibold text-gray-200">
  //                     Dev Reviewer {i}
  //                   </div>
  //                   <div className="text-xs text-gray-400">@reviewer{i}</div>
  //                 </div>
  //               </div>
  //             </motion.div>
  //           ))}
  //         </div>
  //       </SectionInView>
  //     ),
  //   },
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
      <header className="w-full flex items-center justify-between px-4 py-4 md:px-12 z-20 relative">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">
            Hung Nguyen
          </span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#hero" className="hover:underline">
            Home
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#community" className="hover:underline">
            Community
          </a>
          <a href="#cta" className="hover:underline">
            Contact
          </a>
        </nav>
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
