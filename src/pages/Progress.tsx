
import { BarChart, BarChart2, BookOpen, DollarSign, Smartphone } from "lucide-react";
import Header from "@/components/layout/Header";
import StatsCard from "@/components/home/StatsCard";
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import useProgressStore from "@/store/useProgressStore";

const Progress = () => {
  const getOverallProgress = useProgressStore(state => state.getOverallProgress);
  const getModuleProgress = useProgressStore(state => state.getModuleProgress);
  const getModuleQuizScore = useProgressStore(state => state.getModuleQuizScore);
  
  const overallProgress = Math.round(getOverallProgress());
  
  const fundamentalsProgress = Math.round(getModuleProgress('fundamentals'));
  const salesFinanceProgress = Math.round(getModuleProgress('sales-finance'));
  const salesTechProgress = Math.round(getModuleProgress('sales-technology'));
  
  const fundamentalsQuizScore = Math.round(getModuleQuizScore('fundamentals'));
  const salesFinanceQuizScore = Math.round(getModuleQuizScore('sales-finance'));
  const salesTechQuizScore = Math.round(getModuleQuizScore('sales-technology'));
  
  const totalCompletedLessons = Math.round(overallProgress * 14 / 100);
  
  const progressData = [
    {
      name: "Completion Rate",
      value: overallProgress,
      subtitle: `${totalCompletedLessons} of 14 lessons completed`,
      icon: <BookOpen className="h-5 w-5" />,
      color: "bg-brand"
    },
    {
      name: "FMCG Fundamentals",
      value: fundamentalsProgress,
      subtitle: `Quiz score: ${fundamentalsQuizScore}%`,
      icon: <BookOpen className="h-5 w-5" />,
      color: "bg-blue-500"
    },
    {
      name: "Sales Finance",
      value: salesFinanceProgress,
      subtitle: `Quiz score: ${salesFinanceQuizScore}%`,
      icon: <DollarSign className="h-5 w-5" />,
      color: "bg-amber-500"
    },
    {
      name: "Sales Technology",
      value: salesTechProgress,
      subtitle: `Quiz score: ${salesTechQuizScore}%`,
      icon: <Smartphone className="h-5 w-5" />,
      color: "bg-purple-500"
    }
  ];

  const completionData = [
    { name: "FMCG Fundamentals", completion: fundamentalsProgress },
    { name: "Sales Finance", completion: salesFinanceProgress },
    { name: "Sales Tech", completion: salesTechProgress }
  ];

  const quizData = [
    { name: "FMCG Fundamentals", score: fundamentalsQuizScore },
    { name: "Sales Finance", score: salesFinanceQuizScore },
    { name: "Sales Tech", score: salesTechQuizScore }
  ];

  return (
    <div>
      <Header title="Learning Progress" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {progressData.map((item, index) => (
          <StatsCard
            key={index}
            title={item.name}
            value={`${item.value}%`}
            subtitle={item.subtitle}
            icon={item.icon}
            progress={item.value}
            color={item.color}
          />
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="border rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <BarChart2 className="h-5 w-5 text-muted-foreground" />
              <h3 className="font-medium">Module Completion Progress</h3>
            </div>
          </div>
          
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart
                data={completionData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="name" type="category" width={100} />
                <Tooltip />
                <Bar dataKey="completion" fill="#68CB84" radius={[0, 4, 4, 0]} barSize={30} />
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="border rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-muted-foreground" />
              <h3 className="font-medium">Quiz Performance by Module</h3>
            </div>
          </div>
          
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart
                data={quizData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="name" type="category" width={100} />
                <Tooltip />
                <Bar dataKey="score" fill="#3E855A" radius={[0, 4, 4, 0]} barSize={30} />
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="border rounded-lg p-6">
        <h3 className="font-medium mb-8">Learning Statistics</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8">
          <div>
            <p className="text-muted-foreground mb-1">Total Learning Time</p>
            <p className="text-2xl font-bold">3.5 hours</p>
          </div>
          
          <div>
            <p className="text-muted-foreground mb-1">Questions Answered</p>
            <p className="text-2xl font-bold">
              {fundamentalsQuizScore > 0 ? 5 : 0}
              {salesFinanceQuizScore > 0 ? 5 : 0}
              {salesTechQuizScore > 0 ? 5 : 0}
            </p>
          </div>
          
          <div>
            <p className="text-muted-foreground mb-1">Average Quiz Score</p>
            <p className="text-2xl font-bold">
              {Math.round(
                ((fundamentalsQuizScore > 0 ? fundamentalsQuizScore : 0) +
                (salesFinanceQuizScore > 0 ? salesFinanceQuizScore : 0) +
                (salesTechQuizScore > 0 ? salesTechQuizScore : 0)) /
                ((fundamentalsQuizScore > 0 ? 1 : 0) +
                (salesFinanceQuizScore > 0 ? 1 : 0) +
                (salesTechQuizScore > 0 ? 1 : 0) || 1)
              )}%
            </p>
          </div>
          
          <div>
            <p className="text-muted-foreground mb-1">Learning Streak</p>
            <p className="text-2xl font-bold">4 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
