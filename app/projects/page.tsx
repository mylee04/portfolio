"use client";

import { useMemo, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../lib/data";

export default function Projects() {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
  const containerRef = useRef<HTMLDivElement>(null);
  const [positioned, setPositioned] = useState(false);

  const { deloitteProject, otherProjects } = useMemo(() => {
    const months: { [key: string]: number } = {
      "Jan": 1, "Feb": 2, "Mar": 3, "Apr": 4, "May": 5, "Jun": 6,
      "Jul": 7, "Aug": 8, "Sep": 9, "Oct": 10, "Nov": 11, "Dec": 12,
      "January": 1, "February": 2, "March": 3, "April": 4, "June": 6,
      "July": 7, "August": 8, "September": 9, "October": 10, "November": 11, "December": 12
    };

    const parsePeriod = (periodStr: string) => {
      if (periodStr.includes("Present")) {
        const year = periodStr.match(/\d{4}/)?.[0];
        const monthMatch = periodStr.match(/([A-Za-z]+)\s+\d{4}/);
        const month = monthMatch ? months[monthMatch[1]] || 12 : 12;
        return year ? parseInt(year) * 100 + month : 999999;
      }

      const yearMatch = periodStr.match(/\d{4}/g);
      const year = yearMatch ? parseInt(yearMatch[0]) : 0;

      let month = 1;
      for (const [name, num] of Object.entries(months)) {
        if (periodStr.includes(name)) {
          month = num;
          break;
        }
      }

      return year * 100 + month;
    };

    const deloitte = projects.find(
      (p) => p.id === "audit-risk-intelligence-platform" || p.company === "Deloitte"
    );

    const others = projects
      .filter((p) => p.id !== "audit-risk-intelligence-platform" && p.company !== "Deloitte")
      .sort((a, b) => parsePeriod(b.period) - parsePeriod(a.period));

    return { deloitteProject: deloitte, otherProjects: others };
  }, []);

  // Insert Deloitte at position 3 (index 2)
  const allProjects = useMemo(() => {
    const result = [...otherProjects];
    if (deloitteProject) {
      result.splice(2, 0, deloitteProject);
    }
    return result;
  }, [otherProjects, deloitteProject]);

  // Masonry layout calculation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      layoutMasonry();
    });

    const layoutMasonry = () => {
      const items = container.querySelectorAll<HTMLElement>('.masonry-item');
      if (items.length === 0) return;

      const containerWidth = container.offsetWidth;
      const gap = 32; // 8 * 4 = 32px (gap-8)

      // Determine number of columns based on container width
      let columns = 1;
      if (containerWidth >= 1024) columns = 3;
      else if (containerWidth >= 768) columns = 2;

      const columnWidth = (containerWidth - gap * (columns - 1)) / columns;
      const columnHeights = new Array(columns).fill(0);

      items.forEach((item) => {
        // Find shortest column
        const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));

        // Position item
        const x = shortestColumn * (columnWidth + gap);
        const y = columnHeights[shortestColumn];

        item.style.position = 'absolute';
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        item.style.width = `${columnWidth}px`;

        // Update column height
        columnHeights[shortestColumn] += item.offsetHeight + gap;
      });

      // Set container height
      container.style.height = `${Math.max(...columnHeights)}px`;
      setPositioned(true);
    };

    // Initial layout
    setTimeout(layoutMasonry, 100);

    // Observe container for resize
    resizeObserver.observe(container);

    // Observe each item for content changes
    const items = container.querySelectorAll('.masonry-item');
    items.forEach(item => resizeObserver.observe(item));

    return () => resizeObserver.disconnect();
  }, [allProjects]);

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
    const displayStack = project.techStack.slice(0, 6);
    const extraCount = project.techStack.length - displayStack.length;

    return (
      <div className="masonry-item bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
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
          <div className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {project.description.includes('•') ? (
              <>
                <p className="mb-2">{project.description.split('•')[0].trim()}</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  {project.description.split('•').slice(1).map((item, idx) => (
                    <li key={idx}>{item.trim()}</li>
                  ))}
                </ul>
              </>
            ) : (
              <p>{project.description}</p>
            )}
          </div>

          <div className="mb-4">
            <p className="text-green-600 dark:text-green-400 text-sm font-medium">Impact:</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{project.impact}</p>
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
    );
  };

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
          ref={containerRef}
          className={`relative ${!positioned ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        >
          {allProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
