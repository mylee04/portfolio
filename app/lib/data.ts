import { stat } from "fs";

// career
export const experiences = [
  {
    title: "Deloitte",
    image: "/images/deloitte.png",
    description: "Data Scientist (January 2024 – Present)\n\n• Implemented agentic review AI with RAG, improving processing efficiency by 40% and reducing manual review time by 50%\n• Streamlined real-time data workflow managing 46M+ daily news data with 99.7% accuracy\n• Designed risk-sensing GenAI service and SQL Database for clients\n• Built GenAI product for auditors using Azure PromptFlow with LLM optimization\n• Presented at UVA McIntire School of Commerce on GenAI Applications in Accounting and Auditing",
  },
  {
    title: "Atos Zdata",
    image: "/images/atos.jpg",
    description: "Data Scientist Intern (May 2023 – August 2023)\n\n• Developed generative AI private LLM using RAG, Langchain, and Vector Database\n• Created automatic response system for RFPs, RFIs, and SoWs\n• Built real-time updating Vector Database system\n• Compared LLM models: Llama-2, Falcon, and GPT4ALL",
  },
  {
    title: "Graduate Research Assistant",
    image: "/images/gwu.png",
    description: "GWU Assistive Robotics & Tele-MEDicine LAB (October 2022 – May 2024)\n\n• Built nursing AI using LLMs to expedite diagnosis process\n• Analyzed 3,875 video files of autism patients using multi-modal AI\n• Created AI medical chatbot with GPT 3.5, AWS Lambda, and Cloudflare\n• Integrated Pepper robot with language model for oral Q&A system",
  },
];

// projects
export const projects = [
  {
    id: "aerospace-ai-thesis",
    title: "AI-Driven Defect Detection for Aerospace Composites",
    company: "Bauman Moscow State Technical University (Bachelor's Thesis)",
    period: "2022",
    description: "Developed a novel methodology combining Finite Element Analysis (FEA) with Machine Learning to predict structural integrity in aerospace components.",
    impact: "Achieved 95-97% predictive accuracy by generating a proprietary dataset from scratch via complex ANSYS simulations.",
    techStack: ["ANSYS (FEA)", "Machine Learning", "Computer Vision", "Data Generation", "Python"],
    image: "/images/bmstu.png",
    status: "Academic"
  },
  {
    id: "agentic-review-ai",
    title: "Agentic Review AI System",
    company: "Deloitte",
    period: "2024",
    description: "Implemented AI system with RAG for automated content review and categorization",
    impact: "40% efficiency improvement, 50% reduction in manual review time",
    techStack: ["Python", "RAG", "Azure", "LLM", "Vector Database"],
    image: "/images/deloitte.png",
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
    image: "/images/deloitte.png",
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
    image: "/images/gwu.png",
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
    image: "/images/gwu.png",
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
    image: "/images/gwu.png",
    status: "Research"
  }
];

projects.sort((a, b) => {
  const parsePeriod = (periodStr: string) => {
    if (periodStr.includes('-')) {
      return parseInt(periodStr.split('-')[1]);
    } else {
      return parseInt(periodStr);
    }
  };
  const periodA = parsePeriod(a.period);
  const periodB = parsePeriod(b.period);
  return periodB - periodA;
});

// presentations
export const presentations = [
  {
    id: 1,
    title: "LLM-based Nursing Diagnostic AI with Human-System Interaction for Effective Training and Nursing Home Support",
    presenters: "Myungeun Lee",
    conference: "The 21st International Conference on Ubiquitous Robots",
    date: "June 2024",
    location: "New York City, New York",
    type: "Workshop Presentation",
    status: "Presented",
    abstract: "This work presents a large language model-based nursing diagnostic AI system designed to support nursing home operations through effective human-system interaction and training protocols.",
    keywords: ["LLM", "Nursing AI", "Human-Computer Interaction", "Healthcare AI", "Training Systems"],
    link: "#"
  },
  {
    id: 2,
    title: "GenAI Applications in Accounting and Auditing",
    presenters: "Myungeun Lee",
    conference: "UVA McIntire School of Commerce",
    date: "April 2025",
    type: "Presentation",
    status: "Presented",
    abstract: "Presented comprehensive overview of GenAI applications and use-cases in accounting and auditing",
    keywords: ["GenAI", "Accounting AI", "Auditing Systems", "Business Applications"],
    link: "#"
  },
  {
    id: 3,
    title: "AI-Based Interactive Telemedicine Chatbot System for Medical Inquiries",
    presenters: "Myungeun Lee",
    conference: "International Conference on Medical AI",
    date: "2024",
    type: "Workshop Presentation",
    link: "#",
  },
];

