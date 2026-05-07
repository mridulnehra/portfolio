export interface Skill {
  name: string;
  icon: string;
  x: number;
  y: number;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  homepage?: string;
  github: string;
  status?: 'live' | 'building' | 'experiment';
}

export interface AIProject {
  name: string;
  description: string;
  status: 'live' | 'building' | 'experiment';
  finding: string;
  tags: string[];
  link?: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  color: string;
}

export interface VisionNote {
  text: string;
  style: 'sticky-yellow' | 'torn-paper' | 'index-card' | 'sticky-pink' | 'notebook';
  rotation: number;
  speed: number;
}
