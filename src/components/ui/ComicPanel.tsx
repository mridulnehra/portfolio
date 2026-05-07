'use client';

import React from 'react';

interface ComicPanelProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function ComicPanel({ title, children, className = '' }: ComicPanelProps) {
  return (
    <div
      className={`wobble ${className}`}
      style={{
        border: 'var(--border-cartoon)',
        borderRadius: 'var(--border-radius-cartoon)',
        overflow: 'hidden',
        background: 'rgba(11, 11, 31, 0.6)',
      }}
    >
      {title && (
        <div
          style={{
            background: 'var(--color-accent-saffron)',
            color: '#0B0B1F',
            padding: '0.5rem 1rem',
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            fontWeight: 700,
            letterSpacing: '0.5px',
          }}
        >
          {title}
        </div>
      )}
      <div style={{ padding: '1.5rem' }}>{children}</div>
    </div>
  );
}
