'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface DrawingLineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay?: number;
  color?: string;
}

export default function DrawingLine({ x1, y1, x2, y2, delay = 0, color = 'var(--color-accent-cyan)' }: DrawingLineProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  return (
    <line
      ref={ref}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={color}
      strokeWidth="1"
      opacity="0.3"
      strokeDasharray={length}
      strokeDashoffset={isInView ? 0 : length}
      style={{
        transition: `stroke-dashoffset 1.5s ease ${delay}s`,
      }}
    />
  );
}
