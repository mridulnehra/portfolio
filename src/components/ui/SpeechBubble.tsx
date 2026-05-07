'use client';

import React from 'react';

interface SpeechBubbleProps {
  text: string;
  className?: string;
  position?: 'top' | 'bottom';
}

export default function SpeechBubble({ text, className = '', position = 'top' }: SpeechBubbleProps) {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        display: 'inline-block',
        background: 'var(--color-bg-secondary)',
        border: '2px solid var(--color-text-primary)',
        borderRadius: '16px 16px 16px 4px',
        padding: '0.75rem 1.25rem',
        fontFamily: 'var(--font-display)',
        fontSize: '1rem',
        color: 'var(--color-text-primary)',
        maxWidth: '260px',
      }}
    >
      {text}
      {/* Speech bubble tail */}
      <svg
        style={{
          position: 'absolute',
          ...(position === 'bottom' ? { bottom: -12, left: 20 } : { top: -12, left: 20, transform: 'rotate(180deg)' }),
          width: 20,
          height: 14,
        }}
        viewBox="0 0 20 14"
      >
        <path
          d="M0 0 Q5 14 20 10 Q10 8 8 0 Z"
          fill="var(--color-bg-secondary)"
          stroke="var(--color-text-primary)"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
