import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { Course } from './CourseCard';

interface CourseModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
}

const CourseModal = ({ course, isOpen, onClose }: CourseModalProps) => {
  if (!isOpen || !course) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-3xl font-bold text-foreground">{course.title}</h2>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="mb-6">
          <img 
            src={course.image} 
            alt={course.title}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Course Description</h3>
            <p className="text-muted-foreground leading-relaxed">{course.detailedDescription}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Skills You'll Learn</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {course.skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Duration</h4>
              <p className="text-muted-foreground">{course.duration}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Difficulty</h4>
              <p className="text-muted-foreground">{course.difficulty}</p>
            </div>
          </div>

          <Button className="btn-hero w-full">
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;