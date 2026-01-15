// import { motion } from 'motion/react'  if 'use client' is used
import * as motion from "motion/react-client"; // if server components are used
function TestOne() {
  return (
    <div className="flex gap-3 ">
      {[...Array(4)].map((_, index) => (
        <motion.div
          key={index}
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 1, delay: index * 0.2 }}
          className="w-7 h-7 bg-green-400 rounded-full"
        />
      ))}
    </div>
  );
}

export default TestOne;
