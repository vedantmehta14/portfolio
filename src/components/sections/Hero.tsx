import React from 'react';
import { Download, Linkedin, Github, Code } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/personal';
import Button from '../common/Button';

const Hero: React.FC = () => {
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
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="animate-fade-in">
            <div className="flex flex-col items-center gap-6 mb-8">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src={personalInfo.profileImage} 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-gray-300 mb-2">Hello, I'm</div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-2 text-gradient">
                  {personalInfo.name}
                </h1>
                <p className="text-xl text-gray-200 mb-4">{personalInfo.title}</p>
                
                <div className="flex gap-3 mb-4 justify-center">
                  <Button
                    variant="secondary"
                    icon={Download}
                    onClick={handleDownloadCV}
                  >
                    Download CV
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={handleContactInfo}
                  >
                    Contact Info
                  </Button>
                </div>
                
                <div className="flex gap-4 justify-center">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.icon === 'linkedin' && <Linkedin size={24} />}
                      {link.icon === 'github' && <Github size={24} />}
                      {link.icon === 'leetcode' && <Code size={24} />}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;