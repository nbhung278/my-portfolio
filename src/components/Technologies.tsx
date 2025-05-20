import React, { useState } from "react";
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
  {
    icon: SiTypescript,
    color: "#3178c6",
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  {
    icon: SiReact,
    color: "#61dafb",
    name: "ReactJS",
    link: "https://react.dev/",
  },
  {
    icon: SiNextdotjs,
    color: "#ffffff",
    name: "NextJS",
    link: "https://nextjs.org/",
  },
  {
    icon: SiNestjs,
    color: "#ea2845",
    name: "NestJS",
    link: "https://nestjs.com/",
  },
  {
    icon: SiDocker,
    color: "#2496ed",
    name: "Docker",
    link: "https://www.docker.com/",
  },
  {
    icon: SiMui,
    color: "#007fff",
    name: "Material UI",
    link: "https://mui.com/",
  },
  {
    icon: SiTailwindcss,
    color: "#38bdf8",
    name: "TailwindCSS",
    link: "https://tailwindcss.com/",
  },
  {
    icon: SiGraphql,
    color: "#e535ab",
    name: "GraphQL",
    link: "https://graphql.org/",
  },
  {
    icon: SiRedux,
    color: "#ed1c24",
    name: "Redux",
    link: "https://redux.js.org/",
  },
  {
    icon: SiPrisma,
    color: "#0e415e",
    name: "Prisma",
    link: "https://www.prisma.io/",
  },
  {
    icon: SiPostgresql,
    color: "#336791",
    name: "PostgreSQL",
    link: "https://www.postgresql.org/",
  },
  {
    icon: SiMysql,
    color: "#00758f",
    name: "MySql",
    link: "https://www.mysql.com/",
  },
  {
    icon: SiMongodb,
    color: "#96bf48",
    name: "Mongodb",
    link: "https://www.mongodb.com/",
  },
  { icon: SiJest, color: "#c21325", name: "Jest", link: "https://jestjs.io/" },
  {
    icon: SiShopify,
    color: "#96bf48",
    name: "Shopify",
    link: "https://www.shopify.com/",
  },
];

const Technologies = () => {
  const [glowingTechs, setGlowingTechs] = useState<Set<string>>(new Set());

  const handleMouseEnter = (techName: string) => {
    setGlowingTechs((prev) => {
      const newSet = new Set(prev);
      newSet.add(techName);
      return newSet;
    });
  };

  const handleMouseLeave = (techName: string) => {
    setTimeout(() => {
      setGlowingTechs((prev) => {
        const newSet = new Set(prev);
        newSet.delete(techName);
        return newSet;
      });
    }, 1000);
  };

  return (
    <div>
      {" "}
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-300 to-indigo-400 text-white bg-clip-text text-transparent">
        Technologies
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 max-w-4xl mx-auto">
        {technologies.map((tech, i) => {
          const Icon = tech.icon;
          const isGlowing = glowingTechs.has(tech.name);
          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="flex items-center justify-center rounded-xl p-6 shadow bg-black/60 group relative"
              onMouseEnter={() => handleMouseEnter(tech.name)}
              onMouseLeave={() => handleMouseLeave(tech.name)}
              onClick={() => window.open(tech.link, "_blank")}
            >
              <span
                className={`absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-[2000ms] ease-out ${
                  isGlowing ? "opacity-100" : "opacity-0"
                }`}
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
