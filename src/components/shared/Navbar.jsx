import React from "react";
import Image from "next/image";
import assets from "@/assets";
import Container from "./Container/Container";
const Navbar = () => {
  return (
    <div className="bg-[#FAFAFA] py-2">
      <Container>
        <div className=" flex items-center justify-between md:justify-end 2xl:justify-end">
          {/* logo */}
          <div className="flex md:flex-col-2 2xl:flex-col-2 gap-x-4 py-2 md:hidden">
            {assets.images.logo && (
              <Image
                src={assets.images.logo}
                width={50}
                height={50}
                alt="logo"
              />
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
          <Image
            src={assets.images.user}
            width={50}
            height={50}
            alt="user"
            className="rounded-full"
          />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
