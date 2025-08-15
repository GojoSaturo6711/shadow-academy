import { Lightbulb, Users, Clock } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Cutting-edge curriculum designed for the modern world'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Mentors',
      description: 'Learn from industry professionals with real-world experience'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Flexible Learning',
      description: 'Study at your own pace with lifetime access to content'
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
            About <span className="text-primary">Shadow Academy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in">
            Shadow Academy is dedicated to empowering learners through cutting-edge skills and knowledge. 
            We believe in learning that happens in the shadows - deep, focused, and transformative. 
            Our mission is to provide accessible, high-quality education that prepares you for the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 glow-effect">
                <div className="text-primary">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;