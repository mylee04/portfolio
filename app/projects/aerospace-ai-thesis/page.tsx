"use client";

import Image from "next/image";
import Link from "next/link";

export default function AerospaceAIThesisPage() {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

  const images = {
    schematic: `${basePath}/images/ariane6-fairing-schematic.png`,
    feaModel: `${basePath}/images/ansys-fea-model.png`,
    simulationSetup: `${basePath}/images/ansys-simulation-setup.png`,
    stressResult: `${basePath}/images/fea-stress-analysis-result.png`,
    accuracyGraph: `${basePath}/images/model-accuracy-result.png`,
    classificationResults: `${basePath}/images/defect-classification-results.png`
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="pt-12 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-mono font-bold mb-4">AI-Driven Defect Detection for Aerospace Composites</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            A Bachelor's Thesis from Bauman Moscow State Technical University, showcasing a novel methodology combining high-fidelity simulation with advanced AI.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-400">
            <span>🎓 Academic Project</span>
            <span>🗓️ June 2022</span>
            <span className="font-bold text-red-400">✨ Graduated with Red Diploma</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 pb-24">
        
        {/* --- 섹션 1: The Challenge & The Goal --- */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-mono font-bold mb-6">The Challenge</h2>
                <p className="text-lg leading-relaxed text-gray-300">
                    Composite materials in aerospace are strong but susceptible to hidden defects. The goal was to develop a reliable method to detect these flaws and predict component lifecycle, moving beyond the limitations of traditional inspection.
                </p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
                <Image src={images.schematic} alt="Schematic of the Ariane 6 Nose Cone" width={500} height={700} className="rounded-lg object-contain w-full" />
                <p className="text-center text-gray-400 text-sm mt-2">Project Subject: An Ariane 6 launch vehicle nose cone.</p>
            </div>
        </div>

        {/* --- 섹션 2: My Approach: Engineering the Data --- */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-6 border-t border-gray-800 pt-8">My Approach: Engineering the Data</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-3">From CAD to FEA Model</h3>
              <p className="text-lg text-gray-300 mb-4">
                I began by constructing a high-fidelity Finite Element (FEA) model of the rocket fairing using <strong>ANSYS</strong>. This involved creating a detailed mesh to accurately represent its complex geometry and material properties.
              </p>
              <h3 className="text-2xl font-bold text-blue-400 mb-3">Proprietary Dataset Generation</h3>
              <p className="text-lg text-gray-300">
                Instead of using off-the-shelf data, I simulated <strong>100 unique defect scenarios</strong>. By applying realistic aerodynamic loads and thermal conditions, I generated a rich, proprietary dataset of stress and strain distributions—the perfect fuel for our AI model.
              </p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <Image src={images.feaModel} alt="Finite Element Model in ANSYS" width={600} height={450} className="rounded-lg shadow-lg object-contain w-full" />
              <p className="text-center text-gray-400 text-sm mt-2">The detailed FEA mesh used for structural analysis in ANSYS.</p>
            </div>
          </div>
          
          {/* Simulation Details Sub-section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-900 p-4 rounded-lg">
              <Image src={images.simulationSetup} alt="ANSYS Simulation Setup and Boundary Conditions" width={600} height={450} className="rounded-lg shadow-lg object-contain w-full" />
              <p className="text-center text-gray-400 text-sm mt-2">Simulation setup and boundary conditions in ANSYS.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-3">Simulation Details & Boundary Conditions</h3>
              <p className="text-lg text-gray-300">
                Accurate simulation relies on meticulously defined boundary conditions and load applications. This image illustrates the various forces and constraints applied to the FEA model to mimic real-world operational scenarios, ensuring the fidelity of the generated data.
              </p>
            </div>
          </div>

        </div>
        
        {/* --- 섹션 3: The Results: AI-Powered Prediction --- */}
        <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-6 border-t border-gray-800 pt-8">The Results: AI-Powered Prediction</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                    <p className="text-lg leading-relaxed text-gray-300 mb-4">The trained models demonstrated exceptional performance, validating the entire methodology:</p>
                    <ul className="list-disc list-inside space-y-2 text-xl text-gray-200">
                        <li>The FEA-data model achieved <strong>95% efficiency</strong> in predicting component lifecycle.</li>
                        <li>The Computer Vision model attained <strong>97% accuracy</strong> in identifying surface defects.</li>
                    </ul>
                </div>
                <div className="order-1 md:order-2 bg-gray-900 p-4 rounded-lg">
                    <Image src={images.accuracyGraph} alt="Model Accuracy/Loss Graph" width={800} height={450} className="rounded-lg shadow-lg object-contain w-full" />
                    <p className="text-center text-gray-400 text-sm mt-2">Training and validation accuracy/loss curves (Thesis, p. 79).</p>
                </div>
            </div>
        </div>

        {/* --- 섹션 4: AI in Action: Visual Defect Classification --- */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-6 border-t border-gray-800 pt-8">AI in Action: Visual Defect Classification</h2>
          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            The Computer Vision model in action. Green labels indicate the AI's correct classification compared to the ground truth (in parentheses). The model successfully identifies various surface defects like pitting, scratches, and patches from raw images.
          </p>
          <div className="bg-gray-900 p-4 rounded-lg">
            <Image src={images.classificationResults} alt="Test results of the computer vision model" width={1000} height={800} className="rounded-lg shadow-lg object-contain w-full" />
            <p className="text-center text-gray-400 text-sm mt-2">Sample classification results from the trained CNN model (Thesis, p. 80).</p>
          </div>
        </div>

        {/* --- 섹션 5: FEA Results & Insights --- */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-6 border-t border-gray-800 pt-8">FEA Results & Insights</h2>
          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            The Finite Element Analysis yielded critical insights into the structural behavior of the composite fairing under stress. This visualization displays the distribution of stresses within the component, highlighting areas of high concentration and potential failure points, which informed the predictive model.
          </p>
          <div className="bg-gray-900 p-4 rounded-lg">
            <Image src={images.stressResult} alt="FEA Stress Analysis Result" width={800} height={600} className="rounded-lg shadow-lg object-contain w-full" />
            <p className="text-center text-gray-400 text-sm mt-2">Distribution of first principal stresses within the fairing (Thesis, p. 74).</p>
          </div>
        </div>

        {/* --- Skills & Download --- */}
        <div className="border-t border-gray-800 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-3xl font-mono font-bold mb-6">Key Skills</h2>
                    <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-md">FEA (ANSYS)</span>
                        <span className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-md">Machine Learning</span>
                        <span className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-md">Computer Vision</span>
                        <span className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-md">Python</span>
                        <span className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-md">Structural Analysis</span>
                        <span className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-md">Data Generation</span>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-mono font-bold mb-6">Full Thesis & Citation</h2>
                    <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
                        <h3 className="text-xl font-bold mb-2">Development of AI-driven Defect Detection Methods for Aerospace Composite Structures</h3>
                        <p className="text-blue-400 mb-2">Myungeun Lee, C.V. Resnik, D.V. Sapronov
                        </p>
                        <a 
                        href={`${basePath}/documents/lee_myungeun_aerospace_ai_thesis_2022.pdf`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mt-4 inline-block bg-blue-600 text-white px-8 py-3 text-lg font-bold rounded-lg hover:bg-blue-500 transition-colors duration-200"
                        >
                        Download Full Thesis (PDF) →
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
} 