presentations.sort((a, b) => {
  const parseDate = (dateStr: string) => {
    const months: { [key: string]: number } = {
      "January": 1, "February": 2, "March": 3, "April": 4, "May": 5, "June": 6,
      "July": 7, "August": 8, "September": 9, "October": 10, "November": 11, "December": 12
    };
    const parts = dateStr.split(' ');
    if (parts.length === 2) { // e.g., "December 2024"
      const monthNum = months[parts[0]];
      const year = parseInt(parts[1]);
      return new Date(year, monthNum - 1, 1).getTime();
    } else if (parts.length === 1 && !isNaN(parseInt(parts[0]))) { // e.g., "2024"
      const year = parseInt(parts[0]);
      return new Date(year, 0, 1).getTime();
    }
    return 0; // Fallback for unparseable dates
  };

  const dateA = parseDate(a.date);
  const dateB = parseDate(b.date);

  return dateB - dateA; // Descending order (latest first)
});

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
    abstract: "Standardized nursing languages play a crucial role in facilitating holistic nursing care, but their full benefits are still being realized. However, the implementation of NNN linkages and their impact on nursing processes and nursing home (NH) residents' outcomes, as well as the identification of facility and resident factors, remain unexplored. The purpose of this study was to examine (a) frequently occurring NNN linkages and (b) related facility and resident factors on the use of NANDA, NIC, and NOC for NH residents. Data were collected from 273 residents in 19 NHs in Korea 19 NHs in Korea, with structured questionnaires administered to NH registered nurses using a newly developed smartphone application. Descriptive statistics, ANOVA, and ANCOVA were used for the data analysis. We identified that factors, such as case mix index (resident acuity), age of resident, year of facility establishment, facility ownership status, and admission period of residents, are related to the use of NANDA, NIC, and NOC. Nine NNN linkages were newly identified in this study, mostly centered on fall prevention. The findings provide various approaches to address the risk of falls in NHs considering environmental, physical, and psychological factors. This study contributes to the foundation of evidence related to NHs by collecting specific data on the nursing process for the physiological, behavioral, safety, family, health system, and community areas applied to the residents of long-term care facilities at the national level. Future research in different settings and tailored population is needed.",
    keywords: ["Nursing Informatics", "Digital Health", "Standardized Nursing Language", "Mobile Health (mHealth)", "Long-Term Care"],    
    link: "https://doi.org/10.1093/geroni/igae098.2801"
  },
  {
    id: 2,
    title: "Multimodal and Multi-Lingual Deep Neural Network for Interactive Behavior Style Recognition from Uncontrolled Video-logs of Children with Autism",
    authors: "Zhenhao Zhao, Eunsun Chung, Myungeun Lee, Kyong-Mee Chung, Chung Hyuk Park",
    journal: "2024 33rd IEEE International Conference on Robot and Human Interactive Communication (ROMAN)",
    date: "October 2024",
    type: "Conference Paper",
    status: "Published",
    abstract: "With the increase of prevalence in autism, the need for efficient public health support has been amplified. Socially-assistive robots (SARs) have been found effective in engaging and interacting with autistic children, however, the perception intelligence during interaction still needs more domain-specific knowledge in terms of understanding children's behaviors. The Family Observation Schedule-Second Version (FOS-II) is one of the key methods in assessing parent-child interactions in developmental disabilities, yet its manual annotation demands considerable time and effort. This study proposes a multimodal artificial intelligence (AI) model using video and audio inputs for automated FOS-II annotation. Utilizing advanced deep learning for behavior recognition, this method offers rapid, cost-effective FOS-II scaling. It will thus enhance the capability of socially assistive robots to understand human behaviors and support the advancement of digital health research for children with autism. The visual perception in home settings are most likely based on uncontrolled environments, so it is crucial to develop algorithms that can robustly work with video-log data with uncontrolled quality. Ultimately, it aims to ease the burden on parents and caregivers, streamlining the monitoring and treatment of challenging behaviors in autism.",
    keywords: ["Multimodal AI", "Speech Recognition", "Behavior Recognition", "Autism Spectrum Disorder", "Socially-Assistive Robotics (SAR)", "Computer Vision"],    
    link: "https://ieeexplore.ieee.org/document/10731189",
    conferenceDate: "26-30 August 2024",
    ieeeXploreDate: "30 October 2024"
  },
  {
    id: 3,
    title: "Revisiting NANDA International–Nursing Interventions Classification–Nursing Outcomes Classifications Linkages of Nursing Home Residents in Korea",
    authors: "Shin, Juh Hyun PhD, RN, FAAN; Park, Chung Hyuk PhD; Park, Suhyun PhD, RN; Lee, Myungeun MS; Kim, Jisoo",
    journal: "CIN: Computers, Informatics, Nursing",
    date: "March 2025",
    type: "Journal Article",
    status: "Published",
    abstract: "Standardized nursing languages help nurses articulate issues with patients, forming the groundwork for the selection of nursing interventions aimed at achieving outcomes. However, the application of standardized nursing linkages on nursing processes and nursing home residents' outcomes, and the identification of facility and resident factors, remains unexplored. The purpose of this study was to examine nursing home facility and resident factors on the use of NANDA, Nursing Interventions Classification, and Nursing Outcomes Classification (NNN) and frequently occurring NNN linkages surrounding nursing home residents in Korea. Data were collected from 53 nurses of 273 residents in 19 nursing homes in Korea using a newly developed smartphone application. Descriptive statistics, analysis of variance, and analysis of covariance were used for the data analysis. Nine NNN linkages were identified in this study, mostly centered on fall prevention. We also identified that residents' factors (including acuity, age, and admission period) and organizational factors (including year of facility establishment and facility ownership status), were related to the use of NNN. Nursing home nurses' clinical and critical judgment and the utilization of standardized nursing languages to select proper nursing interventions and outcomes should be based on both resident and organizational factors.",
    keywords: ["Health Informatics", "Standardized Nursing Language (NNN)", "Clinical Decision Support", "Data-driven Healthcare", "Nursing Homes"],
    link: "https://journals.lww.com/cinjournal/abstract/9900/revisiting_nanda_international_nursing.308.aspx"
  },
  {
    id: 4,
    title: "Development of AI-driven Defect Detection Methods for Aerospace Composite Structures",
    authors: "Myungeun Lee, C.V. Resnik, D.V. Sapronov",
    journal: "Bachelor's Thesis, Bauman Moscow State Technical University",
    date: "June 2022",
    type: "Thesis",
    status: "Graduated with Red Diploma",
    abstract: "This thesis presents a hybrid methodology combining finite element analysis (FEA) with machine learning to enhance defect detection and lifecycle assessment for composite aerospace elements.",
    keywords: ["Machine Learning", "FEA", "ANSYS", "Computer Vision", "Aerospace Engineering", "Predictive Maintenance"],
    link: "/projects/aerospace-ai-thesis" 
  }
];

