
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutGrid, 
  BookOpen, 
  DollarSign, 
  Smartphone, 
  BarChart2, 
  Award, 
  User 
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="w-64 h-screen bg-sidebar fixed left-0 top-0 border-r border-sidebar-border flex flex-col">
      <div className="p-4 pb-6">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <div className="text-brand">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span>YellowDiamond</span>
        </Link>
      </div>
      
      <nav className="flex-1 px-4 space-y-2">
        <Link to="/" className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md ${isActive("/") ? "bg-orange-500 text-white" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"}`}>
          <LayoutGrid size={20} />
          <span>Dashboard</span>
        </Link>
        
        <Link to="/fundamentals" className={`flex items-center gap-3 px-4 py-3 text-sm rounded-md ${isActive("/fundamentals") ? "bg-secondary text-secondary-foreground font-medium" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"}`}>
          <BookOpen size={20} />
          <span>FMCG Fundamentals</span>
        </Link>
        
        <Link to="/sales-finance" className={`flex items-center gap-3 px-4 py-3 text-sm rounded-md ${isActive("/sales-finance") ? "bg-secondary text-secondary-foreground font-medium" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"}`}>
          <DollarSign size={20} />
          <span>Sales Finance</span>
        </Link>
        
        <Link to="/sales-technology" className={`flex items-center gap-3 px-4 py-3 text-sm rounded-md ${isActive("/sales-technology") ? "bg-secondary text-secondary-foreground font-medium" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"}`}>
          <Smartphone size={20} />
          <span>Sales Technology</span>
        </Link>
        
        <Link to="/progress" className={`flex items-center gap-3 px-4 py-3 text-sm rounded-md ${isActive("/progress") ? "bg-secondary text-secondary-foreground font-medium" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"}`}>
          <BarChart2 size={20} />
          <span>Progress</span>
        </Link>
        
        <Link to="/achievements" className={`flex items-center gap-3 px-4 py-3 text-sm rounded-md ${isActive("/achievements") ? "bg-secondary text-secondary-foreground font-medium" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"}`}>
          <Award size={20} />
          <span>Achievements</span>
        </Link>

        <Link to="/profile" className={`flex items-center gap-3 px-4 py-3 text-sm rounded-md ${isActive("/profile") ? "bg-secondary text-secondary-foreground font-medium" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"}`}>
          <User size={20} />
          <span>Update Profile</span>
        </Link>
      </nav>
      
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm font-medium text-orange-800">
            YD
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Team Member</p>
            <p className="text-xs text-muted-foreground">Yellow Diamond</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
