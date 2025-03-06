"use client";
import { useState } from "react";
import {
  FaHistory,
  FaStore,
  FaTasks,
  FaHome,
  FaUsersCog,
  FaCogs,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Container from "./Container/Container";
import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      

      {/* Sidebar Toggle Button for Mobile */}
      <button
        className="p-3 md:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 md:w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-40 
        ${isOpen ? "translate-x-0" : "-translate-x-64"} md:translate-x-0`}
      >
        <nav className="mt-5 space-y-2 px-4">
          <button className="w-full bg-[#E9D8FD] text-[#713CF4] py-3 rounded-lg font-medium">
            ✏️ New Chat
          </button>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="/history"
                className="flex items-center gap-3 px-4 py-3 bg-[#F3E8FF] rounded-lg"
              >
                <FaHistory size={20} /> History
              </Link>
            </li>
            <li>
              <Link
                href="/store"
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg"
              >
                <FaStore size={20} /> Store
              </Link>
            </li>
            <li>
              <Link
                href="/ai-tasks"
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg"
              >
                <FaTasks size={20} /> AI Tasks
              </Link>
            </li>
          </ul>
        </nav>

        {/* Pro Upgrade Section */}
        <div className="mt-6 bg-gray-100 p-4 rounded-lg text-center mx-4">
          <h3 className="font-semibold">Unlock Pro Features</h3>
          <p className="text-sm text-gray-600">
            With statistics on your shot & profile performance available to Pros
          </p>
          <button className="mt-2 bg-black text-white w-full py-2 rounded-lg">
            Upgrade to pro
          </button>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg flex justify-around py-3 md:hidden">
        <Link href="/home" className="flex flex-col items-center text-gray-600">
          <FaHome size={20} />
        </Link>
        <Link
          href="/community"
          className="flex flex-col items-center text-gray-600"
        >
          <FaUsersCog size={20} />
        </Link>
        <Link
          href="/settings"
          className="flex flex-col items-center text-gray-600"
        >
          <FaCogs size={20} />
        </Link>
        <Link
          href="/theme"
          className="flex flex-col items-center text-gray-600"
        >
          <FaSun size={20} />
        </Link>
      </div>
    </Container>
  );
};

export default Sidebar;
