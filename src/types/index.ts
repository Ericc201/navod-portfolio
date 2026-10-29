export type ProjectCategory = 'all' | 'web' | 'mobile' | 'ai' | 'iot';

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: ('web' | 'mobile' | 'ai' | 'iot')[];
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  image: string;
  liveUrl?: string | null;
  githubUrl?: string | null;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
  icon: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  isCurrent: boolean;
  responsibilities: string[];
  technologies: string[];
  tools: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: 'In Progress' | 'Completed';
  location: string;
  details?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
}

