"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import assets from "@/assets";
import Container from "../shared/Container/Container";
import InnerChatbox from "./InnerChatbox";

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
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const saveChatToLocal = (updatedMessages, currentSessionId) => {
    if (updatedMessages.length === 0) return;
    try {
      const storedChats = JSON.parse(localStorage.getItem("echogpt_chats")) || [];
      
      const chatData = {
        id: currentSessionId,
        title: updatedMessages[0].content,
        model: "EchoGPT",
        updatedAt: new Date().toISOString(),
        messages: updatedMessages
      };

      const existingChatIndex = storedChats.findIndex(c => c.id === currentSessionId);
      if (existingChatIndex >= 0) {
        storedChats[existingChatIndex] = chatData;
      } else {
        storedChats.unshift(chatData);
      }
      localStorage.setItem("echogpt_chats", JSON.stringify(storedChats));
    } catch (e) {
      console.error("Error saving chat", e);
    }
  };

  const handleSendMessage = async (userMessage) => {
    const newMessages = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    let currentSessionId = sessionId;
    if (!currentSessionId) {
      currentSessionId = Date.now().toString();
      setSessionId(currentSessionId);
    }
    
    saveChatToLocal(newMessages, currentSessionId);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response");
      }

      const data = await response.json();
      const finalMessages = [...newMessages, data];
      setMessages(finalMessages);
      saveChatToLocal(finalMessages, currentSessionId);
    } catch (error) {
      console.error("Error generating response:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="ps-5">
      <div 
        ref={chatContainerRef}
        className="lg:max-w-2xl 2xl:max-w-4xl mx-auto h-[400px] md:h-[200px] 2xl:h-[480px] overflow-y-auto mt-5 md:mt-2 2xl:mt-16 relative z-10 scrollbar-thin scrollbar-thumb-gray-300"
      >
        {messages.length === 0 ? (
          <>
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
          </>
        ) : (
          <div className="flex flex-col gap-4 py-4 relative z-10 pr-4">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
              >
                <div 
                  className={`max-w-[80%] p-4 rounded-xl ${
                    msg.role === "user" 
                      ? "bg-blue-600 text-white rounded-br-none" 
                      : "bg-gray-100 text-gray-800 border border-gray-200 rounded-bl-none"
                  }`}
                >
                  <p className="whitespace-pre-wrap text-sm md:text-base">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex flex-col items-start">
                <div className="max-w-[80%] p-4 rounded-xl bg-gray-100 text-gray-800 border border-gray-200 rounded-bl-none">
                  <p className="animate-pulse text-sm md:text-base">Thinking...</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <InnerChatbox onSendMessage={handleSendMessage} isLoading={isLoading} />
    </Container>
  );
};

export default HeroSection;
