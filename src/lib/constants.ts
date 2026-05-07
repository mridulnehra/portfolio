import { Skill, Project, AIProject, SocialLink, VisionNote } from './types';

export const SITE_CONFIG = {
  name: 'Mridul Nehra',
  tagline: 'A dreamer who codes.',
  email: 'mridulnehra005@gmail.com',
  github: 'https://github.com/mridulnehra',
  linkedin: 'https://www.linkedin.com/in/mridul-nehra',
};

export const skills: Skill[] = [
  { name: 'Python', icon: '🐍', x: 20, y: 30, description: 'My first love in programming' },
  { name: 'Machine Learning', icon: '🧠', x: 50, y: 15, description: 'Teaching machines to think' },
  { name: 'React', icon: '⚛️', x: 75, y: 35, description: 'Building UIs that spark joy' },
  { name: 'Next.js', icon: '▲', x: 60, y: 60, description: 'Full-stack React framework' },
  { name: 'AI / LLMs', icon: '🤖', x: 30, y: 65, description: 'The future is conversational' },
  { name: 'Problem Solving', icon: '💡', x: 80, y: 70, description: 'Turning puzzles into products' },
  { name: 'TypeScript', icon: '📘', x: 15, y: 55, description: 'JavaScript but make it safe' },
  { name: 'Node.js', icon: '🟢', x: 45, y: 80, description: 'Server-side everything' },
];

export const skillConnections: [number, number][] = [
  [0, 1], // Python ↔ ML
  [1, 4], // ML ↔ AI/LLMs
  [2, 3], // React ↔ Next.js
  [2, 6], // React ↔ TypeScript
  [3, 7], // Next.js ↔ Node.js
  [4, 5], // AI ↔ Problem Solving
  [0, 7], // Python ↔ Node.js
];

export const projects: Project[] = [
  {
    name: 'AI Resume Shortlisting System',
    description: 'An AI-powered system for resume shortlisting and interview assistance.',
    tags: ['AI', 'Python', 'NLP'],
    github: 'https://github.com/mridulnehra/AI-Resume-Shortlisting-Interview-Assistant-System',
  },
  {
    name: 'Marudhar Milk Tracker',
    description: 'A tracker app built for managing milk delivery and payments.',
    tags: ['JavaScript', 'Node.js'],
    github: 'https://github.com/mridulnehra/marudhar-milk-tracker',
  },
  {
    name: 'Sagar Menu',
    description: 'A QR-based ordering system for cafes and restaurants.',
    tags: ['CSS', 'HTML', 'JavaScript'],
    github: 'https://github.com/mridulnehra/sagar-menu',
  },
  {
    name: 'Restro Menu Backend',
    description: 'QR-based order placing system backend using Python and cloud hosting.',
    tags: ['Python', 'Flask', 'Render'],
    github: 'https://github.com/mridulnehra/restro-menu-backend',
  },
  {
    name: 'Oneiros Dream Journal',
    description: 'An app that studies and collects your dreams.',
    tags: ['TypeScript', 'React', 'Next.js'],
    github: 'https://github.com/mridulnehra/oneiros--dream-journal',
  },
  {
    name: 'Indore Real Estate Analysis',
    description: 'Scrape, store, clean, and analyze real estate listings to identify pricing trends.',
    tags: ['Python', 'Data Science', 'Web Scraping'],
    github: 'https://github.com/mridulnehra/Indore-Real-Estate-Market-Analysis',
  },
];

export const aiProjects: AIProject[] = [
  {
    name: 'AI Resume Shortlister',
    description: 'AI-powered resume screening and interview assistant system.',
    status: 'live',
    finding: 'NLP + structured scoring beats manual screening every time',
    tags: ['Python', 'NLP', 'AI'],
    link: 'https://github.com/mridulnehra/AI-Resume-Shortlisting-Interview-Assistant-System',
  },
  {
    name: 'AI Tutor',
    description: 'An AI-powered tutoring system for personalized learning.',
    status: 'experiment',
    finding: 'Contextual learning paths make all the difference',
    tags: ['Python', 'LLMs', 'Education'],
  },
  {
    name: 'All-In-One AI Agent',
    description: 'AI ecosystem for automated project building.',
    status: 'building',
    finding: 'Orchestrating multiple AI agents is the real challenge',
    tags: ['HTML', 'AI', 'Agents'],
  },
];

export const socialLinks: SocialLink[] = [
  { name: 'Email', icon: '📧', url: `mailto:${SITE_CONFIG.email}`, color: 'var(--color-accent-saffron)' },
  { name: 'GitHub', icon: '🐙', url: SITE_CONFIG.github, color: 'var(--color-accent-cyan)' },
  { name: 'LinkedIn', icon: '💼', url: SITE_CONFIG.linkedin, color: 'var(--color-accent-gold)' },
];

export const visionNotes: VisionNote[] = [
  { text: '💡 What if AI could understand regional languages better?', style: 'sticky-yellow', rotation: -3, speed: 4 },
  { text: '🚀 Building something in stealth rn...', style: 'torn-paper', rotation: 2, speed: 5 },
  { text: 'Rajasthan deserves more builders.', style: 'index-card', rotation: -1, speed: 6 },
  { text: "Entrepreneur = someone who can't stop solving problems 🤷", style: 'sticky-pink', rotation: 4, speed: 7 },
  { text: "currently reading: everything i can get", style: 'notebook', rotation: -2, speed: 8 },
];
