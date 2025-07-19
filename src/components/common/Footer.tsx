import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/personal';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-300 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="text-gray-600 dark:text-gray-300 text-sm">
            <p className="mb-2">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p>
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;