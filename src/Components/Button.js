import React from "react";
import { motion } from "framer-motion";
function Button(props) {
  return (
    <motion.div
    whileHover={{ scale: 1, rotate: 1 }}
  >
      <button
        onClick={props.onClick}
        className=" bg-[#2d343f] text-white px-4 py-2 rounded-md hover:bg-zinc-900 focus:outline-none md:translate-x-[-82%] sm:translate-y-[60%] translate-y-[20%] translate-x-[-10%] text-[14px]  md:text-sm sm:translate-x-[-20%] md:translate-y-[70%] transition-all duration-300 ease-in-out flex items-center gap-2"
      >
        <motion.span
          whileHover={{ scale: 1, rotate: 10 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "50%",
          }}
        >
          {props.icon}
        </motion.span>
        <span>{props.value}</span>
      </button>
    </motion.div>
  );
}

export default Button;
