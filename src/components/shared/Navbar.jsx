// "use client"; // Ensures state works in Next.js App Router

// import React from "react";
// import Image from "next/image";
// import assets from "@/assets";
// import Container from "./Container/Container";

"use client";

import Image from "next/image";
import assets from "@/assets";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    // <div className="bg-[#FAFAFA] py-2 z-10 ">
    //   <Container>
    //     <div className="flex items-center justify-between md:justify-end 2xl:justify-end gap-x-10 ">
    //       {/* Logo (Visible on Mobile Only) */}
    //       <div className="flex  gap-x-4 py-2 md:hidden">
    //         {assets.images.logo && (
    //           <Image
    //             src={assets.images.logo}
    //             width={50}
    //             height={50}
    //             alt="logo"
    //           />
    //         )}
    //         <div className="relative text-center ">
    //           <h1 className="font-bold text-2xl tracking-wide text-[#713CF4]">
    //             EchoGPT
    //           </h1>
    //           <h1
    //             className="absolute font-bold text-2xl tracking-wide left-0 right-0 top-[0.9em] scale-y-[-1] opacity-30"
    //             style={{
    //               maskImage:
    //                 "linear-gradient(to bottom, rgba(100, 80, 244, 0.5), transparent)",
    //               WebkitMaskImage:
    //                 "linear-gradient(to top, rgba(100, 80, 244, 0.5), transparent)",
    //             }}
    //           >
    //             EchoGPT
    //           </h1>
    //         </div>
    //       </div>

    //       {/* User Profile Image */}
    //       <Image
    //         src={assets.images.user}
    //         width={50}
    //         height={50}
    //         alt="user"
    //         className="rounded-full"
    //       />
    //     </div>
    //   </Container>
    // </div>
    <div className="bg-[#FAFAFA] py-2 z-10 flex items-center justify-between px-4 md:px-10">
      <div className="flex items-center gap-x-4 md:hidden">
        <button onClick={toggleSidebar} className="text-2xl text-[#713CF4]">
          {isSidebarOpen ? <FiX /> : <FiMenu />}
        </button>
        {assets.images.logo && (
          <Image src={assets.images.logo} width={40} height={40} alt="logo" />
        )}
      </div>
      <h1 className="font-bold text-2xl tracking-wide text-[#713CF4] hidden md:block">
        EchoGPT
      </h1>
      <Image
        src={assets.images.user}
        width={40}
        height={40}
        alt="user"
        className="rounded-full"
      />
    </div>
  );
};

export default Navbar;
