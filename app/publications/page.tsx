"use client";

import { publications } from "../lib/data";

export default function Publications() {
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
            <span>📊 <strong className="text-white">5</strong> Publications</span>
            <span>🏆 <strong className="text-white">3</strong> Conference Papers</span>
            <span>📖 <strong className="text-white">1</strong> Journal Article</span>
            <span>🎓 <strong className="text-white">1</strong> Thesis</span>
          </div>
        </div>
      </div>

      {/* Publications List */}
      <div className="max-w-6xl mx-auto px-4 pb-24">
        <div className="space-y-8">
          {publications.map((pub) => (
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
                        : pub.type === 'Workshop Presentation'
                        ? 'bg-green-900 text-green-300'
                        : pub.type === 'Poster Presentation'
                        ? 'bg-yellow-900 text-yellow-300'
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
                {pub.location && <p className="text-sm">{pub.location}</p>}
                <p className="text-sm text-gray-400 mt-1">{pub.date}</p>
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
                  {pub.keywords.map((keyword, index) => (
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
                <button className="border border-white text-white px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors duration-200">
                  View Paper
                </button>
                <button className="border border-gray-600 text-gray-300 px-6 py-2 text-sm hover:bg-gray-600 hover:text-white transition-colors duration-200">
                  Cite
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research Interests */}
      <div className="max-w-6xl mx-auto px-4 pb-24">
        <div className="bg-gray-900 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Research Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="text-lg font-semibold mb-2">AI in Healthcare</h3>
              <p className="text-gray-400 text-sm">Developing AI systems for medical diagnosis, nursing support, and patient care automation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-lg font-semibold mb-2">Multimodal AI</h3>
              <p className="text-gray-400 text-sm">Creating systems that understand and process multiple data types simultaneously</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🏥</div>
              <h3 className="text-lg font-semibold mb-2">Clinical Applications</h3>
              <p className="text-gray-400 text-sm">Bridging the gap between AI research and real-world medical practice</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 