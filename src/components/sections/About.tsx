'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      className="section-base"
      style={{
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      {/* Kathputli (puppet) — left side */}
      <svg aria-hidden="true" style={{ position: 'absolute', left: 30, top: '15%', opacity: 0.18 }} width="50" height="140" viewBox="0 0 50 140">
        {/* String */}
        <line x1="25" y1="0" x2="25" y2="25" stroke="var(--color-text-subtle)" strokeWidth="1" />
        {/* Head */}
        <circle cx="25" cy="32" r="10" fill="var(--color-accent-saffron)" />
        {/* Crown */}
        <path d="M15 25 L25 15 L35 25" fill="var(--color-accent-gold)" />
        {/* Body */}
        <path d="M18 42 L32 42 L35 90 L15 90 Z" fill="var(--color-accent-red)" />
        {/* Arms */}
        <line x1="18" y1="50" x2="5" y2="70" stroke="var(--color-accent-maroon)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="32" y1="50" x2="45" y2="70" stroke="var(--color-accent-maroon)" strokeWidth="2.5" strokeLinecap="round" />
        {/* Skirt/Ghagra */}
        <path d="M15 90 L5 130 L45 130 L35 90 Z" fill="var(--color-accent-magenta)" />
        {/* Pattern on body */}
        <circle cx="25" cy="55" r="3" fill="var(--color-accent-gold)" opacity="0.7" />
        <circle cx="25" cy="75" r="2" fill="var(--color-accent-gold)" opacity="0.5" />
      </svg>

      {/* Decorative paisley — right side */}
      <svg aria-hidden="true" style={{ position: 'absolute', right: 40, bottom: '20%', opacity: 0.1, transform: 'rotate(20deg)' }} width="80" height="120" viewBox="0 0 80 120">
        <path d="M40 5 Q70 30 60 65 Q50 95 40 110 Q30 95 20 65 Q10 30 40 5Z" fill="var(--color-accent-maroon)" />
        <path d="M40 20 Q55 35 50 60 Q45 80 40 90 Q35 80 30 60 Q25 35 40 20Z" fill="var(--color-accent-saffron)" />
        <circle cx="40" cy="50" r="5" fill="var(--color-accent-gold)" />
      </svg>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          gap: '4rem',
          alignItems: 'center',
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* LEFT — Avatar in Jharokha */}
        <div style={{ flex: '1 1 280px', display: 'flex', justifyContent: 'center' }}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{ position: 'relative' }}
          >
            <Image 
              src="/profile.jpg" 
              alt="Profile" 
              width={280} 
              height={320} 
              style={{ 
                borderRadius: '24px', 
                objectFit: 'cover', 
                position: 'relative', 
                zIndex: 1, 
                border: '2px solid rgba(139, 26, 26, 0.15)',
                boxShadow: 'var(--card-shadow)'
              }} 
            />
          </motion.div>
        </div>

        {/* RIGHT — Story */}
        <div style={{ flex: '1 1 400px' }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="section-heading" style={{ textAlign: 'left' }}>
              <span className="gradient-text">From the land of forts</span>
            </h2>

            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.1rem',
              fontWeight: 500,
              lineHeight: 1.9,
              color: 'var(--color-text-primary)',
            }}>
              <p style={{ marginBottom: '1rem' }}>
                Rajasthan. Sand. Forts. Sunsets. And somehow — a kid who got obsessed with computers.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                I&apos;m a CSE student with a thing for AI, building things quietly and thinking loudly. Ambivert energy — introverted enough to deep-dive into code, extroverted enough to pitch ideas.
              </p>
              <p>
                Not trying to be the loudest in the room. Just the most interesting.
              </p>
            </div>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{
                marginTop: '1.5rem',
                height: 2,
                background: 'linear-gradient(90deg, var(--color-accent-maroon), var(--color-accent-saffron), transparent)',
                transformOrigin: 'left',
                borderRadius: 1,
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
