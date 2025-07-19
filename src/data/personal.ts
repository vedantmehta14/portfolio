import { PersonalInfo, SocialLink, NavItem } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Vedant Mehta',
  title: 'Software Developer',
  email: 'mehtavedant8@gmail.com',
  location: 'San Jose, CA',
  bio: `I'm a passionate software developer currently pursuing my Masters at SJSU, with experience from 3 internships. I build beautiful, user-friendly full stack web applications and have hands-on expertise in cloud infrastructure and orchestration tools like Kubernetes. I work primarily with Python and JavaScript.`,
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
