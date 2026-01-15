"use client";

import Link from "next/link";

export default function UnseenProjectPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="pt-10 pb-8 px-4">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/projects"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Projects
          </Link>
          <h1 className="text-4xl md:text-5xl font-mono font-bold mt-4 mb-4">
            Unseen
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
            An anonymous voice support app for people preparing for jobs, tough
            exams, or navigating burnout and depression. Users post the words
            they need to hear, and others respond with short voice messages.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
            <span>Personal Project</span>
            <span>Dec 2025 - Present</span>
            <span>Status: Active</span>
          </div>
          <div className="mt-4">
            <a
              href="https://apps.apple.com/us/app/unseen-voice/id6757136538"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-black dark:border-white text-black dark:text-white px-4 py-2 text-sm hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-200"
            >
              View on App Store →
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-3">Why it exists</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              When people are going through a tough moment, the hardest part is
              asking for support. Unseen removes identity pressure and makes it
              easy to request the exact words someone needs to hear.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-3">Who it is for</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              People studying for high-stakes exams, job seekers, and anyone
              trying to push through a slump or depression. The goal is a
              supportive space without social pressure.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Core flow</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Post an anonymous request with a short prompt.</li>
            <li>Receive voice replies from the community.</li>
            <li>Listen, save, and revisit the messages when needed.</li>
          </ol>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Culture by design</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Fully anonymous with no follow or networking features.</li>
            <li>Voice responses deliver tone, empathy, and warmth.</li>
            <li>Prompt-driven requests guide thoughtful replies.</li>
            <li>Built for people exhausted by influencer-style social media.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Technical focus</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "React Native",
              "Expo",
              "TypeScript",
              "Supabase",
              "Supabase Auth",
              "Whisper API (STT)",
              "PostHog",
              "Voice Recording"
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
