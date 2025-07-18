"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "../lib/data";

export default function Projects() {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="pt-8 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold mb-4">Projects</h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
            A showcase of AI and data science projects that demonstrate real-world impact 
            and technical excellence across various domains.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden bg-white flex items-center justify-center border-b border-gray-200 dark:border-gray-800">
                <Image
                  src={`${basePath}${project.image}`}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="object-contain w-full h-full p-4"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Production' 
                      ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300' 
                      : project.status === 'Research'
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300'
                      : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm mb-3">{project.company} • {project.period}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1">{project.description}</p>
                
                <div className="mb-4">
                  <p className="text-green-600 dark:text-green-400 text-sm font-medium">Impact:</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{project.impact}</p>
                </div>

                <div className="mb-4">
                  <p className="text-gray-500 text-xs mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {(project.company.includes('GWU') || project.company.includes('Bauman')) && (
                  <Link
                    href={`/projects/${project.id}`}
                    className="mt-auto border border-black dark:border-white text-black dark:text-white px-4 py-2 text-sm hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-200 text-center"
                  >
                    Learn More →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 