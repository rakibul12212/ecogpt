"use client";
import Container from "@/components/shared/Container/Container";
import { useEffect, useState } from "react";
import {
  FaInfoCircle,
  FaSearch,
  FaRobot,
  FaImage,
  FaBrain,
  FaBolt,
  FaClipboard,
  FaChartBar,
  FaDatabase,
} from "react-icons/fa";

const fetchData = async () => {
  return [
    {
      id: 1,
      title: "EchoGPT",
      description:
        "Interact with EchoGPT, an AI that reflects your input for quick ideas, summaries, or feedback. Perfect for brainstorming or rapid dialogue.",
      icon: <FaRobot className="w-10 h-10 text-blue-500" />,
      category: "Chat",
    },
    {
      id: 2,
      title: "DALL-E 3",
      description:
        "Transform prompts into stunning visuals using DALL-E’s AI, crafting imaginative artwork and captivating designs with ease.",
      icon: <FaImage className="w-10 h-10 text-blue-500" />,
      category: "Image",
    },
    {
      id: 3,
      title: "Gemini Advanced",
      description:
        "Gemini excels in integrating text and image comprehension, offering interactive AI with seamless, creative, and precise outputs.",
      icon: <FaBrain className="w-10 h-10 text-blue-500" />,
      category: "Chat",
    },
    {
      id: 4,
      title: "GPT-4o",
      description:
        "Experience rapid, precise responses with GPT-4o, designed for streamlined interactions where speed and clarity are essential.",
      icon: <FaBolt className="w-10 h-10 text-blue-500" />,
      category: "Chat",
    },
    {
      id: 5,
      title: "GPT-4o-mini",
      description:
        "Enjoy thorough, clear explanations with GPT-4o-mini, ideal for users seeking detailed, comprehensive answers and in-depth dialogues.",
      icon: <FaClipboard className="w-10 h-10 text-blue-500" />,
      category: "Chat",
    },
    {
      id: 6,
      title: "DeepSeek-V3",
      description:
        "DeepSeek specializes in advanced data exploration, leveraging AI to deliver accurate, insightful, and efficient solutions for complex analysis.",
      icon: <FaChartBar className="w-10 h-10 text-blue-500" />,
      category: "Data",
    },
    {
      id: 7,
      title: "llama3-8B",
      description:
        "llama3-8B specializes in advanced data exploration, leveraging AI to deliver accurate, insightful, and efficient solutions for complex analysis.",
      icon: <FaDatabase className="w-10 h-10 text-blue-500" />,
      category: "Data",
    },
  ];
};

const Page = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const getCards = async () => {
      const data = await fetchData();
      setCards(data);
      setFilteredCards(data);
    };
    getCards();
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredCards(cards);
    } else {
      setFilteredCards(
        cards.filter((card) => card.category === selectedCategory)
      );
    }
  }, [selectedCategory, cards]);

  return (
    <Container className="ps-0 md:ps-28 2xl:ps-28">
      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="p-4 ">
          <div className="text-center mb-6">
            <p className="text-2xl md:text-3xl 2xl:text-4xl font-semibold text-center py-8">
              EchoGPT Store
            </p>
            <p className=" text-center text:md md:text-xl 2xl:text-2xl max-w-2xl py-4">
              Discover and create custom versions of ChatGPT that combine
              instructions, extra knowledge, and any combination of skills.
            </p>
          </div>
          <div className="relative w-full py-8">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search chat history..."
              className="border border-gray-300 p-3 pl-10 rounded-xl w-full bg-white text-gray-700 outline-none "
            />
          </div>
          {/* Filter Section */}
          <div className="flex gap-4 justify-start mb-8 border-b-1 border-gray-300">
            {["All", "Chat", "Image", "Data"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-4 py-2 text-gray-700 transition-all border-b-2 ${
                  selectedCategory === category
                    ? "border-purple-500 "
                    : "border-transparent hover:border-purple-500 "
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredCards.map((card) => (
              <div
                key={card.id}
                className="p-4 rounded-2xl border border-gray-200 bg-white"
              >
                <div className="flex items-center justify-between ">
                  {card.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mt-2">
                  {card.title}
                </h2>
                <p className="text-gray-500 mt-1 max-w-[200px]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
