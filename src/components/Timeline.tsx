import React from "react";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "6/2023 - Now",
    company: "EMSO Vietnam JSC",
    role: "Frontend Developer",
    description:
      "EMSO SOCIAL NETWORK: Social networking site for Vietnamese people (chat, livestream, e-commerce, investment, etc.). Tech: ReactJS, Redux, Redux Saga, Material UI, Firebase, Typescript, SocketIO. Role: Maintain marketplace module, integrate payments.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    year: "3/2023 - Now",
    company: "EASYEDU",
    role: "Frontend Developer",
    description:
      "Management solutions for foreign language centers (microservice architecture). Tech: Drupal (backend), ReactJS (frontend), Firebase, Github, Axios, Redux, Material UI. Role: Develop new features, UI/UX, fix bugs.",
    color: "from-pink-500 to-purple-500",
  },
  {
    year: "12/2023 - Now",
    company: "Personal Project: Whale Social Network",
    role: "Fullstack Developer",
    description:
      "Livestream and social network app (NestJS, GraphQL, Prisma, Docker, NextJS, Typescript, Zustand, Shadcn, SocketIO). Role: Fullstack, repo: github.com/nbhung278/Whale-SN-Client & Whale-SN-Server.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    year: "11/2022 - 3/2023",
    company: "CSSOFT JSC",
    role: "Backend/Frontend Developer",
    description:
      "VIETTRADE HOMEPAGE: Software for Trade Promotion Department. ITRACE 247: Product information retrieval software. MOLISA: Feedback and recommendations software for Ministry of Labor. Tech: Bootstrap, Ajax, jQuery, Laravel 8.x. Role: Develop features, fix bugs, test projects.",
    color: "from-green-500 to-blue-500",
  },
];

const Timeline = () => {
  return (
    <div>
      {" "}
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">
        Timeline
      </h2>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500 opacity-40 -translate-x-1/2" />
        <ul className="space-y-12 relative z-10">
          {timeline.map((item, i) => (
            <motion.li
              key={item.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, type: "spring" }}
              className={`flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-8 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex flex-col items-center md:items-start">
                <span className="text-xs md:text-sm text-gray-400 font-semibold mb-1">
                  {item.year}
                </span>
              </div>
              <div className="flex-1 bg-black/70 rounded-xl p-6 shadow border border-gray-800">
                <div className="font-semibold text-xl text-purple-300 mb-1">
                  {item.company}
                </div>
                <div className="text-sm text-indigo-300 mb-2">{item.role}</div>
                <div className="text-gray-300 text-sm">{item.description}</div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
