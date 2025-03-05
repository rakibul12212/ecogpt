import React from "react";
import Image from "next/image";
import assets from "@/assets";
import Container from "./Container/Container";
const Navbar = () => {
  return (
    <div className="bg-[#FAFAFA] py-2">
      <Container>
        <div className=" flex items-center justify-end">
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
