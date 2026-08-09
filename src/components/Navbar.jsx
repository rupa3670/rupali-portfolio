"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import { Menu, X } from "lucide-react";
import ThemeSwitch from "./ThemeSwitch";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Project", href: "#project" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-purple-50 dark:bg-neutral-900 shadow-sm shadow-gray-200 dark:shadow-none border-b border-gray-100 dark:border-neutral-800 sticky top-0 z-50">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-purple-800 flex items-center justify-center text-white font-bold shadow-md shadow-purple-200">
            R
          </div>
          <span className="font-bold text-lg text-gray-800 dark:text-gray-100">
            Rupali
          </span>
        </a>

        {/* Desktop Links */}
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

        {/* Right Side: Theme + Resume + Hamburger */}
        <div className="flex items-center gap-3">
          <ThemeSwitch />

          <a href="/resume.pdf" download className="hidden sm:block">
            <Button
              size="sm"
              className="bg-purple-600 text-white hover:bg-purple-700 transition-colors cursor-pointer"
            >
              Download Resume
            </Button>
          </a>

          {/* Hamburger button - mobile only */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-1 px-8 pb-4 bg-purple-50 dark:bg-neutral-900 border-t border-gray-100 dark:border-neutral-800">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="py-3 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium border-b border-gray-100 dark:border-neutral-800 last:border-b-0"
            >
              {link.name}
            </a>
          ))}

          <a href="/resume.pdf" download className="sm:hidden mt-2">
            <Button
              size="sm"
              className="w-full bg-purple-600 text-white hover:bg-purple-700 transition-colors cursor-pointer"
            >
              Download Resume
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
}