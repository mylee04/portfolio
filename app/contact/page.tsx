"use client";

import { useRef } from "react";
import { personalInfo } from "../lib/data";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement)
      .value;
    const lastName = (form.elements.namedItem("lastName") as HTMLInputElement)
      .value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const subject = encodeURIComponent(`Contact from ${firstName} ${lastName}`);
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${personalInfo.workEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center">
      <div className="flex w-full max-w-6xl flex-col md:flex-row items-stretch gap-8 px-4 py-12">
        {/* Left side */}
        <div className="flex-1 flex flex-col justify-between p-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-mono font-bold mb-8">
              Let's Connect!
            </h1>
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <p>{personalInfo.workEmail}</p>
              <p>{personalInfo.workPhone} (work)</p>
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062 1.366.334 2.633 1.308-3.608.974-.974 2.241 1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.809 2.256 6.089 2.243 6.498 2.243 12c0 5.502.013 5.911.072 7.191.059 1.277.353 2.45 1.32 3.417.967.967 2.14 1.261 3.417 1.32 1.28.059 1.689.072 7.191.072s5.911-.013 7.191-.072c1.277-.059 2.45-.353 3.417-1.32.967-.967 1.261-2.14 1.32-3.417.059-1.28.072-1.689.072-7.191s-.013-5.911-.072-7.191c-.059-1.277-.353-2.45-1.32-3.417C19.45.425 18.277.131 17 .072 15.72.013 15.311 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Right side: Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-4 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg"
        >
          <label className="text-sm mb-1">Name <span className="text-xs text-gray-500 dark:text-gray-400">(required)</span></label>
          <div className="flex gap-2">
            <input
              name="firstName"
              required
              placeholder="First Name"
              className="flex-1 p-2 text-black dark:text-white placeholder-gray-400 bg-white dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-700"
            />
            <input
              name="lastName"
              required
              placeholder="Last Name"
              className="flex-1 p-2 text-black dark:text-white placeholder-gray-400 bg-white dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-700"
            />
          </div>
          <label className="text-sm mb-1">Email <span className="text-xs text-gray-500 dark:text-gray-400">(required)</span></label>
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="p-2 text-black dark:text-white placeholder-gray-400 bg-white dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-700"
          />
          <label className="text-sm mb-1">Message <span className="text-xs text-gray-500 dark:text-gray-400">(required)</span></label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Message"
            className="p-2 text-black dark:text-white placeholder-gray-400 bg-white dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-700"
          />
          <button
            type="submit"
            className="mt-4 border border-black dark:border-white py-2 text-lg font-mono hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
} 