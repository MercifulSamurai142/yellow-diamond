
import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useProgressStore from '@/store/useProgressStore';
import { getLessonContent } from '@/data/lessonContent';

const maxLessons = {
  'fundamentals': 5,
  'sales-finance': 4,
  'sales-technology': 5
};

const LessonPage = () => {
  const { module, id } = useParams();
  const navigate = useNavigate();
  const markLessonComplete = useProgressStore(state => state.markLessonComplete);
  const getLessonStatus = useProgressStore(state => state.getLessonStatus);
  
  const lessonId = parseInt(id || '1');
  const moduleType = module as 'fundamentals' | 'sales-finance' | 'sales-technology';
  
  // Get the lesson content
  const lessonContent = getLessonContent(moduleType, lessonId);
  
  if (!lessonContent) {
    return <div>Lesson not found</div>;
  }
  
  // Get the status to know if user can access this lesson
  const status = getLessonStatus(moduleType, lessonId);
  
  useEffect(() => {
    // If lesson is locked, navigate back to module page
    if (status === 'locked') {
      navigate(`/${module}`);
    }
  }, [status, navigate, module]);
  
  const handleNextLesson = () => {
    // Mark current lesson as complete
    markLessonComplete(moduleType, lessonId);
    
    // Navigate to the next lesson or quiz
    
    
    if (lessonId < maxLessons[moduleType]) {
      navigate(`/lessons/${module}/${lessonId + 1}`);
    } else {
      // Navigate to the quiz if this is the last lesson
      navigate(`/quiz/${module}`);
    }
  };
  
  // Get correct module display name
  const moduleDisplayName = {
    'fundamentals': 'FMCG Fundamentals',
    'sales-finance': 'Sales Finance',
    'sales-technology': 'Sales Technology'
  }[moduleType];
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Link to={`/${module}`} className="flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>Back to lessons</span>
        </Link>
        
        <div className="flex items-center text-brand">
          <Check className="h-5 w-5 mr-2" />
          <span>Completed</span>
        </div>
      </div>
      
      <div>
        <h1 className="text-2xl font-bold mb-2">{lessonContent.title}</h1>
        <p className="text-muted-foreground mb-6">{lessonContent.description}</p>
        
        <div className="flex flex-col space-y-2 mb-6">
          <div className="text-sm">
            <span className="font-medium">Application Area:</span> {lessonContent.applicationArea}
          </div>
          <div className="text-sm">
            <span className="font-medium">Yellow Diamond Relevance:</span> {lessonContent.relevance}
          </div>
        </div>
        
        <div className="bg-white border rounded-lg p-6 mb-8 space-y-4">
          {lessonContent.content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">{paragraph}</p>
          ))}
        </div>
        
        <div className="flex justify-end">
          {lessonId < maxLessons[moduleType] ? (
            <Button onClick={handleNextLesson} className="flex items-center gap-2">
              Next Lesson <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleNextLesson} className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600">
              Take Quiz <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
