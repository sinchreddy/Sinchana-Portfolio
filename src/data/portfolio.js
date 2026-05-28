import { color } from "framer-motion";

export const personalInfo = {
  name: "Sinchana Nandheesha",
  tagline: "Building intelligent, scalable, and user-focused digital solutions through software engineering, AI, and modern application development.",
  email: "sinchanareddyn@gmail.com",
  linkedin: "https://www.linkedin.com/in/sinchananandheesha/",
  github: "https://github.com/sinchreddy",
  resumeUrl: "/Sinchana_Nandheesha_Resume.pdf",
};

export const about = {
  summary: "Computer Science graduate passionate about software development, AI-driven systems, cybersecurity, and real-world problem solving. Experienced in Android development, Generative AI, and full-stack technologies through internships, research collaboration, and practical projects.",
  education: {
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    institution: "New Horizon College of Engineering, Bengaluru",
    period: "2022 – 2026",
    cgpa: "9.03 / 10",
  },
};

export const skills = [
  {
    category: "Programming Languages",
    icon: "Code2",
    color: "brand",
    items: ["Python", "Java", "C", "Kotlin", "JavaScript", "SQL"],
  },
  {
    category: "Core Concepts",
    icon: "Cpu",
    color: "accent",
    items: ["OOP", "DBMS", "Operating Systems", "MySQL", "Firebase", "REST APIs"],
  },
  {
    category: "Web Technologies",
    icon: "Globe",
    color: "emerald",
    items: ["HTML", "CSS", "JavaScript", "Flask", "React JS", "Django", "React Native", "Jetpack Compose"],
  },
  {
    category: "Cloud & APIs",
    icon: "Cloud",
    color: "brand",
    items: [ "Firebase", "Google Maps API", "Google Cloud Platform (Basic)", "API Integration"],
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    color: "accent",
    items: ["VS Code", "GitHub", "Android Studio", "IntelliJ", "Figma", "Eclipse", "Linux", "Vercel"],
  },
];

