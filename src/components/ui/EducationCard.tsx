import React from 'react';
import { Education } from '../../types';

interface EducationCardProps {
  education: Education;
  delay?: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ education, delay = 0 }) => {
  return (
    <div 
      className="card p-6 animate-fade-in bg-gray-900"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">{education.degree}</h3>
        <span className="text-gray-300 text-sm md:text-base">{education.period}</span>
      </div>
      <p className="text-blue-400 mb-2 font-medium">{education.institution}</p>
      {education.gpa && (
        <p className="text-gray-300 mb-2">GPA: {education.gpa}</p>
      )}
      {education.description && (
        <p className="text-gray-200 mb-4">{education.description}</p>
      )}
      {education.achievements && education.achievements.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {education.achievements.map((achievement, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-800 text-sm rounded-full text-gray-200 border border-gray-700"
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