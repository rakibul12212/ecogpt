"use client";
import { usePathname } from "next/navigation";
import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FiEdit, FiSun } from "react-icons/fi";
import { TiMessages, TiThLargeOutline } from "react-icons/ti";
import { RiDeleteBin6Line, RiSettings4Line } from "react-icons/ri";
import { BsChatLeftText, BsDiscord } from "react-icons/bs";
import { BiDiamond } from "react-icons/bi";
import { GiCubeforce } from "react-icons/gi";
import { LiaShareAltSolid } from "react-icons/lia";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="bg-[#F7F5FF]  h-screen fixed p-4 flex flex-col w-64">
      {/* Logo (Visible on Mobile Only) */}
      <Link href="/" className="block sm:block ">
        <div className="flex gap-x-4 py-2 pb-8">
          {assets.images.logo && (
            <Image src={assets.images.logo} width={50} height={50} alt="logo" />
          )}
          <div className="relative text-center">
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
      ;
      <div className="h-full md:h-[300px] 2xl:h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-200 pr-10">
        <div className="flex flex-col">
          <Link href="/">
            <button className="w-full text-[#cf79e5] border-1  py-2 rounded-md mb-4 flex items-center justify-center gap-x-2">
              <FiEdit /> <span>New Chat</span>
            </button>
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs py-4">Engagement</p>
          {[
            {
              href: "/history",
              icon: <TiMessages className="w-5 h-5" />,
              label: "History",
            },
            {
              href: "/store",
              icon: <RiDeleteBin6Line className="w-5 h-5" />,
              label: "Store",
            },
            {
              href: "/aitask",
              icon: <TiThLargeOutline className="w-5 h-5" />,
              label: "AI Tasks",
            },
          ].map(({ href, icon, label }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 p-2 rounded-md ${
                pathname === href
                  ? "bg-gray-400 text-white"
                  : "hover:bg-purple-100"
              }`}
            >
              {icon} {label}
            </Link>
          ))}

          <p className="text-xs py-4">Help & Support</p>
          {[
            {
              href: "/support",
              icon: <BsChatLeftText className="w-5 h-5" />,
              label: "Support",
            },
            {
              href: "/subscription",
              icon: <BiDiamond className="w-5 h-5" />,
              label: "Subscriptions",
            },
            {
              href: "#",
              icon: <GiCubeforce className="w-5 h-5" />,
              label: "API Platform",
            },
            {
              href: "#",
              icon: <BsDiscord className="w-5 h-5" />,
              label: "Discord",
            },
          ].map(({ href, icon, label }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 p-2 rounded-md ${
                pathname === href
                  ? "bg-gray-500 text-white"
                  : "hover:bg-purple-100"
              }`}
            >
              {icon} {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-auto bg-gray-100 p-2 rounded-md">
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
