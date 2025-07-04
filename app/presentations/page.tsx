"use client";

import { presentations } from "../lib/data";

interface PresentationItem {
  id: number;
  title: string;
  presenters: string;
  conference: string;
  date: string;
  location?: string;
  type?: string;
  status?: string;
  abstract?: string;
  keywords?: string[];
  link?: string;
}

export default function Presentations() {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
  const numPresentations = presentations.length;

  const numWorkshopPresentations = presentations.filter(pres => pres.type === 'Workshop Presentation').length;
  const numInvitedPresentations = presentations.filter(pres => pres.type === 'Presentation').length;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="pt-12 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-mono font-bold mb-4">Presentations</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Showcasing impactful presentations in AI, healthcare, and robotics.
          </p>
          <div className="mt-6 flex gap-8 text-sm text-gray-400">
            <span>📊 <strong className="text-white">{numPresentations}</strong> Total Presentations</span>
            <span>🗣️ <strong className="text-white">{numWorkshopPresentations}</strong> Workshop Presentations</span>
            <span>🎤 <strong className="text-white">{numInvitedPresentations}</strong> Presentations</span>
          </div>
        </div>
      </div>

      {/* Presentations List */}
      <div className="max-w-6xl mx-auto px-4 pb-24">
        <h2 className="text-4xl font-mono font-bold mb-8">Presentations</h2>
        <div className="space-y-8">
          {presentations.map((pres: PresentationItem) => (
            <div
              key={pres.id}
              className="bg-gray-900 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Presentation Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      pres.type === 'Workshop Presentation' 
                        ? 'bg-green-900 text-green-300' 
                        : pres.type === 'Presentation'
                        ? 'bg-purple-900 text-purple-300'
                        : 'bg-gray-700 text-gray-300'
                    }`}>
                      {pres.type === 'Workshop Presentation'
                        ? 'Workshop Presentation'
                        : 'Presentation'}
                    </span>
                    <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-xs font-medium">
                      {pres.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 leading-tight">{pres.title}</h3>
                </div>
              </div>

              {/* Presenters */}
              <p className="text-blue-400 mb-3 text-lg">{pres.presenters}</p>

              {/* Presentation Details */}
              <div className="mb-4 text-gray-300">
                <p className="text-lg font-medium">{pres.conference}</p>
                {pres.location && <p className="text-sm">{pres.location}</p>}
                <p className="text-sm text-gray-400 mt-1">{pres.date}</p>
              </div>

              {/* Abstract */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2 text-gray-200">Abstract</h4>
                <p className="text-gray-300 leading-relaxed">{pres.abstract}</p>
              </div>

              {/* Keywords */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-2 text-gray-400">Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {pres.keywords?.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                {pres.link && (
                  <a
                    href={`${basePath}${pres.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white text-white px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors duration-200 flex items-center justify-center"
                  >
                    View Paper
                  </a>
                )}
                <button className="border border-gray-600 text-gray-300 px-6 py-2 text-sm hover:bg-gray-600 hover:text-white transition-colors duration-200">
                  Cite
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 