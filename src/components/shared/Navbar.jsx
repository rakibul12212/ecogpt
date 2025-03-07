"use client";

import Image from "next/image";
import assets from "@/assets";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div className="bg-[#FAFAFA] py-2 z-10 flex items-center justify-between md:justify-end 2xl:justify-end px-4 md:px-10">
      <div className="flex items-center gap-x-4 md:hidden">
        {/* Ensure the button is centered */}
        <button
          onClick={toggleSidebar}
          className="text-2xl text-[#713CF4] flex items-center border-1 p-1 rounded-md"
        >
          {isSidebarOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Center the logo and text */}
        <div className="flex items-center gap-x-4">
          {assets.images.logo && (
            <Image
              src={assets.images.logo}
              width={40}
              height={40}
              alt="logo"
              className="self-center"
            />
          )}
          <div className="relative flex flex-col pb-4">
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
      </div>

      {/* Ensure the user image is centered */}
      <Image
        src={assets.images.user}
        width={40}
        height={40}
        alt="user"
        className="rounded-full self-center"
      />
    </div>
  );
};

export default Navbar;
