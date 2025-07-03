// career
export const experiences = [
  {
    title: "Deloitte",
    image: "/images/deloitte.jpg",
    description: "Data Scientist (January 2024 – Present)\n\n• Implemented agentic review AI with RAG, improving processing efficiency by 40% and reducing manual review time by 50%\n• Streamlined real-time data workflow managing 46M+ daily news data with 99.7% accuracy\n• Designed risk-sensing GenAI service and SQL Database for clients\n• Built GenAI product for auditors using Azure PromptFlow with LLM optimization\n• Presented at UVA McIntire School of Commerce on GenAI Applications in Accounting and Auditing",
  },
  {
    title: "Atos Zdata",
    image: "/images/atos.jpg",
    description: "Data Scientist Intern (May 2023 – August 2023)\n\n• Developed generative AI private LLM using RAG, Langchain, and Vector Database\n• Created automatic response system for RFPs, RFIs, and SoWs\n• Built real-time updating Vector Database system\n• Compared LLM models: Llama-2, Falcon, and GPT4ALL",
  },
  {
    title: "Graduate Research Assistant",
    image: "/images/gwu.jpg",
    description: "GWU Assistive Robotics & Tele-MEDicine LAB (October 2022 – May 2024)\n\n• Built nursing AI using LLMs to expedite diagnosis process\n• Analyzed 3,875 video files of autism patients using multi-modal AI\n• Created AI medical chatbot with GPT 3.5, AWS Lambda, and Cloudflare\n• Integrated Pepper robot with language model for oral Q&A system",
  },
];

// projects
export const projects = [
  {
    id: "agentic-review-ai",
    title: "Agentic Review AI System",
    company: "Deloitte",
    period: "2024",
    description: "Implemented AI system with RAG for automated content review and categorization",
    impact: "40% efficiency improvement, 50% reduction in manual review time",
    techStack: ["Python", "RAG", "Azure", "LLM", "Vector Database"],
    image: "/images/deloitte.jpg",
    status: "Production"
  },
  {
    id: "realtime-data-processing",
    title: "Real-time Data Processing Pipeline",
    company: "Deloitte", 
    period: "2024",
    description: "Streamlined workflow to process real-time data for daily updates",
    impact: "46M+ news data processing with 99.7% accuracy",
    techStack: ["Python", "Azure Data Factory", "PySpark", "Databricks"],
    image: "/images/deloitte.jpg",
    status: "Production"
  },
  {
    id: "generative-ai-llm",
    title: "Private LLM with RAG",
    company: "Atos Zdata",
    period: "2023",
    description: "Developed generative AI private LLM for automated document processing",
    impact: "Automated RFP/RFI/SoW response generation",
    techStack: ["Python", "Langchain", "Vector Database", "Llama-2", "GPT4ALL"],
    image: "/images/atos.jpg",
    status: "Completed"
  },
  {
    id: "nursing-ai-system",
    title: "Nursing AI Diagnostic System",
    company: "GWU Research Lab",
    period: "2022-2024",
    description: "Built nursing AI using large language models to expedite diagnosis process",
    impact: "Substitute for nurses in diagnostic processes",
    techStack: ["Python", "LLM", "GPT 3.5", "AWS Lambda", "Cloudflare"],
    image: "/images/gwu.jpg",
    status: "Research"
  },
  {
    id: "autism-analysis-ai",
    title: "Multi-modal AI for Autism Analysis",
    company: "GWU Research Lab",
    period: "2022-2024",
    description: "Analyzed autism patient videos using multi-modal AI across image, audio, and text",
    impact: "Processed 3,875 video files for behavioral analysis",
    techStack: ["Python", "Multi-modal AI", "PyTorch", "Computer Vision", "NLP"],
    image: "/images/gwu.jpg",
    status: "Research"
  },
  {
    id: "pepper-robot-integration",
    title: "Pepper Robot AI Integration",
    company: "GWU Research Lab",
    period: "2023",
    description: "Integrated Pepper robot with language model for oral Q&A system",
    impact: "Interactive medical chatbot with speech recognition and TTS",
    techStack: ["Python", "Robotics", "Speech Recognition", "TTS", "GPT 3.5"],
    image: "/images/gwu.jpg",
    status: "Research"
  },
  {
    id: "uva-genai-presentation",
    title: "GenAI Applications in Accounting and Auditing",
    company: "UVA McIntire School of Commerce",
    period: "2024",
    description: "Presented comprehensive overview of GenAI applications and use-cases in accounting and auditing",
    impact: "Educational presentation to university graduate students and faculty on practical AI applications",
    techStack: ["GenAI", "Accounting AI", "Auditing Systems", "Business Applications"],
    image: "/images/uva.jpg",
    status: "Presentation"
  }
];

