
import React, { useState } from "react";
import { Button } from "../ui/moving-border";
import { ProjectData } from "@/config/project";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "../ui/MagicButton";
import { useTheme } from "next-themes";
const lightModeStyles = {
  background: "rgb(245, 243, 243)", 
  backgroundColor: "linear-gradient(90deg, rgba(245, 243, 243, 1) 0%, rgba(247, 247, 247, 1) 100%)", // Light gradient
  borderRadius: `calc(1.75rem * 0.96)`,
  
};

// Dark Mode Styles
const darkModeStyles = {
  background: "black",
  backgroundColor: "linear-gradient(90deg, rgba(4, 7, 29, 1) 0%, rgba(12, 14, 35, 1) 100%)",
  borderRadius: `calc(1.75rem * 0.96)`,
};
const Project = () => {
  const {theme} =useTheme()
  const [projectLimit, setProjectLimit] = useState(4);

  // Function to load 2 more projects
  const handleShowMore = () => {
    setProjectLimit((prevLimit) => prevLimit + 2);
  };
  return (
    <div className="max-screen  mt-10" id="project">
      <h1 className="text-[30px] md:text-[40px] xl:text-[64px] w-full tracking-widest text-center uppercase font-extrabold">
        pro<span className="text-purple">j</span>ect
      </h1>

      <div className="w-full mt-12 grid md:grid-cols-2 grid-cols-1 gap-10">
      {ProjectData.slice(0, projectLimit).map((items) => (
          <Button
            key={items.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={theme=="dark" ?darkModeStyles :lightModeStyles }
            className={`dark:text-white text-black dark:border-[#8783bc]  w-full`}
          >
            <a href={items.link} target="_blank" className="block w-full h-full">
              <div className="w-full h-full flex flex-col p-4 gap-5">
          
                <div className="relative w-full inset-0 h-full"> 
                  <img
                    src={items.img}
                    alt={items.title}
                
                   
                    className="rounded-lg object-cover"
                  />
                </div>
               <h1 className="text-start font-bold lg:text-2xl md:text-xl text-black dark:text-white text-base ">
                {items.title}
              </h1>
            
              <p
                className="lg:text-xl text-start text-[#0b4546] dark:text-[#BEC1DD] lg:font-normal font-light text-sm "
                style={{
               
                  margin: "1vh 0",
                }}
              >
                {items.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {items.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
              </div>
            </a>
          </Button>
        ))}
      </div>
      {projectLimit < ProjectData.length && (
        <div className="w-full text-center mt-8">
          <MagicButton
          title="Show More"
          handleBtn={handleShowMore}
            otherClasses="bg-purple text-white px-6 py-3 rounded-lg"
         />
        </div>
      )}
    </div>
  );
};

export default Project;