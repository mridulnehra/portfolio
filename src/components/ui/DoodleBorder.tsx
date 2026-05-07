'use client';

import React from 'react';

interface DoodleBorderProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export default function DoodleBorder({ children, className = '', animate = true }: DoodleBorderProps) {
  return (
    <div
      className={`${animate ? 'wobble' : ''} ${className}`}
      style={{
        border: 'var(--border-cartoon)',
        borderRadius: 'var(--border-radius-cartoon)',
        position: 'relative',
        padding: '2rem',
      }}
    >
      {/* Hand-drawn corner hatching marks */}
      <svg style={{ position: 'absolute', top: -4, left: -4, width: 20, height: 20 }} viewBox="0 0 20 20">
        <line x1="0" y1="5" x2="5" y2="0" stroke="var(--color-accent-saffron)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="0" y1="10" x2="10" y2="0" stroke="var(--color-accent-saffron)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <svg style={{ position: 'absolute', top: -4, right: -4, width: 20, height: 20 }} viewBox="0 0 20 20">
        <line x1="15" y1="0" x2="20" y2="5" stroke="var(--color-accent-saffron)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="0" x2="20" y2="10" stroke="var(--color-accent-saffron)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <svg style={{ position: 'absolute', bottom: -4, left: -4, width: 20, height: 20 }} viewBox="0 0 20 20">
        <line x1="0" y1="15" x2="5" y2="20" stroke="var(--color-accent-saffron)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="0" y1="10" x2="10" y2="20" stroke="var(--color-accent-saffron)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <svg style={{ position: 'absolute', bottom: -4, right: -4, width: 20, height: 20 }} viewBox="0 0 20 20">
        <line x1="20" y1="15" x2="15" y2="20" stroke="var(--color-accent-saffron)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="10" x2="10" y2="20" stroke="var(--color-accent-saffron)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      {children}
    </div>
  );
}
