import React from "react";
import Image from "next/image";
import { socialMedia } from "@/config/Footer";

const Footer = () => {
  return (
    <footer className="" id="contact">
      <div className="flex py-10  md:flex-row flex-col justify-between dark:text-white text-black items-center max-screen gap-3 md:gap-0">
        <p className="md:text-base text-sm md:font-normal font-light ">
          Copyright © 2024 Xashadulop
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter 
                backdrop-blur-lg saturate-180 bg-opacity-75 bg-black hover:bg-purple dark:text-purple 
                transition-transform duration-300 ease-in-out transform hover:scale-110 text-green-400 
                rounded-lg border border-black-300"
            >
              <a href={info.link}>
                <Image src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
