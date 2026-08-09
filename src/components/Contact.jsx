"use client";

import React, { useState } from "react";
import { Button, Input, TextArea } from "@heroui/react";
import { LogoGithub, LogoLinkedin } from "@gravity-ui/icons";
import { Code2, Send, Mail, Phone, CheckCircle2 } from "lucide-react";

// TODO: replace with your own Formspree endpoint from https://formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xxxxxxxx";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-5xl mx-auto bg-purple-50/30 dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300"
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
        <p className="text-sm md:text-base text-zinc-600 dark:text-white leading-relaxed font-sans max-w-2xl">
          Contact me for any remote job or internship opportunities. I'd love to collaborate and contribute!
        </p>

        {/* Direct Contact Info */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-700 dark:text-white font-sans">
          <a
            href="mailto:srrupaliakter@gmail.com"
            className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <Mail className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>srrupaliakter@gmail.com</span>
          </a>
          <a
            href="tel:+8801775929329"
            className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <Phone className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>+880 1775929329</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-600 dark:text-purple-300/80 font-mono">
          <a
            href="https://www.linkedin.com/in/rupali-akter-/"
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
            href="https://codeforces.com/profile/Rupa_20"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <Code2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>Codeforces</span>
          </a>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 pt-4">
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Your Name"
              variant="flat"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-purple-100/30 dark:bg-purple-950/20 text-zinc-900 dark:text-gray-50 border border-purple-200/60 dark:border-purple-900/40 rounded-lg focus-within:border-purple-500 transition-all"
            />

            <Input
              type="email"
              placeholder="Email"
              variant="flat"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-purple-100/30 dark:bg-purple-950/20 text-zinc-900 dark:text-gray-50 border border-purple-200/60 dark:border-purple-900/40 rounded-lg focus-within:border-purple-500 transition-all"
            />

            <TextArea
              placeholder="Your Message"
              variant="flat"
              rows={6}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-purple-100/30 dark:bg-purple-950/20 text-zinc-900 dark:text-gray-50 border border-purple-200/60 dark:border-purple-900/40 rounded-lg focus-within:border-purple-500 transition-all"
            />
          </div>

          <div className="flex flex-col items-center gap-3 pt-6">
            <Button
              type="submit"
              disabled={status === "sending"}
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-10 py-3 rounded-lg shadow-md shadow-purple-500/20 transition-all duration-200 flex items-center gap-2 text-sm disabled:opacity-60"
            >
              <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
              <Send className="w-4 h-4" />
            </Button>

            {status === "sent" && (
              <p className="flex items-center gap-1.5 text-sm text-green-600 dark:text-green-400">
                <CheckCircle2 className="w-4 h-4" />
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-500">
                Something went wrong. Please try emailing me directly.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}