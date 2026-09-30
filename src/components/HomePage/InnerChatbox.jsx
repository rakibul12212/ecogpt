"use client";
import { useState } from "react";
import { FaPaperclip, FaMicrophone, FaPaperPlane } from "react-icons/fa";

const InnerChatbox = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  return (
    <div className="border border-gray-300 px-3 mt-4 rounded-xl lg:max-w-2xl 2xl:max-w-4xl mx-auto h-[150px] md:h-[150px] 2xl:h-[150px] bg-white flex items-center">
      <button className="text-gray-500 hover:text-gray-700 mb-20">
        <FaPaperclip className="text-xl" />
      </button>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask a question..."
        className="flex-1 mx-3 outline-none bg-transparent text-gray-700 text-base resize-none min-h-[100px] max-h-[200px] w-full overflow-hidden scrollbar-none"
        disabled={isLoading}
      />

      <div className="flex items-center gap-3 mb-20">
        <button className="text-gray-500 hover:text-gray-700">
          <FaMicrophone className="text-xl" />
        </button>
        <button 
          onClick={handleSend} 
          disabled={isLoading} 
          className={`text-gray-500 hover:text-gray-700 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <FaPaperPlane className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default InnerChatbox;
