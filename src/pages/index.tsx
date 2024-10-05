import Hero from "@/components/Home/Hero";
import About from "@/components/SECTIONS/About";
import Contact from "@/components/SECTIONS/Contact";
import Project from "@/components/SECTIONS/Project";
import React from "react";

const index = () => {
  return (
    <div className="dark:bg-black dark:text-white bg-white text-black w-full h-full">
      <main className="dark:bg-welcome  bg-welcome-l  ">
        <Hero />
      </main>
      <About />
     

      <Project/>

      <Contact/>
    </div>
  );
};

export default index;
