import { motion } from "framer-motion";
import React from "react";

const Information = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-6"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-white via-purple-300 to-indigo-400 bg-clip-text text-transparent">
        Full Stack Developer
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
        I&apos;m a web developer with more than 3 years of experience (1.5 years
        Backend - Laravel, 2+ years Frontend - ReactJS). Good knowledge of
        Architecture Design, UX/UI, and Design Patterns. Participated in many
        projects, continuously improving my skills. Looking forward to meeting
        enthusiastic mentors. My goal is to become a full-stack website
        developer.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#projects"
          className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow hover:scale-105 transition-transform"
        >
          View Projects
        </a>
        <a
          href="https://github.com/hungnbdev"
          target="_blank"
          rel="noopener"
          className="px-6 py-2 rounded-full border border-gray-700 text-gray-200 font-semibold hover:bg-gray-800 transition"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
};

export default Information;
