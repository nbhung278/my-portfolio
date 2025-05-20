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
	SiSanity,
	SiNestjs,
	SiExpress,
	SiServerless,
	SiApollographql,
	SiGraphql,
	SiShopify,
	SiSpring,
	SiMysql,
	SiPostgresql,
	SiRedux,
	SiAuth0,
	SiPrisma,
	SiDocker,
	SiJest,
} from "react-icons/si";

const projects = [
	{
		name: "Vite Portfolio Clone",
		description:
			"Portfolio inspired by Vite, Next.js, Tailwind, and Framer Motion.",
		link: "https://github.com/hungnbdev/vite-portfolio-clone",
		tags: ["Next.js", "Tailwind", "Framer Motion"],
	},
	{
		name: "Realtime Chat App",
		description:
			"Real-time chat application with socket.io, Next.js, and Tailwind.",
		link: "https://github.com/hungnbdev/realtime-chat-app",
		tags: ["Next.js", "Socket.io", "Tailwind"],
	},
	{
		name: "Landing Page Animations",
		description: "Landing page with beautiful dynamic effects.",
		link: "https://github.com/hungnbdev/landing-animations",
		tags: ["React", "Framer Motion", "UI"],
	},
];

const timeline = [
	{
		year: "2024 - Present",
		company: "Awesome Tech",
		role: "Frontend Engineer",
		description:
			"Developing UI/UX for SaaS products, optimizing performance and user experience.",
		color: "from-purple-500 to-indigo-500",
	},
	{
		year: "2022 - 2024",
		company: "Creative Studio",
		role: "Web Developer",
		description:
			"Designing and building websites for business clients using Next.js and Tailwind.",
		color: "from-pink-500 to-purple-500",
	},
	{
		year: "2020 - 2022",
		company: "Startup XYZ",
		role: "Frontend Intern",
		description:
			"Participated in startup project development, learning about React and Agile processes.",
		color: "from-indigo-500 to-blue-500",
	},
];

const technologies = [
	{ icon: SiTypescript, color: "#3178c6", name: "TypeScript" },
	{ icon: SiReact, color: "#61dafb", name: "React" },
	{ icon: SiNextdotjs, color: "#fff", name: "Next.js" },
	{ icon: SiMui, color: "#007fff", name: "MUI" },
	{ icon: SiTailwindcss, color: "#38bdf8", name: "Tailwind" },
	{ icon: SiSanity, color: "#f03e2f", name: "Sanity" },
	{ icon: SiNestjs, color: "#ea2845", name: "NestJS" },
	{ icon: SiExpress, color: "#fff", name: "Express" },
	{ icon: SiServerless, color: "#4f46e5", name: "Serverless" },
	{ icon: SiApollographql, color: "#311c87", name: "Apollo" },
	{ icon: SiGraphql, color: "#e535ab", name: "GraphQL" },
	{ icon: SiShopify, color: "#96bf48", name: "Shopify" },
	{ icon: SiSpring, color: "#f58220", name: "Spring" },
	{ icon: SiMysql, color: "#00758f", name: "MySQL" },
	{ icon: SiPostgresql, color: "#336791", name: "PostgreSQL" },
	{ icon: SiRedux, color: "#ed1c24", name: "Redux" },
	{ icon: SiAuth0, color: "#eb5424", name: "Auth0" },
	{ icon: SiPrisma, color: "#0c344b", name: "Prisma" },
	{ icon: SiDocker, color: "#2496ed", name: "Docker" },
	{ icon: SiJest, color: "#c21325", name: "Jest" },
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
						I&apos;m a Full Stack Developer with over 3 years of experience,
						including 1.5 years in Backend Development (Laravel) and 2+ years in
						Frontend Development (ReactJS). I possess strong expertise in
						Architecture Design, UX/UI, and Design Patterns. Throughout my
						career, I have actively contributed to numerous projects,
						continuously enhancing my skills and professional growth. I am
						passionate about learning and eager to collaborate with experienced
						mentors who can help me further develop my expertise. My goal is to
						become an exceptional full-stack web developer.
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
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.5, duration: 0.8 }}
					className="mt-8 flex justify-center"
				>
					<div className="bg-gradient-to-br from-purple-800/60 to-indigo-900/80 p-6 rounded-2xl shadow-xl flex flex-col items-center">
						<Image
							src="/next.svg"
							alt="Vite Logo"
							width={80}
							height={80}
							className="mb-2"
						/>
						<span className="text-xs text-gray-400">
							Powered by Next.js & Tailwind CSS
						</span>
					</div>
				</motion.div>
			</>
		),
	},
	{
		id: "projects",
		className:
			"py-20 flex flex-col items-center bg-gradient-to-b from-[#18122b] to-[#0a0a0a]",
		content: (
			<SectionInView>
				<h2 className="text-2xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">
					Projects
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
					{projects.map((project, i) => (
						<motion.a
							key={project.name}
							href={project.link}
							target="_blank"
							rel="noopener"
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1, duration: 0.6, type: "spring" }}
							className="bg-black/60 rounded-xl p-6 shadow border border-gray-800 hover:scale-105 transition-transform flex flex-col gap-3 group"
						>
							<div className="flex items-center gap-2 mb-2">
								<span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 block" />
								<span className="font-semibold text-lg text-gray-100 group-hover:text-purple-300 transition-colors">
									{project.name}
								</span>
							</div>
							<p className="text-gray-300 text-sm mb-2">
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
						</motion.a>
					))}
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
								className={`flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 ${
									i % 2 === 0 ? "md:flex-row-reverse" : ""
								}`}
							>
								<div
									className={`flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg text-white font-bold text-lg border-4 border-[#18122b]`}
								>
									{item.year}
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
