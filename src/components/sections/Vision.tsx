'use client';

import React from 'react';
import { motion } from 'framer-motion';
import FloatingElement from '@/components/animations/FloatingElement';
import { visionNotes } from '@/lib/constants';

const noteStyleMap: Record<string, string> = {
  'sticky-yellow': 'note-sticky-yellow-night',
  'torn-paper': 'note-torn-paper-night',
  'index-card': 'note-index-card-night',
  'sticky-pink': 'note-sticky-pink-night',
  'notebook': 'note-notebook-night',
};

export default function Vision() {
  return (
    <section
      id="vision"
      className="section-base"
      style={{
        background: 'transparent',
      }}
    >
      {/* Hot air balloon */}
      <svg aria-hidden="true" style={{ position: 'absolute', right: '12%', top: '8%', opacity: 0.15 }} width="60" height="100" viewBox="0 0 60 100">
        {/* Balloon */}
        <ellipse cx="30" cy="30" rx="25" ry="28" fill="var(--color-accent-red)" />
        <path d="M5 30 Q30 35 55 30 Q45 55 30 60 Q15 55 5 30" fill="var(--color-accent-saffron)" />
        {/* Stripes */}
        <path d="M15 10 Q20 40 18 55" stroke="var(--color-accent-gold)" strokeWidth="1.5" fill="none" />
        <path d="M30 5 Q30 40 30 58" stroke="var(--color-accent-gold)" strokeWidth="1.5" fill="none" />
        <path d="M45 10 Q40 40 42 55" stroke="var(--color-accent-gold)" strokeWidth="1.5" fill="none" />
        {/* Ropes */}
        <line x1="20" y1="58" x2="22" y2="75" stroke="#F5E6D0" strokeWidth="0.8" opacity="0.5" />
        <line x1="40" y1="58" x2="38" y2="75" stroke="#F5E6D0" strokeWidth="0.8" opacity="0.5" />
        {/* Basket */}
        <rect x="20" y="75" width="20" height="12" rx="3" fill="var(--color-accent-maroon)" />
        <line x1="20" y1="80" x2="40" y2="80" stroke="var(--color-accent-gold)" strokeWidth="1" />
      </svg>

      {/* Paisley — left */}
      <svg aria-hidden="true" style={{ position: 'absolute', left: 30, bottom: '30%', opacity: 0.06, transform: 'rotate(-15deg)' }} width="70" height="100" viewBox="0 0 70 100">
        <path d="M35 5 Q60 25 52 55 Q45 80 35 95 Q25 80 18 55 Q10 25 35 5Z" fill="var(--color-accent-teal)" />
        <path d="M35 20 Q48 32 44 52 Q40 70 35 78 Q30 70 26 52 Q22 32 35 20Z" fill="var(--color-accent-gold)" />
        <circle cx="35" cy="45" r="5" fill="white" opacity="0.5" />
      </svg>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="gradient-text-night">Vision</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-subheading"
          style={{ color: '#B8AA99' }}
        >
          Thoughts, ideas, and things I&apos;m thinking about
        </motion.p>

        {/* Floating Notes */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.25rem',
          justifyContent: 'center',
          maxWidth: '900px',
          margin: '0 auto 4rem',
        }}>
          {visionNotes.map((note, i) => (
            <FloatingElement key={i} speed={note.speed} distance={-6}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.04, y: -4 }}
                className={`warm-card-night ${noteStyleMap[note.style]}`}
                style={{
                  padding: '1.25rem 1.5rem',
                  borderRadius: 'var(--card-radius)',
                  maxWidth: '240px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: '#F5E6D0',
                  lineHeight: 1.5,
                  cursor: 'default',
                  transform: `rotate(${note.rotation}deg)`,
                }}
              >
                {note.text}
              </motion.div>
            </FloatingElement>
          ))}
        </div>

        {/* Center Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            color: '#F5E6D0',
            lineHeight: 1.5,
            borderLeft: '3px solid var(--color-accent-maroon)',
            paddingLeft: '1.5rem',
          }}
        >
          I don&apos;t know exactly where I&apos;m going.
          <br />
          But I know the kind of things I want to build.
          <footer style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            color: '#B8AA99',
            marginTop: '0.75rem',
          }}>
            — me, probably
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
