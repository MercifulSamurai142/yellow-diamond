
import { Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <div className="rounded-xl overflow-hidden mb-10 animate-fade-in">
      <div className="bg-yellow-gradient p-8 md:p-12 relative">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <BookIcon className="h-6 w-6 text-white" />
            <h2 className="text-lg font-medium text-white">Yellow Diamond Academy</h2>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Master FMCG Sales &<br />
            Distribution
          </h1>
          
          <p className="text-white/90 text-lg mb-8 max-w-xl">
            Build your expertise in the fast-moving consumer goods industry 
            with our comprehensive training program for Yellow Diamond's 
            growing sales team.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-white text-orange-800 hover:bg-white/90 flex items-center gap-2">
              <Link to="/fundamentals">
                <BookOpenIcon className="h-4 w-4" />
                Start Learning
              </Link>
            </Button>
            
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              View Syllabus
            </Button>
          </div>
        </div>
        
        <div className="hidden lg:block absolute right-12 bottom-0 w-64 h-64">
          <div className="w-full h-full rounded-full bg-white/20 flex items-center justify-center">
            <Award className="h-32 w-32 text-white" />
          </div>
        </div>
      </div>
      
      <div className="bg-accent p-6 flex flex-wrap gap-y-6 justify-around">
        <div className="flex items-center gap-3">
          <BookOpenIcon className="h-6 w-6 text-orange-600" />
          <div>
            <p className="font-medium">15+ Modules</p>
            <p className="text-sm text-muted-foreground">Comprehensive Coverage</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <AwardIcon className="h-6 w-6 text-orange-600" />
          <div>
            <p className="font-medium">Certifications</p>
            <p className="text-sm text-muted-foreground">Industry Recognized</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <UsersIcon className="h-6 w-6 text-orange-600" />
          <div>
            <p className="font-medium">Expert Mentors</p>
            <p className="text-sm text-muted-foreground">Personalized Guidance</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <BarChartIcon className="h-6 w-6 text-orange-600" />
          <div>
            <p className="font-medium">Performance Tracking</p>
            <p className="text-sm text-muted-foreground">Real-time Analytics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

// Icons for better code reuse
const BookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const BookOpenIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const AwardIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const BarChartIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="20" x2="12" y2="10"></line>
    <line x1="18" y1="20" x2="18" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="16"></line>
  </svg>
);
