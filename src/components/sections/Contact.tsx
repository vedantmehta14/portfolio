import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/personal';

const Contact: React.FC = () => {
  const getContactUrl = (type: string) => {
    switch (type) {
      case 'email':
        return `mailto:${personalInfo.email}`;
      case 'linkedin':
        return socialLinks.find(link => link.icon === 'linkedin')?.url || '';
      case 'github':
        return socialLinks.find(link => link.icon === 'github')?.url || '';
      default:
        return '';
    }
  };

  return (
    <section id="contact" className="section-padding bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Get In Touch</h2>
        <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href={getContactUrl('email')}
            className="card p-6 text-center bg-gray-800 hover:bg-gray-700 transition-colors duration-200 block"
          >
            <Mail className="w-8 h-8 mx-auto mb-4 text-gray-300" />
            <h3 className="font-semibold mb-2 text-white">Email</h3>
            <p className="text-gray-300 text-sm">{personalInfo.email}</p>
          </a>
          
          <a
            href={getContactUrl('linkedin')}
            target="_blank"
            rel="noopener noreferrer"
            className="card p-6 text-center bg-gray-800 hover:bg-gray-700 transition-colors duration-200 block"
          >
            <Linkedin className="w-8 h-8 mx-auto mb-4 text-gray-300" />
            <h3 className="font-semibold mb-2 text-white">LinkedIn</h3>
            <p className="text-gray-300 text-sm">Connect with me</p>
          </a>
          
          <a
            href={getContactUrl('github')}
            target="_blank"
            rel="noopener noreferrer"
            className="card p-6 text-center bg-gray-800 hover:bg-gray-700 transition-colors duration-200 block"
          >
            <Github className="w-8 h-8 mx-auto mb-4 text-gray-300" />
            <h3 className="font-semibold mb-2 text-white">GitHub</h3>
            <p className="text-gray-300 text-sm">Check out my work</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;