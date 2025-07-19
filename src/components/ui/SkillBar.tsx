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

// Brand colors for each technology
const colorMap: Record<string, string> = {
  'Python': '#3776ab',
  'Java': '#007396',
  'JavaScript': '#f7df1e',
  'TypeScript': '#3178c6',
  'C++': '#00599c',
  'SQL': '#4479a1',
  'React': '#61dafb',
  'Node.js': '#339933',
  'Express.js': '#ffffff',
  'Django': '#44b78b',
  'Flask': '#ffffff',
  'HTML5': '#e34f26',
  'CSS3': '#1572b6',
  'AWS': '#ff9900',
  'GCP': '#4285f4',
  'Docker': '#2496ed',
  'Kubernetes': '#326ce5',
  'Git': '#f05032',
  'Linux': '#fcc624',
  'Bash': '#4eaa25',
};

const SkillIcon: React.FC<SkillIconProps> = ({ name, delay = 0 }) => {
  const IconComponent = iconMap[name];
  const iconColor = colorMap[name] || '#ffffff';
  
  if (!IconComponent) {
    return null;
  }

  return (
    <div 
      className="group relative inline-block animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-lg hover:scale-110 transition-all duration-200 cursor-pointer">
        <IconComponent className="w-8 h-8" style={{ color: iconColor }} />
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