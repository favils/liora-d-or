'use client'
import React from "react";
import { motion } from "framer-motion";

const FadeInText = ({ text, className }) => {
  return (
    <div className={className}>
      {text.split("").map((letter, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 12, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: idx * 0.05 }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
};

export default FadeInText;
