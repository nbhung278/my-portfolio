"use client";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import {
	SiTypescript,
	SiReact,
	SiNextdotjs,
	SiMui,
	SiTailwindcss,
	SiNestjs,
	SiGraphql,
	SiShopify,
	SiSpring,
	SiMysql,
	SiPostgresql,
	SiRedux,
	SiPrisma,
	SiDocker,
	SiJest,
} from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import easyEdu from "@/assets/images/easyEdu.png";
import emsoSocial from "@/assets/images/emsoSocial.png";
import chatty from "@/assets/images/chatty.webp";
import insida from "@/assets/images/insida.webp";
// import landing from "@/assets/images/landing.avif";
import whale from "@/assets/images/save-sea-whales-banner-paper-cut-whale-silhouette-with-underwater-landscape-vector-eco-poster-undersea-environment-sealife-ecosystem-protection-poster-save-sea-whales-papercut-layers_8071-55568.avif";

const projects = [
	{
		name: "Insida app",
		description:
			"Official website for the Trade Promotion Department of the Ministry of Industry and Trade. Developed and maintained features using Bootstrap, Ajax, jQuery, and Laravel.",
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
	// {
	// 	name: "Landing Page Animations",
	// 	description:
	// 		"A landing page featuring beautiful and modern animation effects.",
	// 	link: "https://github.com/hungnbdev/landing-animations",
	// 	url: landing,
	// 	tags: ["React", "Framer Motion", "UI"],
	// },
];

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

const technologies = [
	{ icon: SiTypescript, color: "#3178c6", name: "TypeScript" },
	{ icon: SiReact, color: "#61dafb", name: "ReactJS" },
	{ icon: SiNextdotjs, color: "#fff", name: "NextJS" },
	{ icon: SiNestjs, color: "#ea2845", name: "NestJS" },
	{ icon: SiMui, color: "#007fff", name: "Material UI" },
	{ icon: SiTailwindcss, color: "#38bdf8", name: "TailwindCSS" },
	{ icon: SiGraphql, color: "#e535ab", name: "GraphQL" },
	{ icon: SiRedux, color: "#ed1c24", name: "Redux" },
	{ icon: SiSpring, color: "#f58220", name: "RESTful API" },
	{ icon: SiPostgresql, color: "#336791", name: "PostgreSQL" },
	{ icon: SiPrisma, color: "#0c344b", name: "Prisma" },
	{ icon: SiDocker, color: "#2496ed", name: "Docker" },
	{ icon: SiMysql, color: "#00758f", name: "MongoDB" },
	{ icon: SiJest, color: "#c21325", name: "Firebase Firestore" },
	{ icon: SiShopify, color: "#96bf48", name: "Shopify" },
	// Add more as needed
];

const sections = [
	{
		id: "hero",
		className:
			"min-h-[80vh] flex flex-col items-center justify-center text-center relative z-10",
		content: (
			<>
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
						I&apos;m a web developer with more than 3 years of experience (1.5
						years Backend - Laravel, 2+ years Frontend - ReactJS). Good
						knowledge of Architecture Design, UX/UI, and Design Patterns.
						Participated in many projects, continuously improving my skills.
						Looking forward to meeting enthusiastic mentors. My goal is to
						become a full-stack website developer.
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
			</>
		),
	},
	{
		id: "projects",
		className:
			"py-20 flex flex-col items-center bg-gradient-to-b from-[#18122b] to-[#0a0a0a] w-full",
		content: (
			<SectionInView>
				<h2 className="text-2xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">
					Projects
				</h2>
				<div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] px-2 sm:px-8">
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
						speed={4000}
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
			</SectionInView>
		),
	},
	{
		id: "timeline",
		className: "py-20 flex flex-col items-center bg-black/90",
		content: (
			<SectionInView>
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
									<div className="text-sm text-indigo-300 mb-2">
										{item.role}
									</div>
									<div className="text-gray-300 text-sm">
										{item.description}
									</div>
								</div>
							</motion.li>
						))}
					</ul>
				</div>
			</SectionInView>
		),
	},
	{
		id: "technologies",
		className: "py-20 flex flex-col items-center bg-black/80",
		content: (
			<SectionInView>
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
			</SectionInView>
		),
	},
	{
		id: "education",
		className: "py-20 flex flex-col items-center bg-black/80",
		content: (
			<SectionInView>
				<h2 className="text-2xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">
					Education
				</h2>
				<div className="max-w-2xl mx-auto bg-black/70 rounded-xl p-6 shadow border border-gray-800">
					<div className="font-semibold text-xl text-purple-300 mb-1">
						ELECTRIC POWER UNIVERSITY
					</div>
					<div className="text-sm text-indigo-300 mb-2">08/2018 - 03/2023</div>
					<div className="text-gray-300 text-sm mb-2">
						Information Technology, majoring in E-commerce.
					</div>
					<ul className="list-disc pl-5 text-gray-300 text-sm">
						<li>
							Achieved good results in specialized IT subjects (database, web
							programming).
						</li>
						<li>B2 foreign language certificate.</li>
					</ul>
				</div>
			</SectionInView>
		),
	},
	{
		id: "community",
		className:
			"py-20 flex flex-col items-center bg-gradient-to-b from-black/80 to-gray-900/90",
		content: (
			<SectionInView>
				<h2 className="text-2xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">
					Loved by the community
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
					{[1, 2, 3].map((i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1, duration: 0.5 }}
							className="bg-black/60 rounded-xl p-6 shadow border border-gray-800"
						>
							<p className="text-gray-300 mb-4">
								&quot;Hung is a very enthusiastic developer, his products are
								always polished and creative.&quot;
							</p>
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-700 to-indigo-700" />
								<div>
									<div className="font-semibold text-gray-200">
										Dev Reviewer {i}
									</div>
									<div className="text-xs text-gray-400">@reviewer{i}</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</SectionInView>
		),
	},
	{
		id: "cta",
		className: "py-20 flex flex-col items-center justify-center bg-black/90",
		content: (
			<SectionInView>
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="flex flex-col items-center"
				>
					<Image
						src="/next.svg"
						alt="Vite Logo"
						width={60}
						height={60}
						className="mb-4"
					/>
					<h2 className="text-2xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">
						Start building with Hung Nguyen
					</h2>
					<p className="text-gray-400 mb-6 text-center max-w-md">
						Contact me to build amazing web products together!
					</p>
					<a
						href="mailto:hungnbdev@gmail.com"
						className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow hover:scale-105 transition-transform"
					>
						Contact Now
					</a>
				</motion.div>
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
