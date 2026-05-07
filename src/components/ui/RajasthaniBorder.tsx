'use client';

import React from 'react';

/**
 * Rajasthani scalloped arch border — inspired by traditional textile/carpet patterns.
 * Renders as a fixed top border across the entire page.
 */
export default function RajasthaniBorder() {
  return (
    <div className="rajasthani-border-top">
      <svg
        width="100%"
        height="24"
        viewBox="0 0 1440 24"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="arch-pattern" x="0" y="0" width="90" height="24" patternUnits="userSpaceOnUse">
            {/* Main arch shape */}
            <path
              d="M0 24 L0 10 Q15 0 30 0 Q45 0 45 10 Q45 0 60 0 Q75 0 90 10 L90 24 Z"
              fill="#8B1A1A"
            />
            {/* Inner decorative arch */}
            <path
              d="M5 24 L5 12 Q18 3 30 3 Q42 3 42 12 L42 24"
              fill="none"
              stroke="#D4A017"
              strokeWidth="1"
              opacity="0.8"
            />
            <path
              d="M48 24 L48 12 Q61 3 73 3 Q85 3 85 12 L85 24"
              fill="none"
              stroke="#D4A017"
              strokeWidth="1"
              opacity="0.8"
            />
            {/* Inner filled arch */}
            <path
              d="M8 24 L8 14 Q20 5 30 5 Q40 5 40 14 L40 24 Z"
              fill="#C41E3A"
              opacity="0.7"
            />
            <path
              d="M50 24 L50 14 Q62 5 73 5 Q83 5 83 14 L83 24 Z"
              fill="#C41E3A"
              opacity="0.7"
            />
            {/* Paisley dots */}
            <circle cx="30" cy="14" r="2" fill="#D4A017" opacity="0.9" />
            <circle cx="73" cy="14" r="2" fill="#D4A017" opacity="0.9" />
            {/* Tiny decoration */}
            <circle cx="30" cy="20" r="1" fill="#D4A017" opacity="0.5" />
            <circle cx="73" cy="20" r="1" fill="#D4A017" opacity="0.5" />
            <circle cx="45" cy="18" r="1.5" fill="#D4A017" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="24" fill="url(#arch-pattern)" />
        {/* Bottom gold line */}
        <line x1="0" y1="23" x2="1440" y2="23" stroke="#D4A017" strokeWidth="1.5" opacity="0.6" />
      </svg>
    </div>
  );
}
