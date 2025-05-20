import React from "react";
import {
  SiPostgresql,
  SiPrisma,
  SiMysql,
  SiMongodb,
  SiRedux,
  SiGraphql,
  SiTailwindcss,
  SiMui,
  SiDocker,
  SiNestjs,
  SiNextdotjs,
  SiReact,
  SiJest,
  SiShopify,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";

const technologies = [
  { icon: SiTypescript, color: "#3178c6", name: "TypeScript" },
  { icon: SiReact, color: "#61dafb", name: "ReactJS" },
  { icon: SiNextdotjs, color: "#ffffff", name: "NextJS" },
  { icon: SiNestjs, color: "#ea2845", name: "NestJS" },
  { icon: SiDocker, color: "#2496ed", name: "Docker" },
  { icon: SiMui, color: "#007fff", name: "Material UI" },
  { icon: SiTailwindcss, color: "#38bdf8", name: "TailwindCSS" },
  { icon: SiGraphql, color: "#e535ab", name: "GraphQL" },
  { icon: SiRedux, color: "#ed1c24", name: "Redux" },
  { icon: SiPrisma, color: "#0c344b", name: "Prisma" },
  { icon: SiPostgresql, color: "#336791", name: "PostgreSQL" },
  { icon: SiMysql, color: "#00758f", name: "MySql" },
  { icon: SiMongodb, color: "#96bf48", name: "Mongodb" },
  { icon: SiJest, color: "#c21325", name: "Jest" },
  { icon: SiShopify, color: "#96bf48", name: "Shopify" },
  // Add more as needed
];

const Technologies = () => {
  return (
    <div>
      {" "}
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">
        Technologies
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 max-w-4xl mx-auto">
        {technologies.map((tech, i) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="flex items-center justify-center rounded-xl p-6 shadow bg-black/60 group relative"
              style={{}}
            >
              <span
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none glow-effect"
                style={{
                  boxShadow: `0 0 24px 8px ${tech.color}55, 0 0 0 2px ${tech.color}55`,
                  background: `radial-gradient(circle at 60% 40%, ${tech.color}22 0%, transparent 80%)`,
                  zIndex: 1,
                }}
              />
              <Icon
                size={40}
                color={tech.color}
                className="relative z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
