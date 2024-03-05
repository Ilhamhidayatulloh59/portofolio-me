import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface AnimasiProps {
  children: ReactNode;
  direction: "left" | "right";
  delay?: number;
}

const Animasi: React.FC<AnimasiProps> = ({ children, direction, delay = 0 }) => {
  const variants = {
    hidden: { opacity: 0, x: direction === "left" ? "-100%" : "100%" },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export default Animasi;
