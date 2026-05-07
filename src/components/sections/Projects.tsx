'use client';

import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import { projects } from '@/lib/constants';

interface ProjectsProps {
  scrollProgress?: MotionValue<number>;
}

export default function Projects({ scrollProgress }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="section-base"
      style={{
        background: 'transparent',
      }}
    >
      {/* Haveli windows pattern — subtle */}
      <svg style={{ position: 'absolute', left: 20, top: '12%', opacity: 0.08 }} width="60" height="100" viewBox="0 0 60 100">
        <path d="M5 100 L5 30 Q5 5 30 5 Q55 5 55 30 L55 100" fill="none" stroke="var(--color-accent-maroon)" strokeWidth="2" />
        <path d="M15 100 L15 35 Q15 15 30 15 Q45 15 45 35 L45 100" fill="none" stroke="var(--color-accent-gold)" strokeWidth="1.5" />
        <line x1="30" y1="15" x2="30" y2="100" stroke="var(--color-accent-maroon)" strokeWidth="1" />
        <line x1="15" y1="60" x2="45" y2="60" stroke="var(--color-accent-maroon)" strokeWidth="1" />
      </svg>

      <svg style={{ position: 'absolute', right: 20, bottom: '15%', opacity: 0.08 }} width="60" height="100" viewBox="0 0 60 100">
        <path d="M5 100 L5 30 Q5 5 30 5 Q55 5 55 30 L55 100" fill="none" stroke="var(--color-accent-maroon)" strokeWidth="2" />
        <path d="M15 100 L15 35 Q15 15 30 15 Q45 15 45 35 L45 100" fill="none" stroke="var(--color-accent-gold)" strokeWidth="1.5" />
        <line x1="30" y1="15" x2="30" y2="100" stroke="var(--color-accent-maroon)" strokeWidth="1" />
      </svg>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="gradient-text">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-subheading"
        >
          Things I&apos;ve built, shipped, and learned from
        </motion.p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.25rem',
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="warm-card"
              style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}
            >
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--color-text-subtle)',
                letterSpacing: '0.1em',
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>

              <div style={{
                height: 2,
                background: 'linear-gradient(90deg, var(--color-accent-maroon), var(--color-accent-saffron), transparent)',
                margin: '0.6rem 0',
                borderRadius: 1,
              }} />

              <h3 style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '1.25rem',
                color: 'var(--color-text-primary)',
                marginBottom: '0.5rem',
              }}>
                {project.name}
              </h3>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                marginBottom: '1rem',
                flex: 1,
              }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} className="pill-badge">{tag}</span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {project.homepage && (
                  <a href={project.homepage} target="_blank" rel="noopener noreferrer" style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    border: '1.5px solid rgba(232, 101, 10, 0.3)',
                    borderRadius: '99px',
                    padding: '0.35rem 1rem',
                    color: 'var(--color-accent-saffron)',
                    background: 'transparent',
                    transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(232, 101, 10, 0.08)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    Live →
                  </a>
                )}
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  border: '1.5px solid rgba(139, 26, 26, 0.15)',
                  borderRadius: '99px',
                  padding: '0.35rem 1rem',
                  color: 'var(--color-text-muted)',
                  background: 'transparent',
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(139, 26, 26, 0.05)';
                    e.currentTarget.style.color = 'var(--color-accent-maroon)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--color-text-muted)';
                  }}
                >
                  GitHub →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
