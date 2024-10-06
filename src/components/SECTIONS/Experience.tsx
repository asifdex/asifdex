import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { textVariant } from "@/utils/motion";
import { experiences } from "@/config/Experience";
import { useTheme } from "next-themes";
import { ExperienceCardProps } from "@/types";

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const { theme } = useTheme();
  const dark = {
    background: "#1d1836",
    color: "#fff",
  };
  const light = {
    background: "white",
    backgroundOpacity: "40",
    color: "#000",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
  };

  return (
    <VerticalTimelineElement
      contentStyle={theme == "dark" ? dark : light}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="dark:text-white text-black text-[24px] font-bold">
          {experience.title}
        </h3>
        <p
          className="dark:text-white text-black  text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience: React.FC = () => {
  const { theme } = useTheme();
  const bar = {
    darkBar: "timeline-dark",
    bar: "timeline-light",
  };

  return (
    <div className="dark:bg-black bg-white relative overflow-hidden" id="experience">

    <h1 className="text-[30px] md:text-[40px] xl:text-[64px] w-full tracking-widest text-center uppercase font-extrabold">
      Work <span className="text-purple">Experience</span>  </h1>
      {/* sun effect in bg  */}
      <div className={`sun-effect animate-sun-move top-10 left-10`} />
      <div className={`sun-effect animate-sun-move top-60 right-20`} />
      <div className={`sun-effect animate-sun-move bottom-10 left-52`} />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div variants={textVariant()}></motion.div>
      </div>

      {/* Your vertical timeline code goes here */}
      <div
        className={`mt-20 flex flex-col ${
          theme == "dark" ? bar.darkBar : bar.bar
        }`}
      >
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
