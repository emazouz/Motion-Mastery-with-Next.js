// import { motion } from 'motion/react'  if 'use client' is used
import * as motion from "motion/react-client"; // if server components are used
function AnimateMotion() {
  // animate={{ x: 100}}
  // animate={{ y: 100}}
  // animate={{ rotateX: 100}}
  // animate={{ rotateY: 100}}
  // animate={{ rotate: 100}}
  // animate={{ scaleX: 3}}
  // animate={{ scaleY: 3}}
  // animate={{ scale: 3}}
  // animate={{ skewX: 30}}
  // animate={{ skewY: 30}}
  // animate={{ skew: 30}}
  return (
    <div className="space-y-2">
      <motion.div className="box rounded" animate={{ x: 100 }} />{" "}
      <motion.div className="box rounded" animate={{ y: 100 }} />{" "}
      <motion.div className="box rounded" animate={{ rotateX: 60 }} />{" "}
      <motion.div className="box rounded" animate={{ rotateY: 60 }} />{" "}
      <motion.div className="box rounded" animate={{ rotate: 20 }} />{" "}
      <motion.div className="box rounded" animate={{ scaleX: 2 }} />{" "}
      <motion.div className="box rounded" animate={{ scaleY: 2 }} />{" "}
      <motion.div className="box rounded" animate={{ scale: 2 }} />{" "}
      <motion.div className="box rounded" animate={{ skewX: 10 }} />{" "}
      <motion.div className="box rounded" animate={{ skewY: 10 }} />{" "}
      <motion.div className="box rounded" animate={{ skewY: 10, skewX: 10 }} />
    </div>
  );
}

export default AnimateMotion;
