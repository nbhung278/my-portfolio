import type { Metadata } from "next";
import { Outfit, Fira_Code } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
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
      <body className={`${outfit.variable} ${firaCode.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
