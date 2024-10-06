import React from "react";

import Image from "next/image";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto w-full h-screen  md:h-screen px-5 md:px-14 xl:px-20 gap-20 md:gap-0 flex flex-col md:flex-row justify-center items-center">
      <div className="w-full md:w-1/2 flex flex-col  items-start">
        <h2 className="text-[24px] leading-3 font-extrabold  mb-4 text-red-600 mx-auto md:mx-0">
          HEY THERE!
        </h2>
        <h1 className="mx-auto md:mx-0 text-[30px] md:text-[50px] lg:text-[64px] tsukimi mb-3">
          I&apos;M JASHADUL ASIF.
        </h1>
        <span
          className="w-full my-12 h-1 md:flex hidden dark:bg-white rounded-full bg-black bg-spanLine"
          
        />

        <p className="raleway">
          I&apos;m a freelancer. specializing in <span className="bg-clip-text text-transparent bg-gradient-to-r font-extrabold text-2xl from-[#4ca5ffce] to-[#b673f8c9]">website developer</span> , Community
          management and crypto trader
        </p>
        <p className=" mt-3 raleway">
          I have 3+ years of experience as an Web developer and have worked with
          various clients including Blockchain Innovators . Check out my
          portfolio to see what I do.
        </p>
        <button className="relative bg-[#af6aef] mx-auto  md:mx-0 top-5 text-white font-semibold py-2 px-7 transform -skew-x-12 z-20 transition-all duration-300 group ">
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
      <div className="relative w-full md:w-1/2 flex justify-center items-center  ">
        {/* Outer container with padding and background color */}
        <div className="relative p-3 bg-transparent border-4 dark:border-red-400 border-purple rounded-lg md:rounded-full flex justify-center items-center">
          {/* Inner container for the image */}
          <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] hover:scale-105 md:hover:scale-100 transition-transform duration-75 ease-in-out  rounded-lg md:rounded-full overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="profile"
              layout="fill"
              className="object-cover pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
