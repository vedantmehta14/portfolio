import { Skill } from '../types';

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', category: 'Languages' },
  { name: 'Java', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'TypeScript', category: 'Languages' },
  { name: 'C++', category: 'Languages' },
  { name: 'SQL', category: 'Languages' },

  // Frontend/Backend Frameworks
  { name: 'React', category: 'Frameworks' },
  { name: 'Node.js', category: 'Frameworks' },
  { name: 'Express.js', category: 'Frameworks' },
  { name: 'Django', category: 'Frameworks' },
  { name: 'Flask', category: 'Frameworks' },
  { name: 'HTML5', category: 'Frameworks' },
  { name: 'CSS3', category: 'Frameworks' },

  // Cloud & DevOps
  { name: 'AWS', category: 'Cloud & DevOps' },
  { name: 'GCP', category: 'Cloud & DevOps' },
  { name: 'Docker', category: 'Cloud & DevOps' },
  { name: 'Kubernetes', category: 'Cloud & DevOps' },
  { name: 'Git', category: 'Cloud & DevOps' },
  { name: 'Linux', category: 'Cloud & DevOps' },
  { name: 'Bash', category: 'Cloud & DevOps' },
];

// Group skills by category for display
export const skillsByCategory = skills.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, Skill[]>);
