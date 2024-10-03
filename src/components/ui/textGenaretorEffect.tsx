"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/cn";
interface Props {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}
const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.1,
}: Props) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 0.5,
        delay: stagger(0.1),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`${
                idx === 1
                  ? "bg-clip-text text-transparent bg-gradient-to-r font-extrabold text-2xl  from-[#4ca5ffce] to-[#b673f8c9]"
                  : "dark:text-white text-black"
              } opacity-0`}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-normal", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-black text-xl tracking-[1px] leading-snug ">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
export default TextGenerateEffect;