export const experience = [
  {
    role: "Android App Development Intern",
    company: "MindMatrix",
    period: "Feb 2026 – May 2026",
    type: "Past",
    bullets: [
      "Application development using Kotlin and Jetpack compose",
      "Android integration with native components",
      "Testing and deployment workflows",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Lokram Technologies Pvt. Ltd.",
    period: "Aug 2025 – Jan 2026",
    type: "Past",
    bullets: [
      "ReactJS development for production features",
      "Android integration and responsive interfaces",
      "REST API integration across platforms",
    ],
  },
  {
    role: "Generative AI Intern",
    company: "Prodigy InfoTech",
    period: "Nov 2025",
    type: "Past",
    bullets: [
      "GPT-based text generation pipelines",
      "Stable Diffusion / DALL-E model integration",
      "GANs and synthetic image generation",
    ],
  },
    {
    role: "Research Assistant - Forest 4.0 IoT Research",
    company: "New Horizon College of Engineering",
    period: "Feb 2023 - April 2023",
    type: "Research",
    bullets: [
      "Collaborated with faculty on research activities related to Forest 4.0 and IoT-based smart environmental systems.",
      "Contributed to IoT-based research for forest monitoring and intelligent ecosystem management.",
      "Assisted in technical discussions, documentation, and early-stage research implementation.",
    ],

  },
];

export const projects = [
  {
    title: "Santhe-Connect",
    description: "A tourism app helping users discover Karnataka's weekly markets, authentic food, homestays, and local culture using AI-enhanced recommendations.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase"],
    category: "Mobile",
    featured: true,
    github: "#",
    demo: "#",
    color: "brand",
  },
  {
    title: "Hridaya",
    subtitle: "Emotional Empathy AI Companion",
    description: "An emotionally intelligent AI companion focused on empathetic interactions and emotional support using generative AI.",
    tech: ["Kotlin", "Jetpack Compose", "Generative AI"],
    category: "AI / Mobile",
    featured: true,
    github: "#",
    demo: "#",
    color: "accent",
  },
  {
    title: "AutoEval",
    subtitle: "Automated Evaluation System",
    description: "A web-based system to automate student evaluation, test creation, scoring, analytics, and teacher dashboards.",
    tech: ["Python", "Django", "MySQL", "HTML", "CSS"],
    category: "Web",
    featured: true,
    github: "#",
    demo: "#",
    color: "emerald",
  },
  {
    title: "VerifyEd",
    description: "An intelligent platform that helps students discover verified hackathons, internships, and research conferences safely and efficiently while reducing misinformation and improving accessibility to opportunities.",
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "APIs"],
    category: "Full stack",
    featured: true,
    github: "#",
    demo: "#",
    color: "brand",
  },
  {
    title: "Order Placement System",
    description: "A web-based symptom analysis system that helps users identify possible diseases based on symptoms and connects them to relevant medical departments through an intuitive search interface.",
    tech: ["Java", "SQL"],
    category: "",
    featured: false,
    github: "#",
    color: "accent",
  },
  {
    title: "E-Store Platform",
    description: "Internship project involving e-commerce mobile app and website with API integration and payment features.",
    tech: ["React Native", "ReactJS", "REST APIs"],
    category: "Full Stack",
    featured: false,
    github: "#",
    demo: "#",
    color: "emerald",
  },
  {
    title: "Symptom Analyzer",
    description: "A symptom analysis system suggesting possible diseases and relevant medical departments using ML-backed logic.",
    tech: ["Python", "Flask", "MySQL", "HTML", "CSS"],
    category: "AI / Web",
    featured: false,
    github: "#",
    demo: "#",
    color: "brand",
  },
  {
    title: "RGB Controller Interface",
    description: "A web interface for controlling RGB colors with Flask-Arduino serial (UART) communication.",
    tech: ["Flask", "HTML", "CSS", "UART"],
    category: "IoT / Web",
    featured: false,
    github: "#",
    demo: "#",
    color: "accent",
  },
  {
    title: "Nandishwara Web Platform",
    description: "A digital platform connecting farmers to sapling sellers for an easier agricultural supply chain.",
    tech: ["HTML", "CSS"],
    category: "Web",
    featured: false,
    github: "#",
    demo: "#",
    color: "emerald",
  },
];

export const stats = [
  { value: "9+", label: "Projects Built", icon: "FolderOpen" },
  { value: "4", label: "Internships", icon: "Briefcase" },
  { value: "1", label: "Research Publication", icon: "BookOpen" },
  { value: "2+", label: "Hackathons", icon: "Zap" },
  { value: "4+", label: "Certifications", icon: "Award" },
];

export const exploring = [
  { topic: "Machine Learning", icon: "Brain", desc: "Deep learning architectures & model training" },
  { topic: "Cloud Computing", icon: "Cloud", desc: "Exploring cloud services, APIs, and deployment workflows" },
  { topic: "Scalable Systems", icon: "Network", desc: "Distributed systems & microservices" },
  { topic: "Secure AI Systems", icon: "Shield", desc: "AI security & ethical AI development" },
  { topic: "Mobile Development", icon: "Smartphone", desc: "Cross-platform & native mobile apps" },
];

export const research = {
  title: "Accurate Evaluation using Web Based Exam Management",
  description: "Research focused on automated evaluation systems, teacher dashboards, analytics, scoring automation, and reducing manual effort in academic assessment. The system explores NLP-based answer evaluation and real-time analytics for educational institutions.",
};

export const certifications = [
  { title: "Ethical Hacking Certification", issuer: "NSDC", icon: "Shield" },
  { title: "Fundamentals of Artificial Intelligence", issuer: "IIT Guwahati Association", icon: "Brain" },
  { title: "NASA International Space Apps Challenge 2024", issuer: "Galactic Problem Solver", icon: "Rocket" },
  { title: "Accelerate Her in Tech", issuer: "Nokia Hackathon", icon: "Zap" },
];
