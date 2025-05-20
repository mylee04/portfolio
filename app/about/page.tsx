"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const experiences = [
  {
    title: "Deloitte",
    image: "/images/capitol.jpg",
    description: "As a Data Scientist at Deloitte in Washington DC, I focus on developing AI solutions.",
  },
  {
    title: "Atos Zdata",
    image: "/images/capitol.jpg",
    description: "ddd",
  },
  {
    title: "Graduate Research Assistant",
    image: "/images/capitol.jpg",
    description: "As a graudate research assistant, I've done project A,B,C and participated to publish paper A,B,C",
  },
  {
    title: "Research Assistant",
    image: "/images/capitol.jpg",
    description: "As a graudate research assistant, I've done project A,B,C and participated to publish paper A,B,C",
  },
];

export default function About() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse events for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Add and remove event listeners
  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      {/* profile photo + intro */}
      <div className="flex flex-col items-center mt-12 mb-16">
        <div className="w-[320px] h-[315px] overflow-hidden rounded-full mx-auto mb-6 border-4 border-white">
          <Image
            src="/images/myphoto.jpg"
            alt="Profile"
            width={320}
            height={160}
            className="object-cover"
            style={{ objectPosition: "bottom" }}
          />
        </div>
        <p className="text-center text-lg max-w-xl text-gray-200">
          Born and raised in S. Korea,<br /> 
          Barchelor in Moscow, Russia, Master in Washington D.C. US<br />
          I'm an Applied AI Data Scientist / GenAI Engineer at Deloitte.<br />
        </p>
      </div>

      {/* "the path that brought me here" title */}
      <h1 className="text-5xl font-mono font-bold mb-12 text-center">
        the path that brought me here
      </h1>

      {/* Smooth draggable slider */}
      <div 
        className="w-full max-w-6xl mb-24 px-4 overflow-hidden"
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div 
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{ 
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="min-w-[300px] md:min-w-[400px] flex-shrink-0 snap-center bg-black rounded-lg overflow-hidden shadow-lg flex flex-col"
            >
              <div className="h-64 overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  width={600}
                  height={350}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-3xl font-mono font-bold mb-4">{exp.title}</h2>
                <p className="text-base text-gray-200 flex-1">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 