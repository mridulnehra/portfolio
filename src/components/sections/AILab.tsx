'use client';

import React, { useState, useEffect } from 'react';
import { motion, MotionValue, useTransform, useMotionValue } from 'framer-motion';
import { aiProjects } from '@/lib/constants';

interface AILabProps {
  scrollProgress?: MotionValue<number>;
}

export default function AILab({ scrollProgress }: AILabProps) {
  const fallbackProgress = useMotionValue(0);
  const effectiveProgress = scrollProgress ?? fallbackProgress;

  // Track night mode dynamically based on scroll
  const [nightMode, setNightMode] = useState(false);
  
  useEffect(() => {
    if (!scrollProgress) return;
    const unsubscribe = scrollProgress.on('change', (v: number) => {
      setNightMode(v > 0.6);
    });
    return () => unsubscribe();
  }, [scrollProgress]);

  // Dynamic status configurations for day vs night visibility
  const statusConfig = {
    live: { 
      label: 'Live', 
      color: nightMode ? '#4ADE80' : '#2E7D32', 
      bg: nightMode ? 'rgba(74, 222, 128, 0.1)' : 'rgba(46, 125, 50, 0.08)', 
      border: nightMode ? 'rgba(74, 222, 128, 0.3)' : 'rgba(46, 125, 50, 0.25)' 
    },
    building: { 
      label: 'Building', 
      color: nightMode ? '#FB923C' : '#E8650A', 
      bg: nightMode ? 'rgba(251, 146, 60, 0.1)' : 'rgba(232, 101, 10, 0.08)', 
      border: nightMode ? 'rgba(251, 146, 60, 0.3)' : 'rgba(232, 101, 10, 0.25)' 
    },
    experiment: { 
      label: 'Experiment', 
      color: nightMode ? '#F472B6' : '#C71585', 
      bg: nightMode ? 'rgba(244, 114, 182, 0.08)' : 'rgba(199, 21, 133, 0.06)', 
      border: nightMode ? 'rgba(244, 114, 182, 0.25)' : 'rgba(199, 21, 133, 0.2)' 
    },
  };

  // Static colors instead of transforms for better readability during transition
  const textColor = nightMode ? '#F5E6D0' : '#2D1B0E';
  const textMuted = nightMode ? '#B8AA99' : '#6B5744';
  const textSubtle = nightMode ? '#CBBFB0' : '#9B8978';
  
  // Card styling
  const cardStyle = nightMode ? 'rgba(30, 25, 60, 0.85)' : 'rgba(255, 255, 255, 0.75)';
  const cardBorder = nightMode ? 'rgba(245, 230, 208, 0.25)' : 'rgba(139, 26, 26, 0.12)';

  // Header opacity cross-fades can stay or be simplified
  const dayHeaderOpacity = nightMode ? 0 : 1;
  const nightHeaderOpacity = nightMode ? 1 : 0;

  return (
    <section
      id="lab"
      className="section-base"
      style={{
        background: 'transparent',
      }}
    >
      {/* Mehndi/henna pattern — subtle background */}
      <svg aria-hidden="true" style={{ position: 'absolute', left: '5%', top: '15%', opacity: 0.06 }} width="120" height="160" viewBox="0 0 120 160">
        <path d="M60 10 Q90 40 80 80 Q70 120 60 150 Q50 120 40 80 Q30 40 60 10Z" fill="none" stroke="var(--color-accent-maroon)" strokeWidth="2" />
        <path d="M60 30 Q78 50 72 80 Q65 105 60 120 Q55 105 48 80 Q42 50 60 30Z" fill="none" stroke="var(--color-accent-saffron)" strokeWidth="1.5" />
        <circle cx="60" cy="60" r="10" fill="none" stroke="var(--color-accent-maroon)" strokeWidth="1" />
        <circle cx="60" cy="60" r="4" fill="var(--color-accent-gold)" />
        <circle cx="60" cy="90" r="6" fill="none" stroke="var(--color-accent-maroon)" strokeWidth="1" />
        <circle cx="60" cy="90" r="2" fill="var(--color-accent-maroon)" />
        <circle cx="50" cy="45" r="2" fill="var(--color-accent-maroon)" />
        <circle cx="70" cy="45" r="2" fill="var(--color-accent-maroon)" />
        <circle cx="45" cy="70" r="2" fill="var(--color-accent-saffron)" />
        <circle cx="75" cy="70" r="2" fill="var(--color-accent-saffron)" />
      </svg>

      {/* Pottery/Matka — right side */}
      <svg aria-hidden="true" style={{ position: 'absolute', right: 30, bottom: '18%', opacity: 0.1 }} width="60" height="80" viewBox="0 0 60 80">
        <ellipse cx="30" cy="60" rx="25" ry="18" fill="var(--color-accent-saffron)" />
        <ellipse cx="30" cy="30" rx="18" ry="25" fill="var(--color-accent-saffron)" />
        <ellipse cx="30" cy="10" rx="10" ry="5" fill="none" stroke="var(--color-accent-maroon)" strokeWidth="2" />
        <line x1="12" y1="35" x2="48" y2="35" stroke="var(--color-accent-maroon)" strokeWidth="1.5" />
        <line x1="15" y1="45" x2="45" y2="45" stroke="var(--color-accent-gold)" strokeWidth="1" />
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
          style={{ position: 'relative', height: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          {/* Day Mode Title (Gradient) */}
          <motion.span 
            className="gradient-text" 
            style={{ 
              opacity: dayHeaderOpacity,
            }}
          >
            The Lab
          </motion.span>
          
          {/* Night Mode Title (High-contrast Cream) */}
          <motion.span 
            style={{ 
              position: 'absolute',
              color: '#F5E6D0',
              opacity: nightHeaderOpacity,
            }}
          >
            The Lab
          </motion.span>
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
                whileHover={{ y: -5 }}
                className="warm-card"
                style={{
                  padding: '1.5rem',
                  borderTop: `1px solid ${cardBorder as unknown as string}`,
                  borderRight: `1px solid ${cardBorder as unknown as string}`,
                  borderBottom: `1px solid ${cardBorder as unknown as string}`,
                  borderLeft: `3px solid ${status.color}`,
                  background: cardStyle as unknown as string,
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.75rem',
                }}>
                  <motion.span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: textSubtle,
                    letterSpacing: '0.1em',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </motion.span>
                  <span style={{
                    fontSize: '0.75rem',
                    color: status.color,
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    padding: '0.15rem 0.6rem',
                    borderRadius: '99px',
                    background: status.bg,
                    border: `1px solid ${status.border}`,
                    transition: 'all 0.3s ease',
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
                    <span 
                      key={tag} 
                      className="pill-badge"
                      style={{
                        color: nightMode ? '#5EEAD4' : 'var(--color-accent-teal)',
                        background: nightMode ? 'rgba(94, 234, 212, 0.1)' : 'rgba(14, 142, 138, 0.08)',
                        borderColor: nightMode ? 'rgba(94, 234, 212, 0.3)' : 'rgba(14, 142, 138, 0.2)',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {tag}
                    </span>
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
