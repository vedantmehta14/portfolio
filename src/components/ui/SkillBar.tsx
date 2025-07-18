import React, { useEffect, useState } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, delay = 0 }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(level);
    }, delay);

    return () => clearTimeout(timer);
  }, [level, delay]);

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-200">{name}</span>
        <span className="text-sm text-gray-300">{level}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2">
        <div 
          className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${animatedLevel}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;