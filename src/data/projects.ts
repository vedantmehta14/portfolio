import { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with React and Node.js featuring user authentication, payment processing, and admin dashboard.',
    image: '/images/project1.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/johndoe/ecommerce-platform',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/images/project2.jpg',
    tags: ['React', 'Socket.io', 'PostgreSQL', 'Express', 'Material-UI'],
    demoUrl: 'https://taskapp.example.com',
    githubUrl: 'https://github.com/johndoe/task-manager',
    featured: true,
  },
  {
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard with data visualization, location-based forecasts, and interactive maps.',
    image: '/images/project3.jpg',
    tags: ['React', 'Chart.js', 'OpenWeather API', 'Geolocation', 'PWA'],
    demoUrl: 'https://weather.example.com',
    githubUrl: 'https://github.com/johndoe/weather-dashboard',
    featured: false,
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and TypeScript, featuring smooth animations and dark mode.',
    image: '/images/project4.jpg',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: 'https://portfolio.example.com',
    githubUrl: 'https://github.com/johndoe/portfolio',
    featured: false,
  },
];
