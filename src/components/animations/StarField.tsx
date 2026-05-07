'use client';

import React, { useMemo } from 'react';

interface StarFieldProps {
  count?: number;
  minSize?: number;
  maxSize?: number;
  minOpacity?: number;
  maxOpacity?: number;
}

export default function StarField({
  count = 80,
  minSize = 1,
  maxSize = 2.5,
  minOpacity = 0.15,
  maxOpacity = 0.6,
}: StarFieldProps) {
  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: minSize + Math.random() * (maxSize - minSize),
      opacity: minOpacity + Math.random() * (maxOpacity - minOpacity),
      driftX: (Math.random() - 0.5) * 20,
      driftY: (Math.random() - 0.5) * 20,
      duration: 10 + Math.random() * 15,
      delay: Math.random() * 5,
    }));
  }, [count, minSize, maxSize, minOpacity, maxOpacity]);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      {stars.map((star) => (
        <span
          key={star.id}
          style={{
            position: 'absolute',
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: '50%',
            background: 'var(--color-text-primary)',
            opacity: star.opacity,
            animation: `star-drift ${star.duration}s infinite alternate ease-in-out`,
            animationDelay: `${star.delay}s`,
            ['--drift-x' as string]: `${star.driftX}px`,
            ['--drift-y' as string]: `${star.driftY}px`,
            boxShadow: star.size > 2
              ? '0 0 4px rgba(241, 245, 249, 0.3)'
              : 'none',
          }}
        />
      ))}
    </div>
  );
}
