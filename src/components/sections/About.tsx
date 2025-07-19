import React from 'react';
import { personalInfo } from '../../data/personal';
import { skillsByCategory } from '../../data/skills';
import SkillIcon from '../ui/SkillBar';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-fade-in">
            <p className="text-gray-700 dark:text-gray-200 mb-6">
              {personalInfo.bio}
            </p>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Experience</span>
                <span className="text-gray-900 dark:text-white">5+ Years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Location</span>
                <span className="text-gray-900 dark:text-white">{personalInfo.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Availability</span>
                <span className="text-green-600 dark:text-green-400">{personalInfo.availability}</span>
              </div>
            </div>
          </div>
          <div className="animate-fade-in animation-delay-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Technical Skills</h3>
            <div className="space-y-6">
              {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {categorySkills.map((skill, index) => (
                      <SkillIcon
                        key={skill.name}
                        name={skill.name}
                        delay={categoryIndex * 200 + index * 50}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;