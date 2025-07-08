"use client";

import { presentations } from "../lib/data";

interface PresentationItem {
  id: number;
  title: string;
  presenters: string;
  venue: string;
  date: string;
  type?: string;
  status?: string;
  abstract?: string;
  keywords?: string[];
}

export default function Presentations() {
  const numPresentations = presentations.length;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="pt-12 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-mono font-bold mb-4">Presentations</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Conference presentations and invited talks on AI, healthcare, and technology innovation.
          </p>
          <div className="mt-6 flex gap-8 text-sm text-gray-400">
            <span>🎤 <strong className="text-white">{numPresentations}</strong> Total Presentations</span>
          </div>
        </div>
      </div>

      {/* Presentations List */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <h2 className="text-4xl font-mono font-bold mb-8">Presentations</h2>
        <div className="space-y-8">
          {presentations.map((presentation: PresentationItem) => (
            <div
              key={presentation.id}
              className="bg-gray-900 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Presentation Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-orange-900 text-orange-300 rounded-full text-xs font-medium">
                      {presentation.type}
                    </span>
                    <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-xs font-medium">
                      {presentation.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 leading-tight">{presentation.title}</h3>
                </div>
              </div>

              {/* Presenters */}
              <p className="text-blue-400 mb-3 text-lg">{presentation.presenters}</p>

              {/* Presentation Details */}
              <div className="mb-4 text-gray-300">
                <p className="text-lg font-medium">{presentation.venue}</p>
                <p className="text-sm text-gray-400 mt-1">{presentation.date}</p>
              </div>

              {/* Abstract */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2 text-gray-200">Abstract</h4>
                <p className="text-gray-300 leading-relaxed">{presentation.abstract}</p>
              </div>

              {/* Keywords */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-2 text-gray-400">Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {presentation.keywords?.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
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