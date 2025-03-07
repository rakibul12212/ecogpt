"use client";
import { useState } from "react";
import Sidebar from "@/components/shared/Sidebar";
import Navbar from "@/components/shared/Navbar";
import { FiX } from "react-icons/fi";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="w-full h-full min-h-screen flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-20 bg-[#F7F5FF] transition-transform transform md:relative md:translate-x-0 md:w-auto ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:block flex flex-col items-center justify-start w-full`}
      >
        {/* Close Button (Mobile) */}
        <div className="absolute top-4 right-2 md:hidden">
          <button onClick={closeSidebar} className="text-2xl text-gray-600">
            <FiX />
          </button>
        </div>

        {/* Sidebar Component (Pass closeSidebar) */}
        <Sidebar closeSidebar={closeSidebar} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full">
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <main className="w-full flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
