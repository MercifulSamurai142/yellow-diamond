
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import useProgressStore from '@/store/useProgressStore';
import { toast } from 'sonner';
import { getQuizQuestions } from '@/data/quizData';

const QuizPage = () => {
  const { module } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const moduleType = module as 'fundamentals' | 'sales-finance' | 'sales-technology';
  const questions = getQuizQuestions(moduleType);
  
  const setQuizResult = useProgressStore(state => state.setQuizResult);
  
  // Handle answer selection
  const handleSelectAnswer = (answer: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answer
    });
  };
  
  // Handle next question
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score
      const correctAnswers = questions.filter(
        (q, index) => selectedAnswers[index] === q.correctAnswer
      ).length;
      
      // Save results
      setQuizResult(moduleType, {
        score: correctAnswers,
        totalQuestions: questions.length,
        completed: true,
        answers: selectedAnswers
      });
      
      setQuizCompleted(true);
      toast.success("Quiz completed!");
    }
  };
  
  // Get the current question
  const question = questions[currentQuestion];
  
  // Calculate score at the end
  const calculateScore = () => {
    const correctAnswers = questions.filter(
      (q, index) => selectedAnswers[index] === q.correctAnswer
    ).length;
    return {
      correct: correctAnswers,
      total: questions.length,
      percentage: Math.round((correctAnswers / questions.length) * 100)
    };
  };
  
  // If quiz is completed, show results
  if (quizCompleted) {
    const score = calculateScore();
    
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="w-full max-w-2xl text-center">
          <div className="relative mb-10">
            <div className="text-center py-12">
              <div className="bg-orange-100 text-orange-500 text-6xl font-bold rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6">
                {score.percentage}%
              </div>
              <h1 className="text-2xl font-bold mb-4">Quiz Completed!</h1>
              <p className="text-muted-foreground mb-6">
                {score.percentage >= 80 
                  ? "Great job! You've mastered this module."
                  : score.percentage >= 60
                    ? "Good job! You've grasped most of the key concepts."
                    : "You've completed the quiz. Consider reviewing the material again."}
              </p>
              
              <div className="text-lg mb-8">
                You answered <span className="font-bold">{score.correct}</span> out of <span className="font-bold">{score.total}</span> questions correctly.
              </div>
              
              <Button 
                onClick={() => navigate('/progress')} 
                className="px-6"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Get correct module display name
  const moduleDisplayName = {
    'fundamentals': 'FMCG Fundamentals',
    'sales-finance': 'Sales Finance',
    'sales-technology': 'Sales Technology'
  }[moduleType];
  
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <Link to={`/${module}`} className="flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>Back to lessons</span>
        </Link>
        
        <div className="text-sm text-muted-foreground">
          Question {currentQuestion + 1} of {questions.length}
        </div>
      </div>
      
      <div>
        <h1 className="text-2xl font-bold mb-8">{question.question}</h1>
        
        <div className="space-y-3 mb-8">
          {question.options.map((option, index) => (
            <div 
              key={index}
              onClick={() => handleSelectAnswer(option)}
              className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 hover:border-orange-300 ${
                selectedAnswers[currentQuestion] === option 
                  ? 'border-orange-500 bg-orange-50' 
                  : 'border-border'
              }`}
            >
              {option}
            </div>
          ))}
        </div>
        
        <div className="flex justify-end">
          <Button 
            onClick={handleNextQuestion}
            disabled={!selectedAnswers[currentQuestion]}
            className="flex items-center gap-2"
          >
            {currentQuestion < questions.length - 1 ? (
              <>Next Question <ArrowRight className="h-4 w-4" /></>
            ) : (
              <>Complete Quiz <ArrowRight className="h-4 w-4" /></>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
