import { Button } from '@/components/ui/button';

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  detailedDescription: string;
  skills: string[];
  duration: string;
  difficulty: string;
}

interface CourseCardProps {
  course: Course;
  onLearnMore: (course: Course) => void;
}

const CourseCard = ({ course, onLearnMore }: CourseCardProps) => {
  return (
    <div className="course-card slide-up">
      <div className="mb-4">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-foreground">
        {course.title}
      </h3>
      
      <p className="text-muted-foreground mb-4 line-clamp-3">
        {course.description}
      </p>
      
      <Button 
        onClick={() => onLearnMore(course)}
        className="w-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
      >
        Learn More
      </Button>
    </div>
  );
};

export default CourseCard;