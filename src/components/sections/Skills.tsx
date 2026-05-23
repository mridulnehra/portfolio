'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills, skillConnections } from '@/lib/constants';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hovered, setHovered] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="section-base"
      style={{
        background: 'transparent',
      }}
    >
      {/* Block print pattern — subtle background */}
      <svg aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.03, pointerEvents: 'none' }}>
        <defs>
          <pattern id="block-print" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="40" r="15" fill="none" stroke="var(--color-accent-maroon)" strokeWidth="1" />
            <circle cx="40" cy="40" r="5" fill="var(--color-accent-maroon)" />
            <path d="M25 25 L55 25 L55 55 L25 55 Z" fill="none" stroke="var(--color-accent-maroon)" strokeWidth="0.5" />
            <circle cx="0" cy="0" r="3" fill="var(--color-accent-maroon)" />
            <circle cx="80" cy="0" r="3" fill="var(--color-accent-maroon)" />
            <circle cx="0" cy="80" r="3" fill="var(--color-accent-maroon)" />
            <circle cx="80" cy="80" r="3" fill="var(--color-accent-maroon)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#block-print)" />
      </svg>

      {/* Decorative peacock — right side (hidden on mobile) */}
      {!isMobile && (
        <svg aria-hidden="true" style={{ position: 'absolute', right: 20, top: '30%', opacity: 0.1 }} width="100" height="140" viewBox="0 0 100 140">
          {/* Body */}
          <ellipse cx="50" cy="90" rx="12" ry="20" fill="var(--color-accent-teal)" />
          {/* Neck */}
          <path d="M48 72 Q45 50 50 35" stroke="var(--color-accent-teal)" strokeWidth="6" fill="none" strokeLinecap="round" />
          {/* Head */}
          <circle cx="50" cy="30" r="8" fill="var(--color-accent-teal)" />
          {/* Crest */}
          <line x1="50" y1="22" x2="48" y2="12" stroke="var(--color-accent-gold)" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="22" x2="50" y2="10" stroke="var(--color-accent-gold)" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="22" x2="52" y2="12" stroke="var(--color-accent-gold)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="48" cy="11" r="2" fill="var(--color-accent-gold)" />
          <circle cx="50" cy="9" r="2" fill="var(--color-accent-gold)" />
          <circle cx="52" cy="11" r="2" fill="var(--color-accent-gold)" />
          {/* Eye */}
          <circle cx="46" cy="28" r="2" fill="white" />
          <circle cx="46" cy="28" r="1" fill="var(--color-text-primary)" />
          {/* Beak */}
          <path d="M42 30 L38 32 L42 33" fill="var(--color-accent-gold)" />
          {/* Tail feathers */}
          <path d="M50 100 Q20 80 10 50" stroke="var(--color-accent-teal)" strokeWidth="2" fill="none" />
          <path d="M50 100 Q80 80 90 50" stroke="var(--color-accent-teal)" strokeWidth="2" fill="none" />
          <path d="M50 100 Q15 90 5 70" stroke="var(--color-accent-green)" strokeWidth="1.5" fill="none" />
          <path d="M50 100 Q85 90 95 70" stroke="var(--color-accent-green)" strokeWidth="1.5" fill="none" />
          {/* Eye patterns on tail */}
          <circle cx="15" cy="55" r="6" fill="none" stroke="var(--color-accent-teal)" strokeWidth="1.5" />
          <circle cx="15" cy="55" r="3" fill="var(--color-accent-gold)" />
          <circle cx="85" cy="55" r="6" fill="none" stroke="var(--color-accent-teal)" strokeWidth="1.5" />
          <circle cx="85" cy="55" r="3" fill="var(--color-accent-gold)" />
        </svg>
      )}

      <div style={{ position: 'relative', zIndex: 2 }}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="gradient-text">Skills &amp; Tools</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-subheading"
        >
          Technologies I work with and things I love building
        </motion.p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem',
          maxWidth: '1000px',
          margin: '2.5rem auto 0',
          padding: '0 1rem',
        }}>
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, type: 'spring', stiffness: 200, damping: 20 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="warm-card"
              tabIndex={0}
              role="button"
              aria-label={`${skill.name}: ${skill.description}`}
              style={{
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                textAlign: 'left',
                cursor: 'pointer',
                outline: 'none',
                borderColor: hovered === i ? 'var(--color-accent-teal)' : undefined,
                boxShadow: hovered === i
                  ? '0 8px 30px rgba(14, 142, 138, 0.15)'
                  : 'var(--card-shadow)',
              }}
            >
              <div style={{
                fontSize: '2.2rem',
                background: 'rgba(255,255,255,0.5)',
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
              }}>
                {skill.icon}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.2,
                }}>
                  {skill.name}
                </span>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.4,
                }}>
                  {skill.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
