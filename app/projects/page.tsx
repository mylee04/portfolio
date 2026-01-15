"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../lib/data";

export default function Projects() {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
  const orderedProjects = useMemo(() => {
    const parsePeriod = (periodStr: string) => {
      const years = periodStr.match(/\d{4}/g);
      if (!years || years.length === 0) {
        return 0;
      }
      return parseInt(years[years.length - 1], 10);
    };

    const sorted = [...projects].sort((a, b) => {
      return parsePeriod(b.period) - parsePeriod(a.period);
    });

    const deloitteIndex = sorted.findIndex(
      (project) => project.id === "audit-risk-intelligence-platform" || project.company === "Deloitte"
    );

    if (deloitteIndex === -1) {
      return sorted;
    }

    const [deloitte] = sorted.splice(deloitteIndex, 1);
    const insertIndex = Math.min(2, sorted.length);
    sorted.splice(insertIndex, 0, deloitte);

    return sorted;
  }, []);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [spans, setSpans] = useState<number[]>([]);

  const calculateSpans = () => {
    if (!gridRef.current) return;
    const gridStyles = window.getComputedStyle(gridRef.current);
    const rowHeight = parseFloat(gridStyles.getPropertyValue("grid-auto-rows"));
    const rowGap = parseFloat(gridStyles.getPropertyValue("gap"));

    const nextSpans = orderedProjects.map((_, index) => {
      const card = cardRefs.current[index];
      if (!card || !rowHeight) {
        return 1;
      }
      const height = card.getBoundingClientRect().height;
      return Math.ceil((height + rowGap) / (rowHeight + rowGap));
    });

    setSpans(nextSpans);
  };

  useEffect(() => {
    calculateSpans();
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(() => calculateSpans());
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    return () => observer.disconnect();
  }, [orderedProjects.length]);

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
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[8px]"
        >
          {orderedProjects.map((project, index) => {
            const displayStack = project.techStack.slice(0, 6);
            const extraCount = project.techStack.length - displayStack.length;

            return (
            <div
              key={project.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              style={spans.length > 0 ? { gridRowEnd: `span ${spans[index] || 1}` } : undefined}
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
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="mb-4">
                  <p className="text-green-600 dark:text-green-400 text-sm font-medium">Impact:</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">{project.impact}</p>
                </div>

                <div className="mb-4">
                  <p className="text-gray-500 text-xs mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-1">
                    {displayStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {extraCount > 0 && (
                      <span className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded">
                        +{extraCount}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                  {(project as any).github && (
                    <a
                      href={(project as any).github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-black dark:border-white text-black dark:text-white px-4 py-2 text-sm hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-200 text-center"
                    >
                      View on GitHub →
                    </a>
                  )}
                  {(project as any).appStore && (
                    <a
                      href={(project as any).appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-black dark:border-white text-black dark:text-white px-4 py-2 text-sm hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-200 text-center"
                    >
                      App Store →
                    </a>
                  )}
                  {(project as any).detailsPath && (
                    <Link
                      href={(project as any).detailsPath}
                      className="flex-1 border border-black dark:border-white text-black dark:text-white px-4 py-2 text-sm hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-200 text-center"
                    >
                      Learn More →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )})}
        </div>
      </div>
    </div>
  );
} 
