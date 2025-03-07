"use client";
import React from "react";
import Image from "next/image";
import assets from "@/assets";
import Container from "../shared/Container/Container";

const features = [
  {
    title: "Unlock Your Creative Flow",
    description:
      "Receive custom prompts that reflect your writing style, helping you push past creative blocks.",
  },
  {
    title: "Build a Resume That Shines",
    description:
      "Craft a resume tailored to highlight your experience and match the job you want.",
  },
  {
    title: "Set a Challenge That Transforms You",
    description:
      "Create a personalized challenge based on your goals and habits, designed to push you forward.",
  },
  {
    title: "Write Irresistible Social Content",
    description:
      "Generate catchy, clever captions for your photos or videos, perfect for increasing engagement.",
  },
];

const FeatureCard = ({ title, description }) => (
  <div className="border border-gray-200 rounded-md p-4 bg-white shadow-md">
    <p className="font-bold text-sm text-gray-700">{title}</p>
    <p className="text-sm mt-2 text-gray-600">{description}</p>
  </div>
);

const HeroSection = () => {
  return (
    <Container className="ps-0 md:ps-28 2xl:ps-28">
      <div className="lg:max-w-2xl 2xl:max-w-4xl mx-4 sm:mx-8 md:mx-56 h-[300px] md:h-[200px] 2xl:h-[500px] overflow-y-auto mt-5 md:mt-2 2xl:mt-16 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white/90 sm:via-transparent sm:to-white opacity-90"></div>
        <div className="flex flex-col justify-center items-center text-center gap-y-4 relative z-10">
          <Image
            src={assets.images.logo}
            width={50}
            height={50}
            alt="logo"
            className="rounded-full"
          />
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold">
            EchoGPT
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            Interact with EchoGPT, an AI that reflects your input
            <br className="hidden md:block" />
            for quick ideas, summaries, or feedback. Perfect for
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 relative z-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
