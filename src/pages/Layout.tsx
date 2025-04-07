
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/layout/Sidebar";

const Layout = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-6 md:p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
