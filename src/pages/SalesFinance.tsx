
import { Key } from "react";
import Header from "@/components/layout/Header";
import LessonItem from "@/components/lessons/LessonItem";
import ChatSupport from "@/components/help/ChatSupport";

const lessons = [
  {
    id: 1,
    title: "Trade Schemes Optimization",
    description: "Design effective trade schemes that drive sales without eroding margins",
    status: "completed",
    duration: 20
  },
  {
    id: 2,
    title: "ROI-Driven Marketing Investments",
    description: "Optimize Green Wave's marketing spend for maximum impact and returns",
    status: "current",
    duration: 25
  },
  {
    id: 3,
    title: "Channel Profitability Analysis",
    description: "Analyze and optimize profitability across different sales channels",
    status: "locked",
    duration: 20
  },
  {
    id: 4,
    title: "Sales Team Incentive Design",
    description: "Create effective incentive systems that drive the right sales behaviors",
    status: "locked",
    duration: 15
  }
] as const;

const SalesFinance = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Header 
          title="Sales Finance & Trade Marketing" 
          subtitle="Master the financial and trade marketing aspects of the Indian snacks business"
        />
        
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4">Lessons</h2>
          
          <div className="space-y-4">
            {lessons.map((lesson) => (
              <LessonItem
                key={lesson.id as Key}
                id={lesson.id}
                title={lesson.title}
                description={lesson.description}
                status={lesson.status}
                duration={lesson.duration}
                module="sales-finance"
              />
            ))}
          </div>
        </div>
      </div>
      
      <div>
        <ChatSupport />
      </div>
    </div>
  );
};

export default SalesFinance;
