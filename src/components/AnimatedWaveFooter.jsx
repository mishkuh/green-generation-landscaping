
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedWaveFooter = ({ color = '#22c55e' }) => {
  return (
    <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
      {/* Animated Wave Layer 1 */}
      <motion.svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full absolute inset-0"
        preserveAspectRatio="none"
        animate={{
          x: [0, -100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <path
          d="M0,40 C240,10 480,70 720,40 C960,10 1200,60 1440,40 L1440,0 L0,0 Z"
          fill={color}
          opacity="0.3"
        />
      </motion.svg>

      {/* Animated Wave Layer 2 */}
      <motion.svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full absolute inset-0"
        preserveAspectRatio="none"
        animate={{
          x: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <path
          d="M0,60 C240,30 480,90 720,60 C960,30 1200,80 1440,60 L1440,0 L0,0 Z"
          fill={color}
          opacity="0.5"
        />
      </motion.svg>

      {/* Main Wave Layer */}
      <motion.svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full absolute inset-0"
        preserveAspectRatio="none"
        animate={{
          x: [0, -75, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <path
          d="M0,64 C240,20 480,100 720,64 C960,28 1200,84 1440,64 L1440,0 L0,0 Z"
          fill="#fafaf9"
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedWaveFooter;
