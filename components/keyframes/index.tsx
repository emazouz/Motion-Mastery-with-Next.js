// import { motion } from 'motion/react'  if 'use client' is used
import * as motion from "motion/react-client"; // if server components are used

function KeyframesMotion() {
  // keyframes: [0, 100, 0]

  return (
    <>
      <motion.div
        className="box"
        animate={{
          opacity: 1,
          scale: [1, 2, 2, 3, 4, 3, 2, 1],
          rotate: [0, 0, 270, 270, 0],
          backgroundColor: [
            "#ff0000",
            "#00ff00",
            "#0000ff",
            "#ff00ff",
            "#ffff00",
            "#00ffff",
            "#ffffff",
            "#ff0000",
          ],
          borderRadius: [
            "0%",
            "0%",
            "20%",
            "50%",
            "80%",
            "100%",
            "80%",
            "50%",
            "20%",
            "0%",
            "0%",
            "0%",
          ],
        }}
        transition={{
          duration: 5,
          // repeat: Infinity,
          // repeatType: "loop",
        }}
      />
    </>
  );
}

export default KeyframesMotion;
