"use client";
import { useState, useRef, useEffect } from "react";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { SiAnthropic, SiXiaomi, SiDeepin } from "react-icons/si";
import { FaChevronDown } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { FaPaperclip, FaMicrophone, FaPaperPlane } from "react-icons/fa";
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
      <div className="mx-24 border-1 border-gray-300 p-4 rounded-xl">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-x-5">
            {/* Display Selected Icon */}
            <div className="flex items-center gap-2">
              {selectedOption.icon}
              <p>{selectedOption.name}</p>
            </div>
            {/* dropdown */}
            <div className="relative flex items-center" ref={dropdownRef}>
              {/* Dropdown Button */}
              <button onClick={toggleDropdown}>
                <FaChevronDown />
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border p-2 h-[250px] overflow-y-auto">
                  <ul className="mt-1">
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
            <span className="text-gray-300 flex items-center">|</span>
            {/* boost */}
            <div>
              <BsFillRocketTakeoffFill className="text-purple-500" />
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <IoMdAddCircleOutline />
            <IoMdTime />
          </div>
        </div>
        <div className="border-1 border-gray-300 p-4 mt-4 rounded-xl fixeds">
          <div className="flex items-center w-full max-w-2xl mb-24  ">
            {/* Attachment Icon */}
            <button className="text-gray-500 hover:text-gray-700">
              <FaPaperclip className="text-xl" />
            </button>

            {/* Input Field */}
            <input
              type="textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask a question"
              className="flex-1 mx-3  outline-none bg-transparent text-gray-500 text-base"
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
