"use client"; // Framer Motion hooks require Client Components

import { motion, Variants } from "framer-motion";
import React from "react";

// Component for elements that fade in when they scroll into view
interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number; // Vertical slide distance
  once?: boolean; // Animate only once?
}

export const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  yOffset = 20, // Default slide distance
  once = true, // Default to animating only once
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: once, amount: 0.2 }} // Adjust amount (0 to 1) for when animation triggers
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay,
            duration,
            ease: "easeOut",
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Component for elements that fade in immediately on load (e.g., Hero section)
interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    yOffset?: number; // Vertical slide distance
}

export const FadeIn: React.FC<FadeInProps> = ({
    children,
    className,
    delay = 0,
    duration = 0.5,
    yOffset = 20, // Default slide distance
}) => {
     return (
        <motion.div
          initial="hidden"
          animate="visible" // Animate immediately
          variants={{
            hidden: { opacity: 0, y: yOffset },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay,
                duration,
                ease: "easeOut",
              },
            },
          }}
          className={className}
        >
          {children}
        </motion.div>
      );
} 