"use client";
import { MdArrowForwardIos } from "react-icons/md";
import { AiOutlineMail, AiOutlineFacebook } from "react-icons/ai";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <p className="text-2xl md:text-3xl xl:text-4xl font-semibold text-center ">
        Talk with Our Team
      </p>
      <div className="w-full max-w-lg">
        <p className="text-sm pb-4">Your preferred option</p>
        <button
          className="flex items-center justify-between bg-[#F7F5FF] px-6 sm:px-8 py-4 rounded-xl w-full transition-all duration-300 hover:bg-violet-100"
          role="button"
          aria-label="Contact us via email"
        >
          <div className="flex items-center gap-x-4 flex-1">
            <AiOutlineMail
              size={40}
              className="bg-white p-2 rounded-full transition-all duration-300 hover:bg-violet-700 hover:text-white"
            />
            <div className="text-left flex-1">
              <p className="font-medium w-full">Email Us</p>
              <p className="text-sm text-gray-600 w-full">
                We will aim to respond in 1 day
              </p>
            </div>
          </div>
          <MdArrowForwardIos
            size={20}
            className="text-gray-600 transition-all duration-300 hover:text-violet-700 hover:scale-125"
          />
        </button>
      </div>
      <div className="w-full max-w-lg pt-10">
        <p className="text-sm pb-4">Follow Us</p>
        <button
          className="flex items-center justify-between bg-[#F7F5FF] px-6 sm:px-8 py-4 rounded-xl w-full transition-all duration-300 hover:bg-violet-100"
          role="button"
          aria-label="Follow us on Facebook"
        >
          <div className="flex items-center gap-x-4 flex-1">
            <AiOutlineFacebook
              size={40}
              className="bg-white p-2 rounded-full transition-all duration-300 hover:bg-violet-700 hover:text-white"
            />
            <div className="text-left flex-1">
              <p className="font-medium w-full">Facebook</p>
              <p className="text-sm text-gray-600 w-full">
                Follow us on Facebook for the latest updates and news!
              </p>
            </div>
          </div>
          <MdArrowForwardIos
            size={20}
            className="text-gray-600 transition-all duration-300 hover:text-violet-700 hover:scale-125"
          />
        </button>
      </div>
    </div>
  );
};

export default Page;
