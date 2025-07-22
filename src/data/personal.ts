import { PersonalInfo, SocialLink, NavItem } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Vedant Mehta',
  title: 'Software Developer',
  email: 'mehtavedant8@gmail.com',
  location: 'San Jose, CA',
  bio: `I'm a software developer pursuing my Master's in Software Engineering at San Jose State University, with hands-on experience from 3 internships across web development, cloud infrastructure, and automation. I enjoy building robust, scalable full stack applications using Python and JavaScript, and have worked with modern frameworks and orchestration tools like Kubernetes. I'm currently looking for full-time opportunities starting in June 2026 in software engineering where I can contribute to impactful, high-performance systems. Feel free to take a look at my projects below!`,
  profileImage: '/images/profile.jpeg',
  cvUrl: '/files/Vedant_Mehta_Resume.pdf',
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
