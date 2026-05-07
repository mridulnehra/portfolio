'use client';

import React from 'react';
import { SITE_CONFIG } from '@/lib/constants';

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #E8C98E 0%, #C9956B 100%)',
      padding: '3rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Fort silhouette */}
      <svg style={{ position: 'absolute', bottom: 0, left: 0, right: 0, opacity: 0.15 }} viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path
          d="M0 60 L0 30 L30 30 L30 20 L40 15 L50 20 L50 30 L90 30 L90 22 L100 14 L110 22 L110 30 L160 30 L160 18 L170 10 L175 5 L180 10 L180 18 L230 18 L230 30 L280 30 L280 25 L290 18 L300 25 L300 30 L350 30 L350 20 L360 12 L370 20 L370 30 L440 30 L440 25 L450 18 L460 25 L460 30 L530 30 L530 22 L540 14 L545 8 L550 14 L550 22 L600 22 L600 30 L680 30 L680 24 L690 16 L700 24 L700 30 L760 30 L760 20 L770 12 L780 20 L780 30 L860 30 L860 25 L870 18 L880 25 L880 30 L960 30 L960 22 L970 14 L975 8 L980 14 L980 22 L1040 22 L1040 30 L1120 30 L1120 24 L1130 16 L1140 24 L1140 30 L1220 30 L1220 20 L1230 12 L1240 20 L1240 30 L1320 30 L1320 25 L1330 18 L1340 25 L1340 30 L1440 30 L1440 60 Z"
          fill="var(--color-accent-maroon)"
        />
      </svg>

      {/* Decorative border */}
      <div style={{
        width: 60,
        height: 3,
        borderRadius: 2,
        background: 'linear-gradient(90deg, var(--color-accent-maroon), var(--color-accent-gold), var(--color-accent-maroon))',
        marginBottom: '0.25rem',
      }} />

      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.85rem',
        fontWeight: 600,
        color: 'var(--color-text-primary)',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        Designed & coded by {SITE_CONFIG.name}
      </p>

      <p style={{
        fontFamily: 'var(--font-display)',
        fontSize: '0.95rem',
        color: 'var(--color-text-muted)',
        position: 'relative',
        zIndex: 1,
      }}>
        From Rajasthan, to the internet ✦
      </p>
    </footer>
  );
}
