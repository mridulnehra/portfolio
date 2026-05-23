'use client';

import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface SectionSlideProps {
  children: React.ReactNode;
  scrollProgress: MotionValue<number>;
  /** The normalised range [start, end] within global scroll where this section lives */
  range: [number, number];
  id?: string;
  isFirst?: boolean;
}

export default function SectionSlide({ children, scrollProgress, range, id, isFirst }: SectionSlideProps) {
  const [start, end] = range;
  const span = end - start;

  // Fade in quickly over first 10%, full for middle 80%, fade out over last 10%
  const fadeIn = start;
  const fadeInDone = start + span * 0.10;
  const fadeOutStart = end - span * 0.10;
  const fadeOut = end;

  const opacity = useTransform(
    scrollProgress,
    [fadeIn, fadeInDone, fadeOutStart, fadeOut],
    isFirst ? [1, 1, 1, 0] : [0, 1, 1, 0],
  );

  return (
    <div
      id={id}
      style={{
        height: '100vh',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <motion.div
          style={{
            opacity,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            willChange: 'transform, opacity',
          }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
