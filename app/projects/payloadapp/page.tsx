"use client";

import Link from "next/link";

export default function PayloadAppProjectPage() {
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
            PayLoadApp
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
            A mobile invoice generator for freelancers and field technicians,
            built to replace paper workflows with fast, on-site billing.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
            <span>Personal Project</span>
            <span>Aug 2025 - Oct 2025</span>
            <span>Status: Completed</span>
          </div>
          <div className="mt-4">
            <a
              href="https://apps.apple.com/us/app/payloadapp-invoice-generator/id6754825079"
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
            <h2 className="text-2xl font-bold mb-3">Problem</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Field work often ends with paperwork and delayed billing. Manual
              invoicing slows down cash flow and adds friction for both the
              technician and the client.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-3">Solution</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              PayLoadApp enables on-site invoice creation using voice input or
              quick templates, then instantly shares the invoice document with
              clients. It also supports attaching proof photos when needed.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Who it is for</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Field technicians (plumbing, kitchen or bathroom fixes) who often carry paper invoices.</li>
            <li>Dog walkers who want to send professional invoices with proof photos.</li>
            <li>Private tutors who rely on cash or bank transfer and need simple billing records.</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            For renters, the invoice can be shared with a landlord for reimbursement after a repair visit.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Core flow</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Select a client or start a new invoice.</li>
            <li>Use voice input or templates to add line items.</li>
            <li>Generate the invoice and share it immediately.</li>
          </ol>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Highlights</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Voice-first data entry for hands-busy environments.</li>
            <li>Template-driven invoices to keep billing consistent.</li>
            <li>Fast document sharing with clients on the spot.</li>
            <li>Optional proof photos to strengthen documentation.</li>
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
              "PDF Generation"
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
