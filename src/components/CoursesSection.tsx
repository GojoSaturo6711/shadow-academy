import { useState } from 'react';
import CourseCard, { Course } from './CourseCard';
import CourseModal from './CourseModal';

// Import course images
import pythonImage from '@/assets/course-python.jpg';
import javascriptImage from '@/assets/course-javascript.jpg';
import htmlcssImage from '@/assets/course-htmlcss.jpg';
import dataScienceImage from '@/assets/course-datascience.jpg';
import marketingImage from '@/assets/course-marketing.jpg';
import canvaImage from '@/assets/course-canva.jpg';
import graphicsImage from '@/assets/course-graphics.jpg';
import writingImage from '@/assets/course-writing.jpg';

const CoursesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const courses: Course[] = [
    {
      id: '1',
      title: 'Python Programming',
      description: 'Learn Python from basics to advanced concepts. Perfect for beginners and those looking to enhance their programming skills.',
      image: pythonImage,
      detailedDescription: 'Master Python programming with this comprehensive course covering everything from basic syntax to advanced topics like web scraping, data analysis, and automation. You\'ll build real projects and gain practical experience.',
      skills: ['Python Syntax', 'Data Structures', 'Object-Oriented Programming', 'Web Scraping', 'Data Analysis', 'Automation Scripts'],
      duration: '8 weeks',
      difficulty: 'Beginner to Intermediate'
    },
    {
      id: '2',
      title: 'JavaScript for Beginners',
      description: 'Master the fundamentals of JavaScript and start building interactive web applications with confidence.',
      image: javascriptImage,
      detailedDescription: 'Dive into JavaScript, the language of the web. Learn modern ES6+ features, DOM manipulation, async programming, and build interactive web applications from scratch.',
      skills: ['JavaScript Fundamentals', 'DOM Manipulation', 'Event Handling', 'Async Programming', 'ES6+ Features', 'API Integration'],
      duration: '6 weeks',
      difficulty: 'Beginner'
    },
    {
      id: '3',
      title: 'HTML & CSS Mastery',
      description: 'Build beautiful, responsive websites with modern HTML5 and CSS3 techniques and best practices.',
      image: htmlcssImage,
      detailedDescription: 'Create stunning websites with semantic HTML5 and modern CSS3. Learn responsive design, Flexbox, Grid, animations, and accessibility best practices.',
      skills: ['Semantic HTML5', 'Modern CSS3', 'Responsive Design', 'Flexbox & Grid', 'CSS Animations', 'Accessibility'],
      duration: '5 weeks',
      difficulty: 'Beginner'
    },
    {
      id: '4',
      title: 'Data Science Basics',
      description: 'Explore data analysis, visualization, and machine learning fundamentals with Python and popular libraries.',
      image: dataScienceImage,
      detailedDescription: 'Enter the world of data science. Learn data cleaning, analysis, visualization with pandas, matplotlib, and seaborn. Introduction to machine learning concepts.',
      skills: ['Data Analysis', 'Data Visualization', 'Pandas & NumPy', 'Statistical Analysis', 'Machine Learning Basics', 'Python for Data Science'],
      duration: '10 weeks',
      difficulty: 'Intermediate'
    },
    {
      id: '5',
      title: 'Digital Marketing Essentials',
      description: 'Learn modern digital marketing strategies including SEO, social media, and content marketing techniques.',
      image: marketingImage,
      detailedDescription: 'Master digital marketing in the modern era. Learn SEO, social media marketing, content strategy, email marketing, and analytics to grow your online presence.',
      skills: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'Email Marketing', 'Google Analytics', 'PPC Advertising'],
      duration: '7 weeks',
      difficulty: 'Beginner to Intermediate'
    },
    {
      id: '6',
      title: 'Canva Design Fundamentals',
      description: 'Create professional designs for social media, presentations, and marketing materials using Canva\'s powerful tools.',
      image: canvaImage,
      detailedDescription: 'Become a Canva pro! Learn to create stunning graphics for social media, presentations, marketing materials, and more. Master templates, typography, and design principles.',
      skills: ['Canva Interface', 'Design Principles', 'Social Media Graphics', 'Presentation Design', 'Brand Consistency', 'Typography'],
      duration: '4 weeks',
      difficulty: 'Beginner'
    },
    {
      id: '7',
      title: 'Graphic Design Principles',
      description: 'Understand core design principles, color theory, and typography to create visually stunning graphics.',
      image: graphicsImage,
      detailedDescription: 'Master the fundamentals of graphic design. Learn color theory, typography, composition, and visual hierarchy. Work with professional design software and create portfolio-worthy projects.',
      skills: ['Design Principles', 'Color Theory', 'Typography', 'Composition', 'Visual Hierarchy', 'Design Software'],
      duration: '8 weeks',
      difficulty: 'Beginner to Intermediate'
    },
    {
      id: '8',
      title: 'Creative Writing Skills',
      description: 'Develop your writing voice and learn techniques for storytelling, character development, and compelling narratives.',
      image: writingImage,
      detailedDescription: 'Unlock your creative potential with this comprehensive writing course. Learn storytelling techniques, character development, plot structure, and find your unique voice.',
      skills: ['Storytelling Techniques', 'Character Development', 'Plot Structure', 'Creative Voice', 'Editing & Revision', 'Genre Writing'],
      duration: '6 weeks',
      difficulty: 'Beginner to Intermediate'
    }
  ];

  const handleLearnMore = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <section id="courses" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
            Our <span className="text-primary">Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in">
            Choose from our expertly crafted courses designed to take your skills to the next level
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div 
              key={course.id} 
              className="fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CourseCard course={course} onLearnMore={handleLearnMore} />
            </div>
          ))}
        </div>
      </div>

      <CourseModal 
        course={selectedCourse}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default CoursesSection;