"use client";

import React, { useState } from "react";
import { Button, Input, TextArea, } from "@heroui/react";
import { LogoGithub, LogoLinkedin } from "@gravity-ui/icons";
import { Code2, Send, } from "lucide-react";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <section 
      id="contact" 
      className="py-20 px-6 max-w-5xl mx-auto bg-purple-50/30 dark:bg-zinc-950 text-zinc-900 dark:text-purple-100 transition-colors duration-300"
    >
      {/* Header Bar */}
      <div className="flex justify-between items-center mb-12 border-b border-purple-200/70 dark:border-purple-900/50 pb-4">
        <p className="text-xs tracking-widest text-purple-600/80 dark:text-purple-400/80 uppercase font-mono font-medium">
          LET'S CONNECT
        </p>
        <span className="text-xs tracking-widest text-purple-600 dark:text-purple-400 font-mono uppercase font-bold">
          CONTACT
        </span>
      </div>

      
      <div className="space-y-8">
       
        <p className="text-sm md:text-base text-zinc-600 dark:text-purple-200/80 leading-relaxed font-sans max-w-2xl">
          Contact me for any remote job or internship opportunities. I'd love to collaborate and contribute!
        </p>

       
        <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-600 dark:text-purple-300/80 font-mono">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <LogoLinkedin className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/rupa3670"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <LogoGithub className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>GitHub</span>
          </a>

          <a
            href="https://codeforces.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <Code2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>Codeforces</span>
          </a>
        </div>

       
        <form onSubmit={handleSubmit} className="space-y-5 pt-4">
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Your Name"
              variant="flat"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-purple-100/30 dark:bg-purple-950/20 text-zinc-900 dark:text-purple-100 border border-purple-200/60 dark:border-purple-900/40 rounded-lg focus-within:border-purple-500 transition-all"
            />

            <Input
              type="email"
              placeholder="Email"
              variant="flat"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-purple-100/30 dark:bg-purple-950/20 text-zinc-900 dark:text-purple-100 border border-purple-200/60 dark:border-purple-900/40 rounded-lg focus-within:border-purple-500 transition-all"
            />

            <TextArea
              placeholder="Your Message"
              variant="flat"
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-purple-100/30 dark:bg-purple-950/20 text-zinc-900 dark:text-purple-100 border border-purple-200/60 dark:border-purple-900/40 rounded-lg focus-within:border-purple-500 transition-all"
            />
          </div>

          
          <div className="flex justify-center pt-6">
            <Button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-10 py-3 rounded-lg shadow-md shadow-purple-500/20 transition-all duration-200 flex items-center gap-2 text-sm"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}