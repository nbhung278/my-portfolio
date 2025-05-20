import React from "react";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "7/2024 - Now",
    company: "Freelance",
    role: "Fullstack Developer",
    description:
      "Worked as a freelancer on an Australian project, with experience collaborating with Australian clients, providing solutions and technologies related to the web.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    year: "3/2024 - Now",
    company: "Avada Group",
    role: "Fullstack Developer",
    description:
      "Contributed to the development of a messaging support software for customers on the Shopify platform, with Facebook integration. Integrating AI for the chat feature helps customers ask questions and search for products that meet their needs.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    year: "3/2023 - 3/2024",
    company: "EMSO Vietnam JSC",
    role: "Fullstack Developer",
    description:
      "EMSO is the owner of Easy Edu, the most widely used Education and Training Management Platform in Vietnam!",
    color: "from-purple-500 to-indigo-500",
  },
  {
    year: "3/2022 - 3/2023",
    company: "CSsoft JSC",
    role: "Fullstack Developer",
    description:
      "CSsoft is a company with many years of collaboration with clients from Japan, the US, and the EU. With a team of experts boasting over 10 years of experience, we are committed to helping our clients solve problems with high quality, low cost, and fast turnaround.",
    color: "from-green-500 to-blue-500",
  },
];

const Timeline = () => {
  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-300 to-indigo-400 text-white bg-clip-text text-transparent">
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
                <span className="text-xs md:text-sm text-gray-500 font-semibold mb-1">
                  {item.year}
                </span>
              </div>
              <div className="flex-1 bg-black/70 rounded-xl p-6 shadow border border-gray-800">
                <div className="font-semibold text-xl text-white mb-1">
                  {item.company}
                </div>
                <div className="text-sm text-indigo-300 mb-2">{item.role}</div>
                <div className="text-gray-300 text-sm">{item.description}</div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Timeline;
