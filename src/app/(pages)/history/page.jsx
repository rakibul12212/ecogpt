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
  const [selectedOption, setSelectedOption] = useState({ name: "All" });
  const [chats, setChats] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const options = [
    { name: "All" },
    { name: "EchoGPT" },
    { name: "ChatGPT" },
    { name: "DeepSeek R1" },
  ];

  useEffect(() => {
    // Load chats from localStorage
    const loadChats = () => {
      try {
        const storedChats = JSON.parse(localStorage.getItem("echogpt_chats")) || [];
        setChats(storedChats);
      } catch (e) {
        console.error("Error loading chats", e);
      }
    };
    loadChats();
  }, []);

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

  const handleDelete = (id) => {
    const updatedChats = chats.filter(chat => chat.id !== id);
    setChats(updatedChats);
    localStorage.setItem("echogpt_chats", JSON.stringify(updatedChats));
  };

  const filteredChats = chats.filter((chat) => {
    const matchesModel = selectedOption.name === "All" || chat.model === selectedOption.name;
    const matchesSearch = chat.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesModel && matchesSearch;
  });

  return (
    <Container className="w-full px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center min-h-screen w-full">
        <p className="text-2xl md:text-3xl 2xl:text-4xl font-semibold text-center w-full">
          My Chat History
        </p>
        <p className="text-center text-md md:text-xl 2xl:text-2xl max-w-4xl py-4 w-full">
          Access your complete chat history across diverse topics and
          interactions with different models or characters.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full">
          <div className="relative w-full">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
            <input
              type="search"
              name="search"
              id="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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

        <div className="w-full mt-10 flex flex-col gap-4">
          {filteredChats.length > 0 ? (
            filteredChats.map((chat) => (
              <div key={chat.id} className="flex flex-col sm:flex-row items-center justify-between border border-gray-300 px-4 py-3 gap-4 rounded-xl w-full bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center min-w-[80px]">
                  <Image src={assets.images.logo} width={30} height={30} alt="logo" />
                  <p className="text-xs mt-1 text-gray-600">{chat.model}</p>
                </div>
                <div className="text-center sm:text-left w-full truncate">
                  <p className="text-gray-800 font-medium truncate text-lg">{chat.title}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    <span className="font-semibold text-gray-600">Last Updated:</span> {new Date(chat.updatedAt).toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="text-gray-600 hover:text-blue-500 bg-gray-100 hover:bg-blue-50 rounded-lg p-2 transition-colors">
                    <LiaShareAltSolid size={24} />
                  </button>
                  <button 
                    onClick={() => handleDelete(chat.id)}
                    className="text-gray-600 hover:text-red-500 bg-gray-100 hover:bg-red-50 rounded-lg p-2 transition-colors"
                  >
                    <ImBin size={24} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-10 w-full border border-dashed border-gray-300 rounded-xl">
              No chat history found. Start a conversation!
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Page;
