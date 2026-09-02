// Project interface
export interface Project {
  id: string;
  title: string;
  client?: string;
  problemSolution?: string;
  description: string;
  technologies: string[];
  keyFeatures?: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  category: 'Full Stack' | 'Backend' | 'Frontend' | 'Mobile' | 'Desktop' | 'Automation';
  featured?: boolean;
}

// Skill interface
export type SoftwareSkillCategory =
  | 'Programming Languages'
  | 'Frontend / Web'
  | 'Backend'
  | 'Databases'
  | 'Development Tools'
  | 'Development Skills';

export interface SoftwareSkill {
  id: string;
  name: string;
  category: SoftwareSkillCategory;
}

// Virtual assistant / business tools proficiency
export interface ToolGroup {
  id: string;
  group: string;
  items: string[];
}

// Service (development / virtual assistance)
export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'development' | 'virtual-assistance';
}

// Work experience
export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  locationType: 'Remote' | 'On-site';
  startDate: string;
  endDate: string;
  current?: boolean;
  summary: string;
  responsibilities: string[];
}

// Education interface
export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  status?: string;
  description?: string;
  achievements?: string[];
}

// Achievement interface
export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'Academic' | 'Leadership' | 'Recognition' | 'Technical';
}

// Remote work setup
export interface RemoteSetupCategory {
  id: string;
  title: string;
  items: { label: string; value: string }[];
}

// Language
export interface Language {
  id: string;
  name: string;
  level: string;
}

// Contact form interface
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Personal information interface
export interface PersonalInfo {
  name: string;
  title: string;
  heroTagline: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  facebook?: string;
  resumeUrl: string;
}

// Navigation item interface
export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
}