publications.sort((a, b) => {
  const parseDate = (dateStr: string) => {
    const months: { [key: string]: number } = {
      "January": 1, "February": 2, "March": 3, "April": 4, "May": 5, "June": 6,
      "July": 7, "August": 8, "September": 9, "October": 10, "November": 11, "December": 12
    };
    const parts = dateStr.split(' ');
    if (parts.length === 2) { // e.g., "December 2024"
      const monthNum = months[parts[0]];
      const year = parseInt(parts[1]);
      return new Date(year, monthNum - 1, 1).getTime();
    } else if (parts.length === 1 && !isNaN(parseInt(parts[0]))) { // e.g., "2024"
      const year = parseInt(parts[0]);
      return new Date(year, 0, 1).getTime();
    }
    return 0; // Fallback for unparseable dates
  };

  const dateA = parseDate(a.date);
  const dateB = parseDate(b.date);

  return dateB - dateA; // Descending order (latest first)
});

// tech stack
export const techStack = {
  programming: ["Python", "JavaScript/TypeScript", "C#", "SQL", "Matlab", "ANSYS"],
  platforms: ["Azure", "Kubernetes", "Docker", "Databricks", "PySpark", "Azure Data Factory", "Git", "Supabase", "Basehub", "Clerk"],
  libraries: ["Langchain", "Streamlit", "Scikit-learn", "OpenAI", "FAISS", "PyTorch", "HuggingFace", "DataLake", "Plasmo"]
};

// personal info
export const personalInfo = {
  name: "MYUNGEUN LEE",
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