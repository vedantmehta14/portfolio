import React from 'react';
import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;