export interface Skill {
  name: string;
  category: string;
  icon?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  bio: string;
  profileImage: string;
  cvUrl: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills?: string[];
  image?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
  gpa?: string;
  achievements?: string[];
  image?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface ContactMethod {
  type: 'email' | 'linkedin' | 'github' | 'twitter';
  label: string;
  url: string;
  icon: string;
}
