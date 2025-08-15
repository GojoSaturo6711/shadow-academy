import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToCourses = () => {
    const element = document.getElementById('courses');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(/lovable-uploads/ae10fcb2-9099-4343-9d40-206b4dd1854e.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
          Unlock Your Skills in the{' '}
          <span className="text-primary glow-effect">Shadows</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 fade-in">
          Master programming, design, and creativity with expert-led courses
        </p>
        
        <Button 
          onClick={scrollToCourses}
          className="btn-hero text-lg px-8 py-4 fade-in"
        >
          Start Learning
        </Button>
      </div>

      {/* Animated particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;