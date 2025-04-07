
import { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  subtitle?: string;
  progress?: number;
  color?: string;
}

const StatsCard = ({ title, value, icon, subtitle, progress, color = "bg-brand" }: StatsCardProps) => {
  return (
    <div className="border rounded-lg p-5 bg-card">
      <div className="flex justify-between items-start mb-4">
        <p className="text-muted-foreground font-medium">{title}</p>
        <div className="text-muted-foreground">{icon}</div>
      </div>
      
      <div className="mb-2">
        <h3 className="text-3xl font-bold">{value}</h3>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      
      {progress !== undefined && (
        <div className="progress-bar">
          <div className={`progress-fill ${color}`} style={{ width: `${progress}%` }} />
        </div>
      )}
    </div>
  );
};

export default StatsCard;
