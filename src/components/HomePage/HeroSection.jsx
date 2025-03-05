"use client";
import React from "react";
import Image from "next/image";
import assets from "@/assets";
import Container from "../shared/Container/Container";
const HeroSection = () => {
  return (
    <Container>
      {" "}
      <div className="flex flex-col justify-center items-center gap-y-4">
        <Image
          src={assets.images.logo}
          width={80}
          height={80}
          alt="logo"
          className="rounded-full"
        />
        <p className="text-3xl font-semibold">EchoGPT</p>
        <p className="text-xl text-center">
          Interact with EchoGPT, an AI that reflects your input
          <br />
          for quick ideas, summaries, or feedback. Perfect for
        </p>
      </div>
    </Container>
  );
};

export default HeroSection;
