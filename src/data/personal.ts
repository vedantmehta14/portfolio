import { PersonalInfo, SocialLink, NavItem } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Vedant Mehta',
  title: 'Software Developer',
  email: 'john@example.com',
  location: 'San Francisco, CA',
  availability: 'Available',
  bio: `I'm a passionate software developer with over 5 years of experience creating 
        beautiful, functional, and user-friendly web applications. I specialize in 
        modern JavaScript frameworks and have a keen eye for design.`,
  profileImage: '/images/profile.jpeg',
  cvUrl: '/files/john-doe-cv.pdf',
};

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/johndoe',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/johndoe',
    icon: 'github',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/johndoe',
    icon: 'twitter',
  },
];

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
