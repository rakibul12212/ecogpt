"use client";
import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { TiMessages } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiThLargeOutline } from "react-icons/ti";
import { BsChatLeftText, BsDiscord } from "react-icons/bs";
import { BiDiamond } from "react-icons/bi";
import { GiCubeforce } from "react-icons/gi";
import { LiaShareAltSolid } from "react-icons/lia";
import { RiSettings4Line } from "react-icons/ri";
import { FiSun } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="bg-[#F7F5FF] shadow-lg h-screen fixed p-4 flex flex-col w-64 ">
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

      <div className="h-[300px] md:h-[200px] 2xl:h-[500px] overflow-y-auto">
        <div className="flex flex-col">
          <Link href="/">
            <button className="w-full text-[#AD46FF] border-1 border-[#AD46FF] py-2 rounded-md mb-4 flex items-center justify-center gap-x-2">
              <FiEdit /> <span>New Chat</span>
            </button>
          </Link>
        </div>

        <div className="flex flex-col gap-3 ">
          <p className="text-xs py-4">Engagement</p>
          <Link
            href="/history"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-purple-100"
          >
            <TiMessages className="w-5 h-5" /> History
          </Link>
          <Link
            href="/store"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-purple-100"
          >
            <RiDeleteBin6Line className="w-5 h-5" /> Store
          </Link>
          <Link
            href="/aitask"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-purple-100"
          >
            <TiThLargeOutline className="w-5 h-5" /> AI Tasks
          </Link>
          <p className="text-xs py-4">Help & Support</p>
          <Link
            href="/support"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-purple-100"
          >
            <BsChatLeftText className="w-5 h-5" /> Support
          </Link>
          <Link
            href="/subscription"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-purple-100"
          >
            <BiDiamond className="w-5 h-5" /> Subscriptions
          </Link>
          <Link
            href="/"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-purple-100"
          >
            <GiCubeforce className="w-5 h-5" /> API Platform
          </Link>
          <Link
            href="/"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-purple-100"
          >
            <BsDiscord className="w-5 h-5" /> discord
          </Link>
        </div>
      </div>

      <div className="mt-auto bg-gray-100 p-4 rounded-md ">
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
        <LiaShareAltSolid className="w-6 h-6 text-gray-500" />
        <RiSettings4Line className="w-6 h-6 text-gray-500" />
        <FiSun className="w-6 h-6 text-gray-500" />
      </div>
    </div>
  );
}
