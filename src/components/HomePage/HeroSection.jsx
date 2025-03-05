"use client";
import React from "react";
import Image from "next/image";
import assets from "@/assets";
import Container from "../shared/Container/Container";
const HeroSection = () => {
  return (
    <Container>
      <div className="h-[200px] overflow-y-auto mx-24">
        <div className="flex flex-col justify-center items-center gap-y-4">
          <Image
            src={assets.images.logo}
            width={50}
            height={50}
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
        <div className="grid grid-cols-2 gap-4 py-10">
          <div className="border-1 border-gray-200 rounded-md p-4">
            <p className="font-bold text-sm txt-gray-700">
              Unlock Your Creative Flow
            </p>
            <br />
            <p className="text-sm">
              Receive custom prompts that reflect your writing style, helping
              you push past creative blocks and
            </p>
          </div>
          <div className="border-1 border-gray-200 rounded-md p-4">
            <p className="font-bold text-sm txt-gray-700">
              Build a Resume That Shines
            </p>{" "}
            <br />
            <p className="text-sm">
              Craft a resume tailored to highlight your experience and match the
              job you want, designed
            </p>
          </div>
          <div className="border-1 border-gray-200 rounded-md p-4">
            <p className="font-bold text-sm txt-gray-700">
              Set a Challenge That Transforms You
            </p>{" "}
            <br />
            <p className="text-sm">
              Create a personalized challenge based on your goals and habits,
              designed to push you out of your
            </p>
          </div>
          <div className="border-1 border-gray-200 rounded-md p-4">
            <p className="font-bold text-sm txt-gray-700">
              Write Irresistible Social Content
            </p>{" "}
            <br />
            <p className="text-sm">
              Generate catchy, clever captions for your photos or videos,
              perfect for increasing engagement and
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
