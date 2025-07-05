"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "../lib/data";

export default function Projects() {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="pt-12 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-mono font-bold mb-4">Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            A showcase of AI and data science projects that demonstrate real-world impact 
            and technical excellence across various domains, including industry presentations.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden bg-white flex items-center justify-center">
                <Image
                  src={`${basePath}${project.image}`}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="object-contain w-full h-full p-4"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Status Badge */}
                <div className="mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Production' 
                      ? 'bg-green-900 text-green-300' 
                      : project.status === 'Research'
                      ? 'bg-blue-900 text-blue-300'
                      : project.status === 'Presentation'
                      ? 'bg-purple-900 text-purple-300'
                      : 'bg-gray-700 text-gray-300'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Title and Company */}
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-blue-400 text-sm mb-3">{project.company} • {project.period}</p>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 flex-1">{project.description}</p>

                {/* Impact */}
                <div className="mb-4">
                  <p className="text-green-400 text-sm font-medium">Impact:</p>
                  <p className="text-gray-300 text-sm">{project.impact}</p>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="text-gray-400 text-xs mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learn More Button */}
                <Link
                  href={`/projects/${project.id}`}
                  className="mt-auto border border-white text-white px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors duration-200 text-center"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 