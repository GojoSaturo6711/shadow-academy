import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-lg border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center glow-effect">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">
              Shadow <span className="text-primary">Academy</span>
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('hero')}
              variant="ghost"
              className="bg-transparent text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 glow-effect"
            >
              Home
            </Button>
            <Button 
              onClick={() => scrollToSection('courses')}
              variant="ghost"
              className="bg-transparent text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 glow-effect"
            >
              Courses
            </Button>
            <Button 
              onClick={() => scrollToSection('about')}
              variant="ghost"
              className="bg-transparent text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 glow-effect"
            >
              About
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="ghost"
              className="bg-transparent text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 glow-effect"
            >
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;