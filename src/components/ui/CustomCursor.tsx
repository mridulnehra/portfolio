'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    let animFrame: number;
    const animateRing = () => {
      ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * 0.15;
      ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPosRef.current.x - 18}px, ${ringPosRef.current.y - 18}px)`;
      }
      animFrame = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    animFrame = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animFrame);
    };
  }, [visible]);

  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '2px solid rgba(139, 26, 26, 0.35)',
          pointerEvents: 'none',
          zIndex: 99998,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.2s',
        }}
      />
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: 'var(--color-accent-maroon)',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.15s',
          boxShadow: '0 0 8px rgba(139, 26, 26, 0.4)',
        }}
      />
    </>
  );
}
