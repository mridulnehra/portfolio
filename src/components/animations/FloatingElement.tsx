'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  children: React.ReactNode;
  speed?: number;
  distance?: number;
  className?: string;
}

export default function FloatingElement({ children, speed = 5, distance = -8, className = '' }: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, distance, 0],
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}
