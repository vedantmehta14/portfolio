import React from 'react';
import { Education } from '../../types';

interface EducationCardProps {
  education: Education;
  delay?: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ education, delay = 0 }) => {
  return (
    <div 
      className="card p-6 animate-fade-in bg-gray-100 dark:bg-gray-800 transition-colors duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4 mb-4">
        {education.image && (
          <div className="w-16 h-16 flex-shrink-0 rounded-lg p-2 flex items-center justify-center">
            <img 
              src={education.image} 
              alt={education.institution}
              className="w-full h-full object-contain"
            />
          </div>
        )}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{education.degree}</h3>
            <span className="text-gray-600 dark:text-gray-300 text-sm md:text-base">{education.period}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">{education.institution}</p>
          {education.gpa && (
            <p className="text-gray-600 dark:text-gray-300 mb-2">GPA: {education.gpa}</p>
          )}
        </div>
      </div>
      {education.description && (
        <p className="text-gray-700 dark:text-gray-200 mb-4">{education.description}</p>
      )}
      {education.achievements && education.achievements.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {education.achievements.map((achievement, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-sm rounded-full text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700 transition-colors duration-300"
            >
              {achievement}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationCard; 