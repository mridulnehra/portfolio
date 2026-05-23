'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks, SITE_CONFIG } from '@/lib/constants';

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-base"
      style={{
        background: 'transparent',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Namaste figure — right */}
      <svg aria-hidden="true" style={{ position: 'absolute', right: '8%', bottom: '25%', opacity: 0.15 }} width="40" height="80" viewBox="0 0 40 80">
        {/* Head */}
        <circle cx="20" cy="12" r="8" fill="var(--color-accent-gold)" />
        {/* Turban */}
        <ellipse cx="20" cy="8" rx="10" ry="6" fill="var(--color-accent-saffron)" />
        {/* Body */}
        <path d="M12 20 L28 20 L30 55 L10 55 Z" fill="var(--color-accent-teal)" />
        {/* Namaste hands */}
        <path d="M15 30 L20 25 L25 30" fill="none" stroke="var(--color-accent-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Legs */}
        <line x1="15" y1="55" x2="13" y2="75" stroke="#F5E6D0" strokeWidth="2.5" />
        <line x1="25" y1="55" x2="27" y2="75" stroke="#F5E6D0" strokeWidth="2.5" />
      </svg>

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '600px' }}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="gradient-text-night">Let&apos;s Connect</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="warm-card-night"
          style={{
            padding: '2.5rem',
            margin: '0 auto 2.5rem',
            maxWidth: '480px',
            textAlign: 'left',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem',
            color: '#F5E6D0',
            lineHeight: 1.7,
          }}>
            Hey —
            <br /><br />
            If something here clicked, I&apos;d love to hear about it.
            <br /><br />
            Always down for good conversations, weird ideas, or just a hey.
            <br /><br />
            <span style={{ color: 'var(--color-accent-gold)' }}>— {SITE_CONFIG.name}</span>
          </p>
        </motion.div>

        {/* Social Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target={link.name !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.9rem',
                border: '1.5px solid rgba(255, 215, 0, 0.3)',
                borderRadius: '99px',
                padding: '0.5rem 1.25rem',
                color: 'var(--color-accent-gold)',
                background: 'rgba(20, 20, 40, 0.6)',
                backdropFilter: 'blur(8px)',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(30, 30, 50, 0.8)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(255, 215, 0, 0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(20, 20, 40, 0.6)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {link.icon} {link.name}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
