import React from "react";
import { TypingAnimation } from "./magicui/typing-animation";

const Information = () => {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center text-center">
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-semibold mb-6">
          <span className="bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">
            Nguyễn Bá Hưng
          </span>
        </h1>
        <TypingAnimation className="text-xl md:text-2xl text-gray-300 mb-8">
          Fullstack Developer
        </TypingAnimation>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I&apos;m a web developer with more than 3 years of experience (1.5
          years Backend - Laravel, 2+ years Frontend - ReactJS). Good knowledge
          of Architecture Design, UX/UI, and Design Patterns. Participated in
          many projects, continuously improving my skills. Looking forward to
          meeting enthusiastic mentors. My goal is to become a full-stack
          website developer.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="https://github.com/nbhung278"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-gray-700 text-gray-200 font-medium hover:bg-gray-800 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Information;
