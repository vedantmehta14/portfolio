import React from 'react';
import { experiences } from '../../data/experience';
import ExperienceCard from '../ui/ExperienceCard';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Experience</h2>
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={index} 
              experience={experience} 
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;