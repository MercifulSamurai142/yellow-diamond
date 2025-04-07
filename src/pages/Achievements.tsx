
import { Award, Clock, Medal, Star, Zap } from "lucide-react";
import Header from "@/components/layout/Header";
import AchievementCard from "@/components/achievements/AchievementCard";
import { Progress } from "@/components/ui/progress";

// Icons
const Trophy = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
  </svg>
);

const DollarIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const achievements = [
  {
    title: "Fast Learner",
    description: "Complete 5 lessons in a single day",
    progress: 100,
    icon: <Zap className="h-6 w-6 text-amber-500" />,
    isUnlocked: true
  },
  {
    title: "Knowledge Explorer",
    description: "Complete all lessons in a module",
    progress: 65,
    icon: <Medal className="h-6 w-6 text-blue-500" />
  },
  {
    title: "Perfect Score",
    description: "Get 100% on a quiz",
    progress: 85,
    icon: <Star className="h-6 w-6 text-purple-500" />
  },
  {
    title: "FMCG Expert",
    description: "Complete all modules with an average score of 80% or higher",
    progress: 40,
    icon: <Award className="h-6 w-6 text-green-500" />
  },
  {
    title: "Consistent Learner",
    description: "Log in and complete at least one lesson for 5 consecutive days",
    progress: 80,
    icon: <Clock className="h-6 w-6 text-red-500" />
  },
  {
    title: "Finance Wizard",
    description: "Complete the Sales Finance module with a score of 90% or higher",
    progress: 30,
    icon: <DollarIcon className="h-6 w-6 text-green-500" />
  }
];

const Achievements = () => {
  return (
    <div>
      <Header 
        title="Achievements" 
        subtitle="Track your milestones and earn recognition for your learning progress"
      />
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="bg-amber-100 p-3 rounded-lg">
            <Trophy className="h-8 w-8 text-amber-500" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2">Your Achievement Progress</h3>
            <p className="mb-4">You've unlocked 1 out of 6 achievements. Keep learning to earn more badges!</p>
            
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium mb-1">Overall Completion</p>
                <Progress value={17} className="h-2" />
              </div>
              <p className="font-bold ml-4">17%</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <AchievementCard 
            key={index}
            title={achievement.title}
            description={achievement.description}
            progress={achievement.progress}
            icon={achievement.icon}
            isUnlocked={achievement.isUnlocked}
          />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
