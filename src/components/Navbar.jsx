"use client";

import { Button } from "@heroui/react";
import ThemeSwitch from "./ThemeSwitch";

const navLinks = [
  { name: "home", href: "#home" },
  { name: "project", href: "#project" },
  { name: "about", href: "#about" },
  { name: "contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-purple-50 dark:bg-neutral-900 shadow-sm shadow-gray-200 dark:shadow-none border-b border-gray-100 dark:border-neutral-800">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-purple-800 flex items-center justify-center text-white font-bold shadow-md shadow-purple-200">
          R
        </div>
        <span className="font-bold text-lg text-gray-800 dark:text-gray-100">
          Rupali
        </span>
      </div>

      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <ThemeSwitch />
        <Button
          size="sm"
          className="bg-purple-600 text-white hover:bg-purple-700 transition-colors"
        >
          download resume
        </Button>
      </div>
    </nav>
  );
}