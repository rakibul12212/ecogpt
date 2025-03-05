"use client";
import { useState, useRef, useEffect } from "react";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { SiAnthropic, SiXiaomi, SiDeepin } from "react-icons/si";
import {
  FaChevronDown,
  FaPaperclip,
  FaMicrophone,
  FaPaperPlane,
} from "react-icons/fa";
import { IoMdAddCircleOutline, IoMdTime } from "react-icons/io";
import Container from "../shared/Container/Container";

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Default selected option (Icon instead of image)
  const [selectedOption, setSelectedOption] = useState({
    name: "EchoGPT",
    icon: <SiAnthropic className="text-orange-500 text-2xl" />, // Default icon
  });

  // Options array
  const options = [
    {
      name: "Claude 3 Haiku",
      icon: <SiAnthropic className="text-orange-500 text-2xl" />,
      description: "AI-driven storytelling and narratives.",
    },
    {
      name: "Grok2 - xAI",
      icon: <SiXiaomi className="text-black text-2xl" />,
      description: "Enhances creative writing and storytelling.",
    },
    {
      name: "DeepSeek R1",
      icon: <SiDeepin className="text-blue-500 text-2xl" />,
      description: "AI-driven data exploration and analysis.",
    },
  ];

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to handle option selection
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selection
  };

  const [message, setMessage] = useState("");

  return (
    <Container className="mt-10">
      {/* Header Section */}
      <div className="mx-auto border border-gray-300 p-4 rounded-xl max-w-3xl w-full bg-white shadow-md">
        <div className="flex items-center justify-between">
          {/* Left Side */}
          <div className="flex items-center gap-x-4">
            {/* Display Selected Icon */}
            <div className="flex items-center gap-2">
              {selectedOption.icon}
              <p className="text-gray-700 font-medium">{selectedOption.name}</p>
            </div>

            {/* Dropdown */}
            <div className="relative flex items-center" ref={dropdownRef}>
              {/* Dropdown Button */}
              <button onClick={toggleDropdown}>
                <FaChevronDown className="text-gray-500 hover:text-gray-700" />
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border p-2 max-h-56 overflow-y-auto">
                  <ul>
                    {options.map((option) => (
                      <li
                        key={option.name}
                        className="flex gap-3 items-center p-3 hover:bg-gray-100 rounded-md cursor-pointer"
                        onClick={() => handleSelect(option)}
                      >
                        {option.icon}
                        <div>
                          <h4 className="font-medium">{option.name}</h4>
                          <p className="text-sm text-gray-500">
                            {option.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Divider */}
            <span className="text-gray-300">|</span>

            {/* Boost Icon */}
            <BsFillRocketTakeoffFill className="text-purple-500 text-lg" />
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-x-3">
            <IoMdAddCircleOutline className="text-gray-500 hover:text-gray-700 text-lg" />
            <IoMdTime className="text-gray-500 hover:text-gray-700 text-lg" />
          </div>
        </div>

        {/* Chat Input Box */}
        <div className="border border-gray-300 p-3 mt-4 rounded-xl w-full bg-white">
          <div className="flex items-center w-full">
            {/* Attachment Icon */}
            <button className="text-gray-500 hover:text-gray-700">
              <FaPaperclip className="text-xl" />
            </button>

            {/* Input Field */}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 mx-3 outline-none bg-transparent text-gray-700 text-base resize-none w-full min-h-[40px]"
              rows="4"
            />

            {/* Right Icons */}
            <div className="flex items-center gap-3">
              <button className="text-gray-500 hover:text-gray-700">
                <FaMicrophone className="text-xl" />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <FaPaperPlane className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Chatbox;
