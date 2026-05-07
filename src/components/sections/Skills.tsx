'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, MotionValue } from 'framer-motion';
import { skills, skillConnections } from '@/lib/constants';

interface SkillsProps {
  scrollProgress?: MotionValue<number>;
}

export default function Skills({ scrollProgress }: SkillsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hovered, setHovered] = useState<number | null>(null);

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
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.03, pointerEvents: 'none' }}>
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

      {/* Decorative peacock — right side */}
      <svg style={{ position: 'absolute', right: 20, top: '30%', opacity: 0.1 }} width="100" height="140" viewBox="0 0 100 140">
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

      <div style={{ position: 'relative', zIndex: 2 }}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="gradient-text">Skills & Tools</span>
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
          position: 'relative', width: '100%', maxWidth: '900px',
          height: '500px', margin: '0 auto',
        }}>
          {/* Connection lines */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            {skillConnections.map(([from, to], i) => {
              const f = skills[from], t = skills[to];
              const isConnected = hovered === from || hovered === to;
              return (
                <line key={i}
                  x1={`${f.x}%`} y1={`${f.y}%`} x2={`${t.x}%`} y2={`${t.y}%`}
                  stroke={isConnected ? 'var(--color-accent-teal)' : 'rgba(139, 26, 26, 0.1)'}
                  strokeWidth={isConnected ? 2 : 1}
                  strokeDasharray={isConnected ? 'none' : '6 4'}
                  style={{ transition: 'all 0.3s ease' }}
                />
              );
            })}
          </svg>

          {/* Skill nodes */}
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 * i, type: 'spring', stiffness: 200, damping: 15 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: 'absolute',
                left: `${skill.x}%`,
                top: `${skill.y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: hovered === i ? 10 : 1,
              }}
            >
              {hovered === i && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginBottom: 12,
                    whiteSpace: 'nowrap',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    border: '1.5px solid rgba(139, 26, 26, 0.15)',
                    backdropFilter: 'blur(8px)',
                    fontSize: '0.8rem',
                    color: 'var(--color-text-muted)',
                    fontFamily: 'var(--font-body)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                  }}
                >
                  {skill.description}
                </motion.div>
              )}
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="warm-card"
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: '50%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  borderColor: hovered === i ? 'rgba(14, 142, 138, 0.4)' : undefined,
                  boxShadow: hovered === i
                    ? '0 4px 24px rgba(14, 142, 138, 0.15)'
                    : 'var(--card-shadow)',
                }}
              >
                <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>{skill.icon}</span>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  color: 'var(--color-text-muted)',
                  marginTop: 4,
                  textAlign: 'center',
                  lineHeight: 1.1,
                }}>
                  {skill.name}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
