
import { ReactNode } from "react";
import { Progress } from "@/components/ui/progress";

interface AchievementCardProps {
  title: string;
  description: string;
  progress: number;
  icon: ReactNode;
  isUnlocked?: boolean;
}

const AchievementCard = ({ title, description, progress, icon, isUnlocked }: AchievementCardProps) => {
  return (
    <div className="border rounded-lg p-5">
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
          isUnlocked ? 'bg-green-100' : 'bg-muted'
        }`}>
          {icon}
        </div>
        
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium">{title}</h3>
            {isUnlocked && (
              <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                Unlocked
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between text-sm mb-2">
        <span className="text-muted-foreground">Progress</span>
        <span className="font-medium">{progress}%</span>
      </div>
      
      <Progress value={progress} className="h-2" />
    </div>
  );
};

export default AchievementCard;
