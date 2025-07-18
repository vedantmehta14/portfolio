import React from 'react';
import { Menu, Download, Linkedin, Github } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/personal';
import Button from '../common/Button';

const MobileCard: React.FC = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = personalInfo.cvUrl;
    link.download = `${personalInfo.name.replace(' ', '-')}-CV.pdf`;
    link.click();
  };

  const handleContactInfo = () => {
    window.location.href = `mailto:${personalInfo.email}`;
  };

  return (
    <div className="bg-gray-900 rounded-3xl p-6 w-80 border border-gray-800 shadow-2xl animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <div className="text-lg font-semibold text-white">{personalInfo.name}</div>
        <Menu className="text-gray-300" size={20} />
      </div>
      
      <div className="text-center mb-6">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
          <img 
            src={personalInfo.profileImage} 
            alt={personalInfo.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-sm text-gray-300 mb-1">Hello, I'm</div>
        <div className="text-xl font-bold mb-1 text-white">{personalInfo.name}</div>
        <div className="text-sm text-gray-300 mb-4">{personalInfo.title}</div>
        
        <div className="flex gap-3 justify-center mb-4">
          <Button
            size="sm"
            variant="secondary"
            icon={Download}
            onClick={handleDownloadCV}
          >
            Download CV
          </Button>
          <Button
            size="sm"
            variant="primary"
            onClick={handleContactInfo}
          >
            Contact Info
          </Button>
        </div>
        
        <div className="flex justify-center gap-4">
          {socialLinks.slice(0, 2).map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {link.icon === 'linkedin' && <Linkedin size={20} />}
              {link.icon === 'github' && <Github size={20} />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileCard;