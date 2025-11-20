// import { motion } from 'motion/react'  if 'use client' is used
import * as motion from "motion/react-client"; // if server components are used

function TransitionsMotion() {
    // transition={{ duration: 2 }}
    // animate={{ easing: 1 }}
    // animate={{ delay: 1: 1 }}



  return (
       <>
         <motion.div
           className="box"
           initial={{ opacity: 0, scale: 0.5, x: -200 }}
           animate={{ opacity: 1, scale: 1, x: 0 }}
           // transition={{ delay: 2}}
           // transition={{ duration: 2}}
           // transition={{ ease: 'easeIn',  duration: 2}}
           // transition={{ ease: 'easeOut', duration: 2}}
           // transition={{ ease: "easeInOut", duration: 2 }}
           transition={{ ease: "linear", duration: 2 }}
         />
       </>
  )
}

export default TransitionsMotion
