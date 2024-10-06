import {Abouts  } from "@/config/About";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="dark:bg-about bg-welcome-l w-full h-full pb-10" id="about">
      <div className="max-screen flex flex-col items-start justify-center gap-3">
        <h3 className="text-xl font-extralight">INTERDUCTION</h3>
        <h1 className="font-extrabold text-5xl ">Overview.</h1>
        <p className="max-w-3xl font-light">
          I&apos;m a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I&apos;m a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let&apos;s work together to bring your ideas to life!
        </p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-content-center gap-4 mt-10">
            {
              Abouts.map((items,idx)=>(
                <div key={idx} className=" min-h-[280px] flex items-center justify-center flex-col gap-5 
                dark:bg-[rgba(39,51,89,.4)] hover:scale-105 transition-transform  duration-300 ease-in-out 
                bg-[#ffffffbd] shadow-blue-glassmorphism rounded-md dark:border-[#7775abf1] border">

                  <Image src={items.icon} alt={items.icon} width={items.w} height={items.h} className="object-contain"/>
                  <h1 className="font-extrabold line-clamp-2 max-w-60"> {items.title}</h1>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  );
};

export default About;
