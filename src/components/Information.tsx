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
        <p className="text-gray-400 max-w-6xl mx-auto text-justify">
          I am a web developer with over 3 years of experience, including 1.5
          years in backend development using Laravel and more than 2 years
          specializing in frontend development with ReactJS. I have a solid
          understanding of architecture design, UX/UI principles, and software
          design patterns. My hands-on experience spans both frontend and
          backend technologies such as Next.js, NestJS, Docker, Redis, and
          Pub/Sub—enabling me to build scalable, high-performance, and
          maintainable systems. Additionally, I leverage cloud services like
          Firebase and AWS, implement CI/CD pipelines, and design serverless
          architectures to deliver secure and efficient cloud-native
          applications.
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
