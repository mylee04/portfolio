"use client";

import Image from "next/image";

export default function Home() {
  // set basePath for deployment env
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
  
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <div className="flex flex-col md:flex-row w-full max-w-6xl mt-12 gap-8 px-4 flex-1">
        {/* left: introduction */}
        <div className="flex-1 flex flex-col justify-center">
        
          <h2 className="text-xl md:text-2xl mb-4">
            GenAI Engineer & Data Scientist @ Deloitte
          </h2>
          <div className="border-b border-white w-32 mb-6"></div>
          <p className="text-base md:text-lg leading-relaxed">
            Since December 2022, I have been working in the field of Generative AI and large language model (LLM) application development. My main interest lies in bringing GenAI into real-world, everyday applications. As an engineer and scientist, I am proactive and adaptable, always eager to embrace and implement new technologies.
          </p>
          <p className="italic mt-6 text-lg text-gray-400">
            Automate everything possible.
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap gap-6 mt-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-400">📊</span>
              <span>My Research Contributions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">🚀</span>
              <span>40% Efficiency Improvement</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400">💾</span>
              <span>46M+ Daily News Data Processing</span>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a href={`${basePath}/projects`} className="border border-white text-white px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors duration-200">
              View Projects →
            </a>
            <a href={`${basePath}/publications`} className="border border-gray-600 text-gray-300 px-6 py-2 text-sm hover:bg-gray-600 hover:text-white transition-colors duration-200">
              Publications
            </a>
            <a href={`${basePath}/presentations`} className="border border-gray-600 text-gray-300 px-6 py-2 text-sm hover:bg-gray-600 hover:text-white transition-colors duration-200">
              Presentations
            </a>
            <a href={`${basePath}/about`} className="border border-gray-600 text-gray-300 px-6 py-2 text-sm hover:bg-gray-600 hover:text-white transition-colors duration-200">
              About Me
            </a>
          </div>
        </div>
        {/* right: photos */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={`${basePath}/images/fam_photo.jpg`}
            alt="Family"
            width={500}
            height={600}
            className="object-cover rounded-lg shadow-lg max-h-[70vh] w-full"
          />
        </div>
      </div>
    </div>
  );
}