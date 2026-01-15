"use client";

import Image from "next/image";
import Link from "next/link";
import { personalInfo } from "./lib/data";

export default function Home() {
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center">
      <div className="flex w-full max-w-6xl flex-col md:flex-row items-center gap-8 px-4 py-12">
        {/* Left: Introduction */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl mb-4 text-gray-700 dark:text-gray-300">
            GenAI Engineer & Data Scientist @ {personalInfo.company}
          </h2>
          <div className="border-b border-gray-300 dark:border-gray-700 w-32 mb-6"></div>
          <p className="text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            Since December 2022, I have been working in the field of Generative
            AI and large language model (LLM) application development. My main
            interest lies in bringing GenAI into real-world, everyday
            applications. As an engineer and scientist, I am proactive and
            adaptable, always eager to embrace and implement new technologies.
          </p>
          <p className="italic mt-6 text-lg text-gray-500 dark:text-gray-400">
            Automate everything possible.
          </p>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/projects"
              className="border border-black dark:border-white px-6 py-2 text-sm hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-200"
            >
              View Projects →
            </Link>
            <Link
              href="/publications"
              className="border border-gray-400 dark:border-gray-600 text-gray-600 dark:text-gray-300 px-6 py-2 text-sm hover:bg-gray-600 hover:text-white transition-colors duration-200"
            >
              Publications
            </Link>
            <Link
              href="/presentations"
              className="border border-gray-400 dark:border-gray-600 text-gray-600 dark:text-gray-300 px-6 py-2 text-sm hover:bg-gray-600 hover:text-white transition-colors duration-200"
            >
              Presentations
            </Link>
          </div>
        </div>
        {/* Right: Photos */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={`${basePath}/images/profile/nyc_family_photo.jpg`}
            alt="Family"
            width={500}
            height={600}
            className="object-cover rounded-lg shadow-lg max-h-[70vh] w-full"
            priority
          />
        </div>
      </div>
    </main>
  );
}
