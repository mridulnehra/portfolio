'use client';

import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/constants';

interface HeroProps {
  scrollProgress?: MotionValue<number>;
}

const heroTitle = `Hi, I'm ${SITE_CONFIG.name}`;
const heroSubtitle = SITE_CONFIG.tagline;
const tags = ['CSE Student', 'AI Nerd', 'Goes With The Flow'];

export default function Hero({ scrollProgress }: HeroProps) {
  // Fade out scroll indicator early in the cycle
  const scrollIndicatorOpacity = scrollProgress 
    ? useTransform(scrollProgress, [0, 0.05], [1, 0])
    : 1;

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        background: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Floating paisley decorations */}
      <svg style={{ position: 'absolute', top: '12%', left: '8%', opacity: 0.12 }} width="60" height="80" viewBox="0 0 60 80">
        <path d="M30 5 Q50 20 45 45 Q40 65 30 75 Q20 65 15 45 Q10 20 30 5Z" fill="var(--color-accent-maroon)" />
        <path d="M30 15 Q40 25 38 40 Q35 55 30 60 Q25 55 22 40 Q20 25 30 15Z" fill="var(--color-accent-saffron)" />
      </svg>
      <svg style={{ position: 'absolute', top: '20%', right: '10%', opacity: 0.1, transform: 'rotate(30deg)' }} width="50" height="65" viewBox="0 0 60 80">
        <path d="M30 5 Q50 20 45 45 Q40 65 30 75 Q20 65 15 45 Q10 20 30 5Z" fill="var(--color-accent-teal)" />
        <path d="M30 15 Q40 25 38 40 Q35 55 30 60 Q25 55 22 40 Q20 25 30 15Z" fill="var(--color-accent-gold)" />
      </svg>

      {/* Center Content */}
      <motion.div
        style={{ textAlign: 'center', maxWidth: '700px', padding: '2rem', zIndex: 5 }}
      >
        {/* Greeting tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            display: 'inline-block',
            padding: '0.35rem 1rem',
            borderRadius: '99px',
            border: '2px solid rgba(139, 26, 26, 0.2)',
            background: 'rgba(255, 255, 255, 0.7)',
            fontSize: '0.85rem',
            color: 'var(--color-accent-maroon)',
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            letterSpacing: '0.05em',
            backdropFilter: 'blur(8px)',
          }}
        >
          ✦ पधारो म्हारे देश
        </motion.div>

        {/* Main title */}
        <h1
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            color: '#2D1B0E',
            marginBottom: '0.75rem',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            textShadow: '0 1px 3px rgba(255,255,255,0.5)',
          }}
        >
          {heroTitle.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.03, duration: 0.15 }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + heroTitle.length * 0.03 + 0.2, type: 'spring', stiffness: 300 }}
            style={{ display: 'inline-block', marginLeft: '0.3rem' }}
          >
            👾
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 + heroTitle.length * 0.03 + 0.5, duration: 0.8 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            color: 'var(--color-text-muted)',
            marginBottom: '2rem',
          }}
        >
          {heroSubtitle}
        </motion.p>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5 + heroTitle.length * 0.03 + 0.8 + i * 0.15,
                type: 'spring', stiffness: 300, damping: 15,
              }}
              className="warm-card"
              style={{
                padding: '0.4rem 1rem',
                fontSize: '0.85rem',
                color: 'var(--color-text-primary)',
                fontFamily: 'var(--font-body)',
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: 30,
          textAlign: 'center',
          opacity: scrollIndicatorOpacity,
          zIndex: 5,
        }}
      >
        <span style={{
          fontFamily: 'var(--font-body)',
          color: 'var(--color-text-muted)',
          fontSize: '0.8rem',
          display: 'block',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}>
          Scroll
        </span>
        <motion.div
          style={{
            width: 1.5,
            height: 24,
            background: 'linear-gradient(to bottom, var(--color-accent-maroon), transparent)',
            margin: '8px auto 0',
            animation: 'bounce-arrow 2s infinite',
          }}
        />
      </motion.div>
    </section>
  );
}
