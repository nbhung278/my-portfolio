import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center"
    >
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={60}
        height={60}
        className="mb-4"
      />
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">
        Let&apos;s Create Something Amazing Together
      </h2>
      <p className="text-gray-400 mb-6 text-center max-w-md">
        Ready to transform your ideas into reality? I&apos;m here to help you
        build innovative web solutions that make a difference.
      </p>
      <a
        href="mailto:nbhung278@gmail.com"
        className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow hover:scale-105 transition-transform"
      >
        Get in Touch
      </a>
    </motion.div>
  );
};

export default Contact;
