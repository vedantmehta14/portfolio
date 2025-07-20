import { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'Cloud-IDE',
    description: 'Built a secure, collaborative cloud IDE with real-time multi-user code editing, AI-powered coding suggestions, and seamless WebSocket-based interaction. Developed and deployed microservices on Google Cloud using Docker and GKE, enabling scalable, isolated environments for up to 100 concurrent users.',
    image: '/images/cloud-ide.jpg',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'WebSocket', 'AWS', 'GCP', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com/vedantmehta14/Cloud-IDE',
  },
  {
    title: 'Docu-LM',
    description: 'Built a document retrieval system using RAG architecture with image-based page-level indexing to preserve visual context. Developed a React interface with a GPT-4-powered chatbot that intelligently answers user queries by analyzing text, charts, and graphs from uploaded documents.',
    image: '/images/docu-lm.jpg',
    techStack: ['ColPali', 'RAG', 'OpenAI GPT-4', 'React', 'Node.js', 'Flask'],
    githubUrl: 'https://github.com/vedantmehta14/Docu-LM',
  },
];
