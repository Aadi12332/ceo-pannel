import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen bg-white">
        <Sidebar isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)} />
      <div className="flex-1 flex flex-col">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="p-2.5 flex-1 bg-[#E8F1FF] h-[calc(100vh-76px)] overflow-auto scroll-hide">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
