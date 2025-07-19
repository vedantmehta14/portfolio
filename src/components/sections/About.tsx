import React from 'react';
import { personalInfo } from '../../data/personal';
import { skills } from '../../data/skills';
import SkillBar from '../ui/SkillBar';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-fade-in">
            <p className="text-gray-200 mb-6">
              {personalInfo.bio}
            </p>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-300">Experience</span>
                <span className="text-white">5+ Years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Location</span>
                <span className="text-white">{personalInfo.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Availability</span>
                <span className="text-green-400">{personalInfo.availability}</span>
              </div>
            </div>
          </div>
          <div className="animate-fade-in animation-delay-200">
            <h3 className="text-xl font-semibold mb-4 text-white">Skills</h3>
            <div className="space-y-3">
              {skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;