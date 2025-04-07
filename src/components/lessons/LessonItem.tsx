
import { Check, Lock, Play } from "lucide-react";
import { Link } from "react-router-dom";

interface LessonItemProps {
  id: number;
  title: string;
  description: string;
  status: "completed" | "current" | "locked";
  duration: number;
  module: string;
}

const LessonItem = ({ id, title, description, status, duration, module }: LessonItemProps) => {
  const getPath = () => {
    if (status === "locked") return "#";
    return `/lessons/${module}/${id}`;
  };

  return (
    <Link 
      to={getPath()} 
      className={`block transition-all duration-200 hover:shadow-md ${status === "locked" ? "cursor-not-allowed opacity-70" : "hover:translate-y-[-2px]"}`}
    >
      <div className={`lesson-card ${status === 'current' ? 'border-brand' : ''}`}>
        <div className="flex items-start gap-3">
          <div className={`lesson-status-icon ${
            status === 'completed' ? 'lesson-status-completed' : 
            status === 'locked' ? 'lesson-status-locked' : 
            'lesson-status-current'
          }`}>
            {status === 'completed' ? <Check size={16} /> : 
             status === 'locked' ? <Lock size={16} /> : 
             <Play size={16} />}
          </div>
          
          <div className="flex-1">
            <h3 className="font-medium mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground mb-2">{description}</p>
            
            <div className="flex items-center text-xs text-muted-foreground">
              <ClockIcon className="h-3 w-3 mr-1" />
              <span>{duration} min</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LessonItem;

const ClockIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);
