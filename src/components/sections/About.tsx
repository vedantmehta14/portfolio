import React from 'react';
import { personalInfo } from '../../data/personal';
import { skills } from '../../data/skills';
import SkillIcon from '../ui/SkillBar';
import { Skill } from '../../types';

const About: React.FC = () => {
  // Get all skills in a single array (first 20 skills)
  const allSkills = skills.slice(0, 20);
  
  // For mobile: 4 rows of 5, for desktop: 2 rows of 10
  const mobileRows = [
    allSkills.slice(0, 5),   // First row: skills 0-4
    allSkills.slice(5, 10),  // Second row: skills 5-9
    allSkills.slice(10, 15), // Third row: skills 10-14
    allSkills.slice(15, 20)  // Fourth row: skills 15-19
  ];
  
  const desktopRows = [
    allSkills.slice(0, 10),  // First row: skills 0-9
    allSkills.slice(10, 20)  // Second row: skills 10-19
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">About Me</h2>
        
        {/* Bio Text */}
        <div className="animate-fade-in mb-8">
          <p className="text-gray-700 dark:text-gray-200 mb-6 text-center">
            {personalInfo.bio}
          </p>
        </div>

                {/* Location */}
        <div className="animate-fade-in animation-delay-100 mb-8">
          <div className="flex justify-center items-center gap-2">
            <span className="font-semibold text-gray-800 dark:text-gray-200">Location:</span>
            <span className="text-gray-900 dark:text-white font-medium">{personalInfo.location}</span>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="animate-fade-in animation-delay-200">
          <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">Technical Skills</h3>
          
          {/* Desktop Layout - 2 rows of 10 */}
          <div className="hidden md:block">
            {desktopRows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-center mb-4">
                <div className="flex flex-wrap gap-3 justify-center">
                  {row.map((skill: Skill, index: number) => (
                    <SkillIcon
                      key={skill.name}
                      name={skill.name}
                      delay={rowIndex * 500 + index * 50}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Layout - 4 rows of 5 */}
          <div className="md:hidden">
            {mobileRows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-center mb-4">
                <div className="flex flex-wrap gap-3 justify-center">
                  {row.map((skill: Skill, index: number) => (
                    <SkillIcon
                      key={skill.name}
                      name={skill.name}
                      delay={rowIndex * 250 + index * 50}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;