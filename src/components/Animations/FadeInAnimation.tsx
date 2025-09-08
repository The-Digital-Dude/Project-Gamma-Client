import React from "react";
import { motion, Variants } from "framer-motion";

interface FadeInAnimationProps {
  index?: number;
  duration: number;
  delay: number;
  yindex?: number;
  children: React.ReactNode;
}

const FadeInAnimation: React.FC<FadeInAnimationProps> = ({
  index,
  duration,
  delay,
  yindex = 50,
  children,
}) => {
  const fadeInAnimationVariants: Variants = {
    initial: {
      opacity: 0,
      y: yindex,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: "easeInOut",
        delay: index ? delay * (index + 1) : delay,
      },
    }),
  };

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index !== undefined ? index : undefined}
    >
      {children}
    </motion.div>
  );
};

export default FadeInAnimation;
