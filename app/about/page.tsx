"use client";

import Image from "next/image";
import { education, techStack, militaryService } from "../lib/data";

export default function About() {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center pt-12 pb-16 px-4">
        <div className="w-[320px] h-[315px] overflow-hidden rounded-full mx-auto mb-8 border-4 border-white">
          <Image
            src={`${basePath}/images/myphoto.jpg`}
            alt="Myungeun Lee Profile"
            width={320}
            height={315}
            className="object-cover"
            style={{ objectPosition: "bottom" }}
          />
        </div>
        
        <h1 className="text-5xl font-mono font-bold mb-6 text-center">
          About Me
        </h1>
        
        <div className="max-w-3xl text-center">
          <p className="text-xl text-gray-200 leading-relaxed mb-6">
            Born and raised in South Korea, I've had the privilege of studying and working across three continents. 
            My journey took me from Moscow for my Bachelor's degree to Washington D.C. for my Master's, 
            and now to the heart of the AI revolution at Deloitte.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            As a GenAI Engineer and Data Scientist, I'm passionate about bridging the gap between 
            cutting-edge AI research and real-world business applications. My mission is simple: 
            <span className="text-blue-400 font-semibold"> automate everything possible</span> and 
            make AI accessible to everyone.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl mb-2">🌍</div>
              <h3 className="text-lg font-semibold mb-1">Global Perspective</h3>
              <p className="text-gray-400 text-sm">Korea • Russia • USA</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎓</div>
              <h3 className="text-lg font-semibold mb-1">Academic Excellence</h3>
              <p className="text-gray-400 text-sm">MS in EE • Red Diploma</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="text-lg font-semibold mb-1">Innovation Focus</h3>
              <p className="text-gray-400 text-sm">GenAI • Multimodal AI • Automation • Image & Speech Processing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-mono font-bold mb-8 text-center">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
              <p className="text-blue-400 mb-2">{edu.school}</p>
              <p className="text-gray-400 text-sm mb-2">{edu.location}</p>
              <div className="flex justify-between items-center">
                <span className="text-green-400 font-semibold">GPA: {edu.gpa}</span>
                <span className="text-gray-400">{edu.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-mono font-bold mb-8 text-center">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.programming.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-blue-800 text-blue-200 text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-400">Platforms & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.platforms.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-green-800 text-green-200 text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Familiar Libraries</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.libraries.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-purple-800 text-purple-200 text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Military Service Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-mono font-bold mb-8 text-center">Military Service</h2>
        <div className="bg-gray-900 rounded-lg p-8 text-center">
          <div className="text-4xl mb-4">🎖️</div>
          <h3 className="text-xl font-semibold mb-2">{militaryService.unit}</h3>
          <p className="text-blue-400 mb-4">Rank: {militaryService.rank}</p>
          <p className="text-gray-300 max-w-2xl mx-auto">{militaryService.description}</p>
        </div>
      </div>

      {/* Personal Philosophy Section */}
      <div className="max-w-6xl mx-auto px-4 pb-24">
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-mono font-bold mb-6">My Philosophy</h2>
          <blockquote className="text-2xl italic mb-6 text-gray-200">
            "Automate everything possible"
          </blockquote>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I believe that the future belongs to those who can harness the power of AI to solve real-world problems. 
            My goal is not just to build intelligent systems, but to create solutions that make people's lives easier, 
            businesses more efficient, and society more equitable. Every line of code I write is a step towards 
            that automated future.
          </p>
        </div>
      </div>
    </div>
  );
} 