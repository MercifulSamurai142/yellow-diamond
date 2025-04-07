
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Index from "./pages/Index";
import Fundamentals from "./pages/Fundamentals";
import SalesFinance from "./pages/SalesFinance";
import SalesTechnology from "./pages/SalesTechnology";
import Progress from "./pages/Progress";
import Achievements from "./pages/Achievements";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import LessonPage from "./pages/LessonPage";
import QuizPage from "./pages/QuizPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="fundamentals" element={<Fundamentals />} />
            <Route path="sales-finance" element={<SalesFinance />} />
            <Route path="sales-technology" element={<SalesTechnology />} />
            <Route path="progress" element={<Progress />} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="profile" element={<Profile />} />
            
            {/* Lesson routes */}
            <Route path="lessons/:module/:id" element={<LessonPage />} />
            
            {/* Quiz routes */}
            <Route path="quiz/:module" element={<QuizPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
