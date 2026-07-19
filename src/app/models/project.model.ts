export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  role: string;
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  highlights?: string[];
}