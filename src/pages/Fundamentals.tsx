
import { Key } from "react";
import Header from "@/components/layout/Header";
import LessonItem from "@/components/lessons/LessonItem";
import ChatSupport from "@/components/help/ChatSupport";

const lessons = [
  {
    id: 1,
    title: "Retailer Segmentation & Targeting",
    description: "Identify and prioritize retail outlets for maximum reach and ROI in snacks distribution",
    status: "completed",
    duration: 15
  },
  {
    id: 2,
    title: "Route to Market Optimization",
    description: "Design efficient distribution channels for Green Wave's diverse product portfolio",
    status: "completed",
    duration: 20
  },
  {
    id: 3,
    title: "Winning at the Point of Sale",
    description: "Create compelling visibility and merchandising strategies for snack brands",
    status: "current",
    duration: 15
  },
  {
    id: 4,
    title: "Distributor Management Excellence",
    description: "Build and nurture a high-performing distributor network for Green Wave",
    status: "locked",
    duration: 25
  },
  {
    id: 5,
    title: "Rural Market Penetration",
    description: "Strategies to capture the vast potential of India's rural snack market",
    status: "locked",
    duration: 20
  }
] as const;

const Fundamentals = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Header 
          title="GT & MT Sales Excellence for Snacks" 
          subtitle="Master the art of General Trade & Modern Trade sales in the competitive Indian snacks market"
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
                module="fundamentals"
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

export default Fundamentals;
