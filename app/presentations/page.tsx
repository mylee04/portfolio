"use client";

import { presentations } from "../lib/data";

interface PresentationItem {
  id: number;
  title: string;
  presenters: string;
  venue: string;
  date: string;
  location: string;
  type: string;
  status: string;
  abstract: string;
  keywords: string[];
}

export default function Presentations() {
  const numPresentations = presentations.length;

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="pt-8 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold mb-4">Presentations</h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
            Sharing insights and research findings with academic and industry audiences.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-600 dark:text-gray-400">
            <span>🎤 <strong className="text-black dark:text-white">{numPresentations}</strong> Total Presentations</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="space-y-8">
          {presentations.map((pres: PresentationItem) => (
            <div
              key={pres.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      pres.type === 'Workshop Presentation' 
                        ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300'
                        : pres.type === 'Invited Talk'
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300'
                        : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300'
                    }`}>
                      {pres.type}
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 rounded-full text-xs font-medium">
                      {pres.status}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">{pres.title}</h3>
                </div>
              </div>

              <p className="text-blue-600 dark:text-blue-400 mb-3 text-base md:text-lg">{pres.presenters}</p>

              <div className="mb-4 text-gray-700 dark:text-gray-300">
                <p className="text-base md:text-lg font-medium">{pres.venue}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{pres.date}, {pres.location}</p>
              </div>

              <div className="mb-4">
                <h4 className="text-base font-semibold mb-2 text-gray-800 dark:text-gray-200">Abstract</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{pres.abstract}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-2 text-gray-500 dark:text-gray-400">Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {pres.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 