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
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="pt-12 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold mb-4">Publications</h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
            Research contributions spanning AI, healthcare, robotics, and aerospace engineering 
            with a focus on practical applications and real-world impact.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-600 dark:text-gray-400">
            <span>📊 <strong className="text-black dark:text-white">{numPublications}</strong> Total Publications</span>
            <span>🏆 <strong className="text-black dark:text-white">{numConferencePapers}</strong> Conference Papers</span>
            <span>📖 <strong className="text-black dark:text-white">{numJournalArticles}</strong> Journal Articles</span>
            <span>🎓 <strong className="text-black dark:text-white">{numThesis}</strong> Thesis</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="space-y-8">
          {publications.map((pub: PublicationItem) => (
            <div
              key={pub.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      pub.type === 'Journal Article' 
                        ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300'
                        : pub.type === 'Conference Paper'
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300'
                        : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300'
                    }`}>
                      {pub.type}
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 rounded-full text-xs font-medium">
                      {pub.status}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">{pub.title}</h3>
                </div>
              </div>

              <p className="text-blue-600 dark:text-blue-400 mb-3 text-base md:text-lg">{pub.authors}</p>

              <div className="mb-4 text-gray-700 dark:text-gray-300">
                <p className="text-base md:text-lg font-medium">{pub.journal}</p>
                {pub.volume && <p className="text-sm">{pub.volume}</p>}
                {pub.pages && <p className="text-sm">{pub.pages}</p>}
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{pub.date}</p>
              </div>

              <div className="mb-4">
                <h4 className="text-base font-semibold mb-2 text-gray-800 dark:text-gray-200">Abstract</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{pub.abstract}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-2 text-gray-500 dark:text-gray-400">Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {pub.keywords?.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {pub.link && (
                  <a
                    href={pub.link.startsWith('http') ? pub.link : `${basePath}${pub.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-black dark:border-white text-black dark:text-white px-6 py-2 text-sm hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-200 flex items-center justify-center"
                  >
                    View Paper
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 