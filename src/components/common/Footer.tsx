import React from 'react';
import { personalInfo } from '../../data/personal';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 section-padding">
      <div className="container text-center text-gray-300">
        <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;