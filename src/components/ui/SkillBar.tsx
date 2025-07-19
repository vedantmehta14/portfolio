import React from 'react';
import {
  SiPython, SiJavascript, SiTypescript, SiCplusplus, SiMysql,
  SiReact, SiNodedotjs, SiExpress, SiDjango, SiFlask, SiHtml5, SiCss3,
  SiAmazon, SiGooglecloud, SiDocker, SiKubernetes, SiGit, SiLinux, SiGnubash,
  SiHelm
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { MdOutlineSpeed, MdBugReport, MdCloud } from 'react-icons/md';
import { useTheme } from '../../contexts/ThemeContext';

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
  'HTML': SiHtml5, // Map HTML to HTML5 icon
  'CSS3': SiCss3,
  'CSS': SiCss3, // Map CSS to CSS3 icon
  'AWS': SiAmazon,
  'GCP': SiGooglecloud,
  'Docker': SiDocker,
  'Kubernetes': SiKubernetes,
  'Kubevirt': SiKubernetes, // Use Kubernetes icon for Kubevirt (related technology)
  'Git': SiGit,
  'Linux': SiLinux,
  'Bash': SiGnubash,
  'Helm': SiHelm,
  'ServiceNow': MdCloud, // Use cloud icon for ServiceNow
  'Agile': MdOutlineSpeed, // Use speed icon for Agile
  'Testing': MdBugReport, // Use bug report icon for Testing
};

// Brand colors for each technology - dark theme
const darkColorMap: Record<string, string> = {
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
  'HTML': '#e34f26',
  'CSS3': '#1572b6',
  'CSS': '#1572b6',
  'AWS': '#ff9900',
  'GCP': '#4285f4',
  'Docker': '#2496ed',
  'Kubernetes': '#326ce5',
  'Kubevirt': '#326ce5', // Same color as Kubernetes
  'Git': '#f05032',
  'Linux': '#fcc624',
  'Bash': '#4eaa25',
  'Helm': '#80b3ff', // Lighter blue for dark mode
  'ServiceNow': '#62d84e',
  'Agile': '#00b4d8',
  'Testing': '#ff6b6b',
};

// Brand colors for light theme - adjust Flask, Express, and Linux
const lightColorMap: Record<string, string> = {
  ...darkColorMap,
  'Express.js': '#000000',  // Black for light mode
  'Flask': '#000000',       // Black for light mode
  'Linux': '#e6a000',       // Darker yellow for light mode (better contrast)
  'Helm': '#0f1689',        // Original dark blue for light mode
  'Agile': '#0077b6',       // Darker blue for light mode
  'Testing': '#d63031',     // Darker red for light mode
};

const SkillIcon: React.FC<SkillIconProps> = ({ name, delay = 0 }) => {
  const { theme } = useTheme();
  const IconComponent = iconMap[name];
  const colorMap = theme === 'dark' ? darkColorMap : lightColorMap;
  const iconColor = colorMap[name] || (theme === 'dark' ? '#ffffff' : '#000000');
  
  // Special handling for Kubevirt - use custom image
  if (name === 'Kubevirt') {
    return (
      <div 
        className="group relative inline-block animate-fade-in"
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="w-12 h-12 flex items-center justify-center rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer">
          <img 
            src="/images/kubevirt.png" 
            alt="Kubevirt"
            className="w-8 h-8 object-contain"
          />
        </div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gray-600 dark:border-gray-700">
          {name}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800 dark:border-t-gray-900 transition-colors duration-300"></div>
        </div>
      </div>
    );
  }
  
  if (!IconComponent) {
    return null;
  }

  return (
    <div 
      className="group relative inline-block animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer">
        <IconComponent className="w-8 h-8" style={{ color: iconColor }} />
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gray-600 dark:border-gray-700">
        {name}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800 dark:border-t-gray-900 transition-colors duration-300"></div>
      </div>
    </div>
  );
};

export default SkillIcon;