import React from "react";

import TextGenerateEffect from "../ui/textGenaretorEffect";
import Image from "next/image";

const Hero = () => {
  const words =
    "I’m Jashadul, but you can call me Asif. I'm a professional website developer with over 3 years of experience as a highly skilled Web3 developer";
  return (
    <div className="max-w-7xl mx-auto w-full h-[60vh]  md:h-[80vh] px-5 md:px-14 xl:px-20 flex flex-col md:flex-row justify-center items-center">
      <div className="w-full md:w-1/2 flex flex-col gap-3 items-start">
        <p className="text-xl font-extrabold  mb-4 tracking-[2px] ">Hey There...!</p>
        <TextGenerateEffect words={words} />
        {/* <CustomBtn text="" type="button" othercss='bg-purple '/>
         */}
        <button className="relative bg-purple top-5 text-white font-semibold py-2 px-7 transform -skew-x-12 z-20 transition-all duration-300 group ">
          <a
            href="https://github.com/asifdex"
            target="_blank"
            className="relative z-30 -skew-x-1"
          >
            GitHub
          </a>
          <span className="absolute inset-0 w-full h-full bg-gradient-to-t from-purple to-[#8B5CF6] transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0 z-10 " />
        </button>
      </div>
      <div className="relative w-full md:w-1/2 hidden md:flex justify-center items-center ">
        {/* Outer container with padding and background color */}
        <div className="relative p-3 bg-transparent border-4 dark:border-red-400 border-purple rounded-full flex justify-center items-center">
          {/* Inner container for the image */}
          <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="profile"
              layout="fill"
              className="object-cover rounded-full pointer-events-none"
            /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
