import React from "react";

import easyEdu from "@/assets/images/easyEdu.png";
import emsoSocial from "@/assets/images/emsoSocial.png";
import chatty from "@/assets/images/chatty.webp";
import insida from "@/assets/images/insida.webp";
import whale from "@/assets/images/save-sea-whales-banner-paper-cut-whale-silhouette-with-underwater-landscape-vector-eco-poster-undersea-environment-sealife-ecosystem-protection-poster-save-sea-whales-papercut-layers_8071-55568.avif";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const projects = [
  {
    name: "Insida app",
    description:
      "Insida is a web-based social networking app focused on real estate, primarily in Australia. It connects buyers and sellers directly, making property transactions faster and more transparent. Users can chat in real-time, negotiate prices, and access detailed property information — including exact location, number of rooms, land size, and more — all in one place",
    link: "https://viettrade.gov.vn/",
    url: insida,
    tags: ["NextJS", "TailwindCSS", "Shadcn"],
  },
  {
    name: "EMSO Social Network",
    description:
      "A social networking platform for Vietnamese users, featuring chat, livestream, e-commerce, investment, and more. Developed marketplace modules, integrated payment systems, and maintained frontend using ReactJS, Redux, Material UI, and Firebase.",
    link: "https://cmc-fe.emso.vn/",
    url: emsoSocial,
    tags: ["ReactJS", "Redux", "Material UI", "Firebase", "SocketIO"],
  },
  {
    name: "EasyEdu Management System",
    description:
      "A comprehensive management solution for foreign language centers, built with a microservice architecture. Responsible for developing new features, improving UI/UX, and fixing bugs. Tech stack includes ReactJS, Redux, Firebase, and Material UI.",
    url: easyEdu,
    link: "https://easyedu.vn/",
    tags: ["ReactJS", "Redux", "Firebase", "Material UI"],
  },
  {
    name: "Whale Social Network (Personal Project)",
    description:
      "A livestream and social network app inspired by modern social platforms. Fullstack development using NestJS, GraphQL, Prisma, Docker, NextJS, Zustand, and SocketIO. Includes real-time features and code management via Github.",
    link: "https://github.com/nbhung278/Whale-SN-Client",
    url: whale,
    tags: ["NestJS", "NextJS", "GraphQL", "Prisma", "SocketIO"],
  },
  {
    name: "Realtime Chat App",
    description:
      "A real-time chat application using Socket.io, Next.js, and Tailwind CSS.",
    link: "https://github.com/hungnbdev/realtime-chat-app",
    url: chatty,
    tags: ["Next.js", "Socket.io", "Tailwind"],
  },
];

const Projects = () => {
  return (
    <>
      <h2 className="section-title">Projects</h2>
      <div className="w-full overflow-hidden px-4 md:px-8">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
            1536: { slidesPerView: 4 },
            1920: { slidesPerView: 5 },
          }}
          loop={true}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          freeMode={true}
          speed={3500}
          allowTouchMove={true}
          pagination={false}
          className="project-swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.name}>
              <div className="bg-black/60 rounded-xl p-6 shadow border border-gray-800 flex flex-col gap-3 group hover:scale-[1.03] transition-transform h-[450px]">
                <div className="w-full h-48 rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
                  <Image
                    src={project.url}
                    alt={project.name}
                    width={320}
                    height={160}
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 block" />
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener"
                    className="font-semibold text-lg text-gray-100 group-hover:text-purple-300 transition-colors hover:underline"
                  >
                    {project.name}
                  </a>
                </div>
                <p className="text-gray-300 text-sm line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-gradient-to-r from-purple-700 to-indigo-700 text-xs text-white font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Projects;