// publications
export const publications = [
  {
    id: 1,
    title: "Related Facility and Resident Factors on Standardized Nursing Languages for Nursing Home Nurses in Korea",
    authors: "Juh Hyun shin, Chung Hyuk Park, Myungeun Lee, Suhyun Park",
    journal: "Innovation in Aging",
    volume: "Volume 8, Issue Supplement_1",
    date: "December 2024",
    pages: "Page 866",
    type: "Journal Article",
    status: "Published",
    abstract: "This study examines the relationship between facility characteristics and resident factors in the implementation of standardized nursing languages for nursing home nurses in Korea.",
    keywords: ["Nursing Languages", "Healthcare", "Korea", "Standardization"]
  },
  {
    id: 2,
    title: "Multimodal Deep Neural Network for Interactive Behavior Style Recognition from Uncontrolled Video-Logs of Children with Autism",
    authors: "Zhenhao Zhao, Eunsun Chung, Myungeun Lee, Kyong-Mee Chung, Chung Hyuk Park",
    journal: "IEEE RO-MAN Conference",
    date: "August 2024",
    type: "Conference Paper",
    status: "Published",
    abstract: "This paper presents a multimodal deep neural network approach for recognizing interactive behavior styles in children with autism from uncontrolled video logs, contributing to automated behavioral analysis in clinical settings.",
    keywords: ["Autism", "Multimodal AI", "Behavior Recognition", "Deep Learning", "Clinical Applications"]
  },
  {
    id: 3,
    title: "LLM-based Nursing Diagnostic AI with Human-System Interaction for Effective Training and Nursing Home Support",
    authors: "Lee, M., Park, S., Shin, J.H., & Park, C.H.",
    journal: "The 21st International Conference on Ubiquitous Robots",
    date: "June 2024",
    location: "New York City, New York",
    type: "Workshop Presentation",
    status: "Published",
    abstract: "This work presents a large language model-based nursing diagnostic AI system designed to support nursing home operations through effective human-system interaction and training protocols.",
    keywords: ["LLM", "Nursing AI", "Human-Computer Interaction", "Healthcare AI", "Training Systems"]
  },
  {
    id: 4,
    title: "AI-Based Interactive Telemedicine Chatbot System for Medical Inquiries",
    authors: "Krystian Burum, Myungeun Lee, Jia Yuan Teoh, and Chung-Hyuk Park",
    journal: "IEEE RO-MAN",
    date: "August 2023",
    type: "Poster Presentation",
    status: "Published",
    abstract: "This paper introduces an AI-based interactive telemedicine chatbot system designed to handle medical inquiries, demonstrating the potential of conversational AI in healthcare applications.",
    keywords: ["Telemedicine", "Chatbot", "Medical AI", "Interactive Systems", "Healthcare Technology"]
  },
  {
    id: 5,
    title: "Detecting Surface Defects in Aircraft Using Machine Learning",
    authors: "Myungeun Lee, C.V. Resnik, D.V. Sapronov",
    journal: "Graduation Thesis at BMSTU",
    date: "June 2022",
    type: "Thesis",
    status: "Published",
    abstract: "This thesis explores machine learning approaches for detecting surface defects in aircraft, contributing to automated quality control and maintenance processes in aerospace engineering.",
    keywords: ["Machine Learning", "Aircraft Maintenance", "Defect Detection", "Quality Control", "Aerospace Engineering"]
  }
];

// tech stack
export const techStack = {
  programming: ["Python", "JavaScript/TypeScript", "C#", "SQL", "Matlab", "ANSYS"],
  platforms: ["Azure", "Kubernetes", "Docker", "Databricks", "PySpark", "Azure Data Factory", "Git", "Supabase", "Basehub", "Clerk"],
  libraries: ["Langchain", "Streamlit", "Scikit-learn", "OpenAI", "FAISS", "PyTorch", "HuggingFace", "DataLake", "Plasmo"]
};

// personal info
export const personalInfo = {
  name: "Myungeun Lee",
  title: "GenAI Engineer & Data Scientist",
  company: "Deloitte",
  location: "Fairfax, VA",
  email: "myungeun2dc@gmail.com",
  phone: "2028120935",
  github: "https://github.com/mylee04",
  linkedin: "https://www.linkedin.com/in/myungeun-lee-1a67a4216/",
  instagram: "https://www.instagram.com/mylee_dc/",
  workEmail: "mylee@deloitte.com",
  workPhone: "+1 571-632-6804"
};

// education
export const education = [
  {
    degree: "MS in Electrical Engineering",
    school: "George Washington University",
    location: "Washington D.C.",
    gpa: "3.85/4.0",
    date: "May 2024"
  },
  {
    degree: "BE in Rocket Systems and Aeronautics (Red Diploma)",
    school: "Bauman Moscow State Technical University",
    location: "Moscow, Russia",
    gpa: "4.83/5.0",
    date: "June 2022"
  }
];

// military service
export const militaryService = {
  unit: "22nd Infantry Division of the South Korean Army",
  rank: "Sergeant",
  description: "Served at the GOP (General Outpost) and collected image and video data from TOD (thermal observation device)."
}; 