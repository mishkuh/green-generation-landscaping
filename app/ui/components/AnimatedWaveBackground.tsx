"use client"

import React from 'react';
import { motion } from 'framer-motion';

interface Props {
    height?: string;
    opacity?: number;
    color?: string;
    intensity?: 'low' | 'medium' | 'high';
}

const AnimatedWaveBackground = ({
    height = '100%',
    opacity = 0.15,
    color = '#22c55e',
    intensity = 'medium'
}: Props) => {
    const animationSpeed = intensity === 'low' ? 25 : intensity === 'high' ? 15 : 20;

    return (
        <div className="absolute inset-0 overflow-hidden" style={{ height }}>
            {/* Wave Layer 1 - Slowest */}
            <motion.svg
                className="absolute bottom-0 left-0 w-full"
                style={{ opacity: opacity * 0.6 }}
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                animate={{
                    x: [0, -100, 0],
                }}
                transition={{
                    duration: animationSpeed * 1.5,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <path
                    fill={color}
                    d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
            </motion.svg>

            {/* Wave Layer 2 - Medium Speed */}
            <motion.svg
                className="absolute bottom-0 left-0 w-full"
                style={{ opacity: opacity * 0.8 }}
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                animate={{
                    x: [0, 100, 0],
                }}
                transition={{
                    duration: animationSpeed,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <path
                    fill={color}
                    d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,154.7C672,160,768,192,864,197.3C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
            </motion.svg>

            {/* Wave Layer 3 - Fastest */}
            <motion.svg
                className="absolute bottom-0 left-0 w-full"
                style={{ opacity }}
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                animate={{
                    x: [0, -150, 0],
                }}
                transition={{
                    duration: animationSpeed * 0.8,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <path
                    fill={color}
                    d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,197.3C672,192,768,160,864,144C960,128,1056,128,1152,138.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
            </motion.svg>

            {/* Breathing Opacity Animation */}
            <motion.div
                className="absolute inset-0"
                style={{ background: color }}
                animate={{
                    opacity: [opacity * 0.3, opacity * 0.5, opacity * 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
};

export default AnimatedWaveBackground;
