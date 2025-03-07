"use client";
import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { LiaShareAltSolid } from "react-icons/lia";
import { ImBin } from "react-icons/im";
import assets from "@/assets";
import Image from "next/image";
import Container from "@/components/shared/Container/Container";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState({ name: "EchoGPT" });

  const options = [
    { name: "All" },
    { name: "EchoGPT" },
    { name: "ChatGPT" },
    { name: "Grok2 - xAI" },
    { name: "DeepSeek R1" },
    { name: "EchoGPT" },
    { name: "ChatGPT" },
    { name: "Grok2 - xAI" },
    { name: "DeepSeek R1" },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <Container className="ps-5 ">
      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 ">
        <p className="text-2xl md:text-3xl 2xl:text-4xl font-semibold text-center">
          My Chat History
        </p>
        <p className=" text-center text:md md:text-xl 2xl:text-2xl max-w-2xl py-4">
          Access your complete chat history across diverse topics and
          interactions with different models or characters.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full max-w-2xl">
          <div className="relative w-full">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search chat history..."
              className="border border-gray-300 p-3 pl-10 rounded-xl w-full bg-white text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div
            className="relative border border-gray-300 p-3 rounded-xl bg-white w-full sm:w-72 text-center cursor-pointer"
            ref={dropdownRef}
          >
            <div
              className="flex items-center justify-between"
              onClick={toggleDropdown}
            >
              <p className="text-gray-700 font-medium">{selectedOption.name}</p>
              <FaChevronDown className="text-gray-500 hover:text-gray-700" />
            </div>

            {isOpen && (
              <div className="absolute left-0 mt-2 w-full bg-white rounded-lg shadow-lg border p-2 max-h-56 overflow-y-auto z-10">
                <ul>
                  {options.map((option) => (
                    <li
                      key={option.name}
                      className="flex items-center p-3 hover:bg-gray-100 rounded-md cursor-pointer"
                      onClick={() => handleSelect(option)}
                    >
                      <h4 className="font-medium">{option.name}</h4>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between border border-gray-500 px-4 py-3 gap-4 rounded-xl mt-10 w-full max-w-2xl">
          <div className="flex flex-col items-center">
            <Image src={assets.images.logo} width={30} height={30} alt="logo" />
            <p className="text-xs">EchoGPT</p>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-gray-800 font-lg">dfg</p>
            <p className="text-sm text-gray-600">
              <span className="font-bold">Last Updated:</span> Mar 5, 2025 5:15
              PM
            </p>
          </div>
          <div className="flex items-center gap-4">
            <LiaShareAltSolid
              size={40}
              className="text-white bg-blue-500 rounded-xl p-2 opacity-40 hover:opacity-100"
            />
            <ImBin
              size={40}
              className="text-white bg-red-600 rounded-xl p-2 opacity-40 hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
