
import React from 'react';
import { motion } from 'framer-motion';

const WaveDivider = ({ 
  flip = false, 
  color = '#22c55e',
  animate = true,
  intensity = 'medium'
}) => {
  const animationSpeed = intensity === 'low' ? 25 : intensity === 'high' ? 15 : 20;

  if (!animate) {
    return (
      <div className={`w-full ${flip ? 'rotate-180' : ''}`}>
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 md:h-24"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,20 480,100 720,64 C960,28 1200,84 1440,64 L1440,120 L0,120 Z"
            fill={color}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`w-full ${flip ? 'rotate-180' : ''} relative overflow-hidden`}>
      {/* Animated Wave Layer 1 */}
      <motion.svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-16 md:h-24 absolute inset-0"
        preserveAspectRatio="none"
        animate={{
          x: [0, -50, 0],
        }}
        transition={{
          duration: animationSpeed,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <path
          d="M0,64 C240,20 480,100 720,64 C960,28 1200,84 1440,64 L1440,120 L0,120 Z"
          fill={color}
          opacity="0.5"
        />
      </motion.svg>

      {/* Animated Wave Layer 2 */}
      <motion.svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-16 md:h-24 absolute inset-0"
        preserveAspectRatio="none"
        animate={{
          x: [0, 50, 0],
        }}
        transition={{
          duration: animationSpeed * 1.3,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <path
          d="M0,80 C240,40 480,110 720,80 C960,50 1200,90 1440,80 L1440,120 L0,120 Z"
          fill={color}
          opacity="0.7"
        />
      </motion.svg>

      {/* Static Wave Layer (Main) */}
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-16 md:h-24 relative"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64 C240,20 480,100 720,64 C960,28 1200,84 1440,64 L1440,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
