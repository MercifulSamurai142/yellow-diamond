
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ModuleType = 'fundamentals' | 'sales-finance' | 'sales-technology';

type QuizResult = {
  score: number;
  totalQuestions: number;
  completed: boolean;
  answers: Record<number, string>;
};

type LessonStatus = 'locked' | 'current' | 'completed';

type ProgressState = {
  completedLessons: Record<string, boolean>;
  currentLesson: {
    module: ModuleType;
    id: number;
  } | null;
  quizResults: Record<ModuleType, QuizResult>;
  
  markLessonComplete: (module: ModuleType, id: number) => void;
  getLessonStatus: (module: ModuleType, id: number) => LessonStatus;
  setQuizResult: (module: ModuleType, result: QuizResult) => void;
  getOverallProgress: () => number;
  getModuleProgress: (module: ModuleType) => number;
  getModuleQuizScore: (module: ModuleType) => number;
};

const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedLessons: {},
      currentLesson: null,
      quizResults: {
        'fundamentals': {
          score: 0,
          totalQuestions: 5,
          completed: false,
          answers: {}
        },
        'sales-finance': {
          score: 0,
          totalQuestions: 5,
          completed: false,
          answers: {}
        },
        'sales-technology': {
          score: 0,
          totalQuestions: 5,
          completed: false,
          answers: {}
        }
      },
      
      markLessonComplete: (module, id) => {
        const key = `${module}-${id}`;
        const completedLessons = { ...get().completedLessons, [key]: true };
        
        // Find the next lesson to mark as current
        let nextId = id + 1;
        const maxLessons = {
          'fundamentals': 5,
          'sales-finance': 4,
          'sales-technology': 5
        };
        
        // If we've completed all lessons in this module, don't set a current lesson
        let currentLesson = null;
        if (nextId <= maxLessons[module]) {
          currentLesson = { module, id: nextId };
        }
        
        set({ completedLessons, currentLesson });
      },
      
      getLessonStatus: (module, id) => {
        const key = `${module}-${id}`;
        const { completedLessons, currentLesson } = get();
        
        if (completedLessons[key]) return 'completed';
        
        // If this is the current lesson
        if (currentLesson && currentLesson.module === module && currentLesson.id === id) {
          return 'current';
        }
        
        // Check if any previous lesson is not completed
        for (let i = 1; i < id; i++) {
          const prevKey = `${module}-${i}`;
          if (!completedLessons[prevKey]) {
            return 'locked';
          }
        }
        
        // If no current lesson is set and all previous are completed, make this one current
        if (!currentLesson) {
          set({ currentLesson: { module, id } });
          return 'current';
        }
        
        return 'locked';
      },
      
      setQuizResult: (module, result) => {
        const quizResults = {
          ...get().quizResults,
          [module]: result
        };
        set({ quizResults });
      },
      
      getOverallProgress: () => {
        const { completedLessons } = get();
        const totalLessons = 14; // 5 + 4 + 5
        return Object.keys(completedLessons).length / totalLessons * 100;
      },
      
      getModuleProgress: (module) => {
        const { completedLessons } = get();
        const maxLessons = {
          'fundamentals': 5,
          'sales-finance': 4,
          'sales-technology': 5
        };
        
        let count = 0;
        for (let i = 1; i <= maxLessons[module]; i++) {
          const key = `${module}-${i}`;
          if (completedLessons[key]) count++;
        }
        
        return count / maxLessons[module] * 100;
      },
      
      getModuleQuizScore: (module) => {
        const { quizResults } = get();
        return quizResults[module].completed ? (quizResults[module].score / quizResults[module].totalQuestions * 100) : 0;
      }
    }),
    {
      name: 'yellow-diamond-progress'
    }
  )
);

export default useProgressStore;
