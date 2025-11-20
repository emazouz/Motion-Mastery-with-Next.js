"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const variants = {
  hidden: { opacity: 0, y: -70 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: {
    scale: 1.1,
    transition: { duration: 0.3 },
  },
  click: {
    scale: 0.9,
    transition: { duration: 0.3 },
  },
  exit: { opacity: 0, y: -70, transition: { duration: 0.5 } },
};

function VariantsMotion() {
  const [showText, setShowText] = useState(false);

  const handleButtonClick = () => {
    setShowText((prev) => !prev);
  };

  return (
    <motion.div className="max-w-md mx-auto space-y-4">
      <motion.button
        whileHover={{
          backgroundColor: ["#0ff", "#0f0", "#066"],
          transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5,
          },
        }}
        className="px-4 py-2 cursor-pointer bg-red-600 rounded font-semibold"
        onClick={handleButtonClick}
      >
        {showText ? "Hide" : "Show"} Text
      </motion.button>

      <AnimatePresence mode="wait">
        {showText && (
          <motion.p
            className="font-sans font-light"
            variants={variants}
            initial="hidden"
            animate="visible"
            whileTap={"click"}
            whileHover={"hover"}
            exit="exit"
            key="text-content"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
            animi voluptatum molestiae reprehenderit sint ea, eligendi tenetur
            dignissimos blanditiis cupiditate voluptas quos sed facere libero
            porro quibusdam suscipit autem ducimus?
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default VariantsMotion;
