
import { BookOpen, DollarSign, Smartphone, BarChart2 } from "lucide-react";
import Header from "@/components/layout/Header";
import HeroBanner from "@/components/home/HeroBanner";
import StatsCard from "@/components/home/StatsCard";

const Index = () => {
  return (
    <div>
      <HeroBanner />
      
      <Header 
        title="Welcome to Yellow Diamond Academy" 
        subtitle="Track your progress and continue your learning journey"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsCard 
          title="Lessons Completed" 
          value="4"
          subtitle="/ 14"
          progress={29} 
          icon={<BookOpen className="h-5 w-5" />}
        />
        
        <StatsCard 
          title="Average Quiz Score" 
          value="82%"
          progress={82}
          color="bg-orange-500" 
          icon={<BarChart2 className="h-5 w-5" />}
        />
        
        <StatsCard 
          title="Achievement Status" 
          value="Silver"
          subtitle="5 more lessons to Gold"
          progress={65}
          color="bg-amber-500" 
          icon={<Trophy className="h-5 w-5" />}
        />
      </div>
    </div>
  );
};

export default Index;

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
