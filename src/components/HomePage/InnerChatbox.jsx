import { useState } from "react";
import { FaPaperclip, FaMicrophone, FaPaperPlane } from "react-icons/fa";
const InnerChatbox = () => {
  const [message, setMessage] = useState("");
  return (
    <div className="border border-gray-300 p-3 mt-4 rounded-xl w-full bg-white flex items-center">
      {/* Attachment Icon */}
      <button className="text-gray-500 hover:text-gray-700 mb-20">
        <FaPaperclip className="text-xl" />
      </button>

      {/* Input Field - Bigger Height */}
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask a question..."
        className="flex-1 mx-3 outline-none bg-transparent text-gray-700 text-base resize-none min-h-[100px] max-h-[200px] w-full overflow-hidden scrollbar-none"
      />

      {/* Right Icons */}
      <div className="flex items-center gap-3 mb-20">
        <button className="text-gray-500 hover:text-gray-700">
          <FaMicrophone className="text-xl" />
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <FaPaperPlane className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default InnerChatbox;
