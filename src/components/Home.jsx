import { LogoGithub, LogoLinkedin } from "@gravity-ui/icons";
import { Code2, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section
      id="home"
      className="dark:bg-neutral-950 min-h-[80vh] flex flex-col items-start justify-center px-8 py-15 max-w-5xl mx-auto"
    >
      <h1 className="font-serif text-4xl md:text-5xl leading-tight text-gray-900 dark:text-gray-100">
        Hi, I'm Rupali Akter,
      </h1>
      
      <h1 className="font-serif text-4xl md:text-5xl leading-tight text-gray-900 dark:text-gray-100">
        Building modern websites with{" "}
        <span className="text-purple-600 dark:text-purple-400">Frontend</span> Development
      </h1>

      {/* Social links */}
      <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-gray-500 dark:text-gray-400">
        <Link
          href="https://github.com/rupa3670"
          target="_blank"
          className="flex items-center gap-1.5 hover:text-purple-600 dark:hover:text-purple-400 transition"
        >
          <LogoGithub size={16} /> Github
        </Link>
        <Link
          href="https://www.linkedin.com/in/rupali-akter-/"
          target="_blank"
          className="flex items-center gap-1.5 hover:text-purple-600 dark:hover:text-purple-400 transition"
        >
          <LogoLinkedin size={16} /> LinkedIn
        </Link>
        <Link
          href="https://leetcode.com/u/rupa30/"
          target="_blank"
          className="flex items-center gap-1.5 hover:text-purple-600 dark:hover:text-purple-400 transition"
        >
          <Code2 size={16} /> LeetCode
        </Link>
        <Link
          href="https://codeforces.com/profile/Rupa_20"
          target="_blank"
          className="flex items-center gap-1.5 hover:text-purple-600 dark:hover:text-purple-400 transition"
        >
          <ExternalLink size={16} /> Codeforces
        </Link>
      </div>

      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-6 max-w-2xl">
        I am skilled in Frontend Development using React, Next.js, and Tailwind CSS, alongside basic Backend knowledge. I enjoy solving problems and building clean, user-friendly websites.
      </p>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-8">
        <a
          href="mailto:youremail@example.com"
          className="px-5 py-2.5 rounded-md bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium hover:bg-purple-200 dark:hover:bg-purple-900/50 transition"
        >
          send hi
        </a>
        <a
          href="/resume.pdf"
          download
          className="px-5 py-2.5 rounded-md bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
        >
          download resume
        </a>
      </div>
    </section>
  );
}