import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/personal';
import Button from '../common/Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Get In Touch</h2>
        <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card p-6 text-center bg-gray-900">
            <Mail className="w-8 h-8 mx-auto mb-4 text-blue-400" />
            <h3 className="font-semibold mb-2 text-white">Email</h3>
            <p className="text-gray-300 text-sm">{personalInfo.email}</p>
          </div>
          
          <div className="card p-6 text-center bg-gray-900">
            <Linkedin className="w-8 h-8 mx-auto mb-4 text-blue-400" />
            <h3 className="font-semibold mb-2 text-white">LinkedIn</h3>
            <p className="text-gray-300 text-sm">Connect with me</p>
          </div>
          
          <div className="card p-6 text-center bg-gray-900">
            <Github className="w-8 h-8 mx-auto mb-4 text-blue-400" />
            <h3 className="font-semibold mb-2 text-white">GitHub</h3>
            <p className="text-gray-300 text-sm">Check out my work</p>
          </div>
        </div>
        
        <div className="flex justify-center gap-4">
          <Button
            variant="primary"
            href={`mailto:${personalInfo.email}`}
            icon={Mail}
          >
            Send Email
          </Button>
          {socialLinks.find(link => link.icon === 'linkedin') && (
            <Button
              variant="secondary"
              href={socialLinks.find(link => link.icon === 'linkedin')?.url}
              icon={Linkedin}
            >
              LinkedIn
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;