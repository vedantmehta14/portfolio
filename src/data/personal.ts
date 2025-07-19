import { PersonalInfo, SocialLink, NavItem } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Vedant Mehta',
  title: 'Software Developer',
  email: 'mehtavedant8@gmail.com',
  location: 'San Jose, CA',
  availability: 'Available',
  bio: `I'm a passionate software developer with over 5 years of experience creating 
        beautiful, functional, and user-friendly web applications. I specialize in 
        modern JavaScript frameworks and have a keen eye for design.`,
  profileImage: '/images/profile.jpeg',
  cvUrl: '/files/Vedant_Mehta_Resume_Summer_Intern.pdf',
};

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/vedantmehta14/',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/vedantmehta14',
    icon: 'github',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/vedantmehta14/',
    icon: 'leetcode',
  },
];

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
