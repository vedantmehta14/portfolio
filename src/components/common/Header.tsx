import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, personalInfo } from '../../data/personal';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href.replace('#', ''));
    setIsMenuOpen(false);
  };

  const handleNameClick = () => {
    scrollToSection('hero');
  };

  return (
    <>
      {/* Mobile Navigation Backdrop - positioned outside header */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-[9999] md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      {/* Mobile Navigation Menu - positioned outside header */}
      {isMenuOpen && (
        <div className="fixed top-16 left-4 right-4 z-[10000] md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 shadow-2xl transition-colors duration-300">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300 rounded-md"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md' 
            : 'bg-white/50 dark:bg-black/50'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:grid md:grid-cols-3 md:gap-4">
            {/* Left: Logo */}
            <div className="flex justify-start">
              <button 
                onClick={handleNameClick}
                className="text-xl font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
              >
                {personalInfo.name}
              </button>
            </div>

            {/* Center: Desktop Navigation */}
            <nav className="hidden md:flex justify-center">
              <div className="flex items-center space-x-1 lg:space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer relative z-10"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>

            {/* Right: Theme Toggle and Mobile menu button */}
            <div className="flex justify-end items-center space-x-2">
              <div className="relative z-0">
                <ThemeToggle />
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white p-2 transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;