import React from "react";
import { staggerContainer } from "@/utils/motion";
import { motion, Variants } from "framer-motion";


// Define types for the Component and idName
interface StarWrapperProps {
  idName: string;
}

// Higher-Order Component (HOC) that wraps another component
const StarWrapper = <P extends object>(
  Component: React.ComponentType<P>,
  idName: string
): React.FC<P & StarWrapperProps> =>
  function HOC(props: P) {
    return (
      <motion.section
        variants={staggerContainer(0.1, 0.1) as Variants} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`p-10 max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        {/* Spread props to pass them down to the component */}
        <Component {...props} />
      </motion.section>
    );
  };

export default StarWrapper;
