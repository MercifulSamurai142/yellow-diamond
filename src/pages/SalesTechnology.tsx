
import { Key } from "react";
import Header from "@/components/layout/Header";
import LessonItem from "@/components/lessons/LessonItem";
import ChatSupport from "@/components/help/ChatSupport";

const lessons = [
  {
    id: 1,
    title: "Sales Force Automation Tools",
    description: "Transform field force effectiveness with digital tools and automation",
    status: "completed",
    duration: 20
  },
  {
    id: 2,
    title: "Distributor Management Systems",
    description: "Digitize and optimize distributor operations and relationships",
    status: "current",
    duration: 15
  },
  {
    id: 3,
    title: "Data-Driven Decision Making",
    description: "Leverage sales data analytics for strategic and operational decisions",
    status: "locked",
    duration: 15
  },
  {
    id: 4,
    title: "E-commerce & Omnichannel Strategy",
    description: "Develop effective strategies for online sales and omnichannel integration",
    status: "locked",
    duration: 25
  },
  {
    id: 5,
    title: "Modern Trade Excellence",
    description: "Master the unique requirements of selling through modern retail formats",
    status: "locked",
    duration: 20
  }
] as const;

const SalesTechnology = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Header 
          title="Digital Transformation in Sales" 
          subtitle="Leverage technology to enhance sales effectiveness in the Indian FMCG landscape"
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
                module="sales-technology"
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

export default SalesTechnology;
