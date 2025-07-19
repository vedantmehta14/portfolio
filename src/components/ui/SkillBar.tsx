import React from 'react';
import {
  SiPython, SiJavascript, SiTypescript, SiCplusplus, SiMysql,
  SiReact, SiNodedotjs, SiExpress, SiDjango, SiFlask, SiHtml5, SiCss3,
  SiAmazon, SiGooglecloud, SiDocker, SiKubernetes, SiGit, SiLinux, SiGnubash
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';

interface SkillIconProps {
  name: string;
  delay?: number;
}

// Icon mapping for technologies
const iconMap: Record<string, any> = {
  'Python': SiPython,
  'Java': DiJava,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'C++': SiCplusplus,
  'SQL': SiMysql,
  'React': SiReact,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'Django': SiDjango,
  'Flask': SiFlask,
  'HTML5': SiHtml5,
  'CSS3': SiCss3,
  'AWS': SiAmazon,
  'GCP': SiGooglecloud,
  'Docker': SiDocker,
  'Kubernetes': SiKubernetes,
  'Git': SiGit,
  'Linux': SiLinux,
  'Bash': SiGnubash,
};

const SkillIcon: React.FC<SkillIconProps> = ({ name, delay = 0 }) => {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    return null;
  }

  return (
    <div 
      className="group relative inline-block animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-colors duration-200 cursor-pointer">
        <IconComponent className="w-6 h-6 text-gray-200" />
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-gray-700">
        {name}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
      </div>
    </div>
  );
};

export default SkillIcon;