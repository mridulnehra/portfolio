'use client';

import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { aiProjects } from '@/lib/constants';

const statusConfig = {
  live: { label: 'Live', color: '#2E7D32', bg: 'rgba(46, 125, 50, 0.08)', border: 'rgba(46, 125, 50, 0.25)' },
  building: { label: 'Building', color: '#E8650A', bg: 'rgba(232, 101, 10, 0.08)', border: 'rgba(232, 101, 10, 0.25)' },
  experiment: { label: 'Experiment', color: '#C71585', bg: 'rgba(199, 21, 133, 0.06)', border: 'rgba(199, 21, 133, 0.2)' },
};

interface AILabProps {
  scrollProgress?: MotionValue<number>;
}

export default function AILab({ scrollProgress }: AILabProps) {
  // Text color transitions during sunset phase
  const textColor = scrollProgress 
    ? useTransform(scrollProgress, [0.57, 0.71], ['#2D1B0E', '#F5E6D0'])
    : '#2D1B0E';
    
  const textMuted = scrollProgress
    ? useTransform(scrollProgress, [0.57, 0.71], ['#6B5744', '#B8AA99'])
    : '#6B5744';

  const cardStyle = scrollProgress
    ? useTransform(scrollProgress, [0.57, 0.71], ['rgba(255, 255, 255, 0.75)', 'rgba(20, 20, 40, 0.5)'])
    : 'rgba(255, 255, 255, 0.75)';

  return (
    <section
      id="lab"
      className="section-base"
      style={{
        background: 'transparent',
      }}
    >
      {/* Mehndi/henna pattern — subtle background */}
      <svg style={{ position: 'absolute', left: '5%', top: '15%', opacity: 0.06 }} width="120" height="160" viewBox="0 0 120 160">
        <path d="M60 10 Q90 40 80 80 Q70 120 60 150 Q50 120 40 80 Q30 40 60 10Z" fill="none" stroke="var(--color-accent-maroon)" strokeWidth="2" />
        <path d="M60 30 Q78 50 72 80 Q65 105 60 120 Q55 105 48 80 Q42 50 60 30Z" fill="none" stroke="var(--color-accent-saffron)" strokeWidth="1.5" />
        <circle cx="60" cy="60" r="10" fill="none" stroke="var(--color-accent-maroon)" strokeWidth="1" />
        <circle cx="60" cy="60" r="4" fill="var(--color-accent-gold)" />
        <circle cx="60" cy="90" r="6" fill="none" stroke="var(--color-accent-maroon)" strokeWidth="1" />
        <circle cx="60" cy="90" r="2" fill="var(--color-accent-maroon)" />
        {/* Decorative dots */}
        <circle cx="50" cy="45" r="2" fill="var(--color-accent-maroon)" />
        <circle cx="70" cy="45" r="2" fill="var(--color-accent-maroon)" />
        <circle cx="45" cy="70" r="2" fill="var(--color-accent-saffron)" />
        <circle cx="75" cy="70" r="2" fill="var(--color-accent-saffron)" />
      </svg>

      {/* Pottery/Matka — right side */}
      <svg style={{ position: 'absolute', right: 30, bottom: '18%', opacity: 0.1 }} width="60" height="80" viewBox="0 0 60 80">
        <ellipse cx="30" cy="60" rx="25" ry="18" fill="var(--color-accent-saffron)" />
        <ellipse cx="30" cy="30" rx="18" ry="25" fill="var(--color-accent-saffron)" />
        <ellipse cx="30" cy="10" rx="10" ry="5" fill="none" stroke="var(--color-accent-maroon)" strokeWidth="2" />
        {/* Pattern bands */}
        <line x1="12" y1="35" x2="48" y2="35" stroke="var(--color-accent-maroon)" strokeWidth="1.5" />
        <line x1="15" y1="45" x2="45" y2="45" stroke="var(--color-accent-gold)" strokeWidth="1" />
        {/* Dots pattern */}
        <circle cx="22" cy="40" r="2" fill="var(--color-accent-maroon)" />
        <circle cx="30" cy="40" r="2" fill="var(--color-accent-maroon)" />
        <circle cx="38" cy="40" r="2" fill="var(--color-accent-maroon)" />
      </svg>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <motion.span className="gradient-text" style={{ color: textColor }}>The Lab</motion.span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-subheading"
          style={{ color: textMuted }}
        >
          Experiments, fails, breakthroughs. Repeat.
        </motion.p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.25rem',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {aiProjects.map((project, i) => {
            const status = statusConfig[project.status];
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="warm-card"
                style={{
                  padding: '1.5rem',
                  borderLeft: `3px solid ${status.color}`,
                  background: cardStyle as any,
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.75rem',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--color-text-subtle)',
                    letterSpacing: '0.1em',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{
                    fontSize: '0.75rem',
                    color: status.color,
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    padding: '0.15rem 0.6rem',
                    borderRadius: '99px',
                    background: status.bg,
                    border: `1px solid ${status.border}`,
                  }}>
                    {status.label}
                  </span>
                </div>

                <motion.h3 style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  color: textColor,
                  marginBottom: '0.5rem',
                }}>
                  {project.name}
                </motion.h3>

                <motion.p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  color: textMuted,
                  lineHeight: 1.6,
                  marginBottom: '0.75rem',
                }}>
                  {project.finding}
                </motion.p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} className="pill-badge">{tag}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
