import React from 'react';
import { education } from '../../data/education';
import EducationCard from '../ui/EducationCard';

const Education: React.FC = () => {
  return (
    <section id="education" className="section-padding bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <EducationCard 
              key={index} 
              education={edu} 
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 