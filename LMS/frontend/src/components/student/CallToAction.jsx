import React from "react";
import { assets } from "../../assets/assets";

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0">
      <h1 className="text-xl md:text-4xl text-gray-800 font-semibold">
        Learn anything, anytime, anywhere
      </h1>
      <p className="text-gray-500 sm:text-sm md:px-10 xl:px-20">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat sequi
        nisi temporibus velit. Enim excepturi quia illo perferendis
        necessitatibus cumque quos asperiores maiores dicta, vitae autem ipsam
        ad dignissimos quasi.
      </p>
      <div className="flex items-center font-medium gap-6 mt-4">
        <button
          className="px-10 py-3 rounded-md text-white cursor-pointer bg-blue-600 hover:underline 
        underline-offset-[3px]"
        >
          Get started
        </button>
        <button
          className="flex items-center gap-2 border border-gray-300 p-3 
          rounded cursor-pointer hover:underline hover:text-blue-600 underline-offset-[3px]
          shadow-md"
        >
          Learn more <img src={assets.arrow_icon} alt="arrow_icon" />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
