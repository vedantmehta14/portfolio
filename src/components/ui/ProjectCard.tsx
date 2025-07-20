import React from 'react';
import { Github } from 'lucide-react';
import { Project } from '../../types';
import SkillIcon from './SkillBar';

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay = 0 }) => {
  return (
    <div 
      className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-700 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden pt-6 px-6">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-64 object-contain bg-gray-100 dark:bg-gray-800 rounded-lg"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-200 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-3 text-gray-800 dark:text-gray-200">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <SkillIcon
                key={tech}
                name={tech}
                delay={index * 50}
              />
            ))}
          </div>
        </div>
        
        <div className="flex gap-3">
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-900 dark:text-white text-sm font-medium rounded-lg transition-colors duration-300"
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;