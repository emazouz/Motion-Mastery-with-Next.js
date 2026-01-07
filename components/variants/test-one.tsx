"use client";
import { type Variants, motion } from "motion/react";
import { useState } from "react";

function TestOne() {
  const [isFlipped, setIsFlipped] = useState(false);

  // variant
  const variants: Variants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  return (
    <motion.div className="perspective-1000">
      <motion.div
        className="w-70 h-70 bg-white rounded-lg transform-style-3d"
        variants={variants}
        animate={isFlipped ? "back" : "front"}
        onClick={() => setIsFlipped(!isFlipped)}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="absolute inset-0 flex items-center justify-center text-black font-bold text-2xl backface-visibility-hidden">
          Front Side
        </motion.div>
        <motion.div className="absolute inset-0 flex items-center justify-center text-black bg-red-500 font-bold text-2xl rotate-y-180 rounded-lg backface-visibility-hidden">
          Back Side
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default TestOne;
