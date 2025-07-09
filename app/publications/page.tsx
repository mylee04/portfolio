"use client";

import { publications } from "../lib/data";

interface PublicationItem {
  id: number;
  title: string;
  authors: string;
  journal: string;
  date: string;
  volume?: string;
  pages?: string;
  type?: string;
  status?: string;
  abstract?: string;
  keywords?: string[];
  link?: string;
  conferenceDate?: string;
  ieeeXploreDate?: string;
}

export default function Publications() {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
  const numPublications = publications.length;

  const numJournalArticles = publications.filter(pub => pub.type === 'Journal Article').length;
  const numConferencePapers = publications.filter(pub => pub.type === 'Conference Paper').length;
  const numThesis = publications.filter(pub => pub.type === 'Thesis').length;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="pt-12 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-mono font-bold mb-4">Publications</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Research contributions spanning AI, healthcare, robotics, and aerospace engineering 
            with focus on practical applications and real-world impact.
          </p>
          <div className="mt-6 flex gap-8 text-sm text-gray-400">
            <span>📊 <strong className="text-white">{numPublications}</strong> Total Publications</span>
            <span>🏆 <strong className="text-white">{numConferencePapers}</strong> Conference Papers</span>
            <span>📖 <strong className="text-white">{numJournalArticles}</strong> Journal Articles</span>
            <span>🎓 <strong className="text-white">{numThesis}</strong> Thesis</span>
          </div>
        </div>
      </div>

      {/* Publications List */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <h2 className="text-4xl font-mono font-bold mb-8">Publications</h2>
        <div className="space-y-8">
          {publications.map((pub: PublicationItem) => (
            <div
              key={pub.id}
              className="bg-gray-900 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Publication Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      pub.type === 'Journal Article' 
                        ? 'bg-purple-900 text-purple-300'
                        : pub.type === 'Conference Paper'
                        ? 'bg-blue-900 text-blue-300'
                        : 'bg-gray-700 text-gray-300'
                    }`}>
                      {pub.type}
                    </span>
                    <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-xs font-medium">
                      {pub.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 leading-tight">{pub.title}</h3>
                </div>
              </div>

              {/* Authors */}
              <p className="text-blue-400 mb-3 text-lg">{pub.authors}</p>

              {/* Publication Details */}
              <div className="mb-4 text-gray-300">
                <p className="text-lg font-medium">{pub.journal}</p>
                {pub.volume && <p className="text-sm">{pub.volume}</p>}
                {pub.pages && <p className="text-sm">{pub.pages}</p>}
                <p className="text-sm text-gray-400 mt-1">{pub.date}</p>
                {pub.conferenceDate && <p className="text-sm text-gray-400">Conference Date: {pub.conferenceDate}</p>}
                {pub.ieeeXploreDate && <p className="text-sm text-gray-400">Added to IEEE Xplore: {pub.ieeeXploreDate}</p>}
              </div>

              {/* Abstract */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2 text-gray-200">Abstract</h4>
                <p className="text-gray-300 leading-relaxed">{pub.abstract}</p>
              </div>

              {/* Keywords */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-2 text-gray-400">Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {pub.keywords?.map((keyword, index) => (
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
                {pub.link && (
                  <a
                    href={pub.link.startsWith('http') ? pub.link : `${basePath}${pub.link}`}
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