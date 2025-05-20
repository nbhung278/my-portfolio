import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nguyễn Bá Hưng (Nguyen Ba Hung) | Fullstack Developer Portfolio",
  description:
    "Nguyễn Bá Hưng - A passionate Fullstack Developer crafting modern web applications with React, Node.js, and cutting-edge technologies. Specializing in scalable solutions, clean code architecture, and exceptional user experiences. Let's build something amazing together!",
  keywords:
    "Nguyễn Bá Hưng, Nguyen Ba Hung, Fullstack Developer, Web Developer, React Developer, Node.js Developer, Full Stack Engineer, Portfolio, Lập Trình Viên Fullstack, Chuyên Gia Phát Triển Web",
  authors: [{ name: "Nguyễn Bá Hưng (Nguyen Ba Hung)" }],
  openGraph: {
    title: "Nguyễn Bá Hưng (Nguyen Ba Hung) | Fullstack Developer Portfolio",
    description:
      "Nguyễn Bá Hưng - A passionate Fullstack Developer crafting modern web applications with React, Node.js, and cutting-edge technologies. Specializing in scalable solutions, clean code architecture, and exceptional user experiences. Let's build something amazing together!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyễn Bá Hưng (Nguyen Ba Hung) | Fullstack Developer Portfolio",
    description:
      "Nguyễn Bá Hưng - A passionate Fullstack Developer crafting modern web applications with React, Node.js, and cutting-edge technologies. Specializing in scalable solutions, clean code architecture, and exceptional user experiences. Let's build something amazing together!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
