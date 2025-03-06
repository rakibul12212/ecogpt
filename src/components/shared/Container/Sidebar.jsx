"use client";

import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaStore, FaCog, FaSun, FaHistory, FaTh } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="bg-white shadow-lg h-screen p-4 flex flex-col w-64 ">
      {/* Logo (Visible on Mobile Only) */}
      <Link href="/">
        <div className="flex  gap-x-4 py-2 pb-8 ">
          {assets.images.logo && (
            <Image src={assets.images.logo} width={50} height={50} alt="logo" />
          )}
          <div className="relative text-center ">
            <h1 className="font-bold text-2xl tracking-wide text-[#713CF4]">
              EchoGPT
            </h1>
            <h1
              className="absolute font-bold text-2xl tracking-wide left-0 right-0 top-[0.9em] scale-y-[-1] opacity-30"
              style={{
                maskImage:
                  "linear-gradient(to bottom, rgba(100, 80, 244, 0.5), transparent)",
                WebkitMaskImage:
                  "linear-gradient(to top, rgba(100, 80, 244, 0.5), transparent)",
              }}
            >
              EchoGPT
            </h1>
          </div>
        </div>
      </Link>

      <button className="w-full bg-purple-500 text-white py-2 rounded-md mb-4">
        New Chat
      </button>

      <div className="flex flex-col gap-3">
        <Link
          href="/history"
          className="flex items-center gap-3 p-2 rounded-md hover:bg-purple-100"
        >
          <FaHistory className="w-5 h-5" /> History
        </Link>
        <Link
          href="/store"
          className="flex items-center gap-3 p-2 rounded-md hover:bg-purple-100"
        >
          <FaStore className="w-5 h-5" /> Store
        </Link>
        <Link
          href="/aitask"
          className="flex items-center gap-3 p-2 rounded-md hover:bg-purple-100"
        >
          <FaTh className="w-5 h-5" /> AI Tasks
        </Link>
      </div>

      <div className="mt-auto bg-gray-100 p-4 rounded-md">
        <h2 className="text-sm font-semibold">Unlock Pro Features</h2>
        <p className="text-xs text-gray-600 mb-2">
          With statistics on your shot & profile performance available to Pros
        </p>
        <button className="w-full bg-black text-white py-2 rounded-md">
          Upgrade to Pro
        </button>
      </div>

      <div className="flex justify-between mt-4 p-2 border-t">
        <FaHome className="w-6 h-6 text-gray-500" />
        <FaCog className="w-6 h-6 text-gray-500" />
        <FaSun className="w-6 h-6 text-gray-500" />
      </div>
    </div>
  );
}
