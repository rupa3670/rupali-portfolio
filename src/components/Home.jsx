import Image from "next/image";
import { LogoGithub, LogoLinkedin } from "@gravity-ui/icons";
import { Code2, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section
      id="home"
      className="dark:bg-neutral-950 min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-8 py-16 max-w-5xl mx-auto"
    >
      {/* Left: Text content */}
      <div className="flex-1 flex flex-col items-start justify-center">
        {/* <span className="text-purple-600 dark:text-purple-400 font-semibold tracking-wide uppercase text-sm mb-3">
          Frontend Developer
        </span> */}

        <h1 className="font-serif text-4xl md:text-5xl leading-tight text-gray-900 dark:text-gray-100">
          Hi, I'm Rupali Akter
        </h1>

        <h1 className="font-serif text-4xl md:text-5xl leading-tight text-gray-900 dark:text-gray-100 mt-1">
          Junior <span className="text-purple-600 dark:text-purple-400">Frontend</span> Developer
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

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-6 max-w-xl">
          I am skilled in Frontend Development using React, Next.js, and Tailwind CSS, alongside basic Backend knowledge. I enjoy solving problems and building clean, user-friendly websites.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8">
        <a  
            href="mailto:srrupaliakter@gmail.com"
            className="px-5 py-2.5 rounded-md bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium hover:bg-purple-200 dark:hover:bg-purple-900/50 transition"
          >
            Send Hi
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-5 py-2.5 rounded-md bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right: Photo */}
       <div className="flex-1 flex justify-center">
        <div className="relative w-64 h-72 md:w-80 md:h-96 rounded-2xl overflow-hidden">
          <Image
            src="/assest/rupali.png"
            alt="Rupali Akter - Frontend Developer"
            fill
            sizes="(max-width: 768px) 256px, 320px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}