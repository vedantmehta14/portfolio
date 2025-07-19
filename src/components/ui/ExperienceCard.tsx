import React from 'react';
import { Experience } from '../../types';

interface ExperienceCardProps {
  experience: Experience;
  delay?: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, delay = 0 }) => {
  return (
    <div 
      className="card p-6 animate-fade-in bg-gray-100 dark:bg-gray-800"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4 mb-4">
        {experience.image && (
          <div className="w-16 h-16 flex-shrink-0 rounded-lg p-2 flex items-center justify-center">
            <img 
              src={experience.image} 
              alt={experience.company}
              className="w-full h-full object-contain"
            />
          </div>
        )}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{experience.title}</h3>
            <span className="text-gray-600 dark:text-gray-300 text-sm md:text-base">{experience.period}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">{experience.company}</p>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-200 mb-4">{experience.description}</p>
      {experience.skills && (
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-sm rounded-full text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;