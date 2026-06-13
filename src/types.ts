export interface Project {
  id: string;
  title: string;
  description: string;
  overview: string;
  contributions: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
  skills?: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date?: string;
}

export interface CodingProfile {
  name: string;
  url: string;
  username?: string;
  score?: string;
  badge?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  scoreLabel: string;
  scoreValue: string;
  details?: string[];
}
