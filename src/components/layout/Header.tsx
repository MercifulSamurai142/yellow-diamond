
import { Bell, Search } from "lucide-react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
      </div>
      
      <div className="flex items-center mt-4 md:mt-0 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-9 py-2 pr-4 rounded-full bg-background border border-input focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        
        <button className="relative">
          <Bell className="h-6 w-6 text-muted-foreground" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            1
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
