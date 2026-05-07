'use client';

import React from 'react';

interface CartoonCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function CartoonCard({ children, className = '', hoverEffect = true }: CartoonCardProps) {
  return (
    <div
      className={`cartoon-card ${className}`}
      style={{
        border: 'var(--border-cartoon)',
        borderRadius: 'var(--border-radius-cartoon)',
        boxShadow: 'var(--shadow-cartoon)',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
        ...(hoverEffect ? {} : {}),
      }}
      onMouseEnter={(e) => {
        if (hoverEffect) {
          e.currentTarget.style.boxShadow = 'var(--shadow-cartoon-hover)';
          e.currentTarget.style.transform = 'translate(-2px, -2px)';
        }
      }}
      onMouseLeave={(e) => {
        if (hoverEffect) {
          e.currentTarget.style.boxShadow = 'var(--shadow-cartoon)';
          e.currentTarget.style.transform = 'translate(0, 0)';
        }
      }}
    >
      {children}
    </div>
  );
}
