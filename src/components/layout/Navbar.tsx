'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, MotionValue, useTransform, useMotionValue } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/constants';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Lab', href: '#lab' },
  { name: 'Contact', href: '#contact' },
];

interface NavbarProps {
  scrollProgress?: MotionValue<number>;
}

export default function Navbar({ scrollProgress }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const fallbackProgress = useMotionValue(0);
  const effectiveProgress = scrollProgress ?? fallbackProgress;
  
  // Night mode: transition based on scroll
  const isNight = typeof window !== 'undefined' ? false : false; // placeholder for SSR
  const [nightMode, setNightMode] = useState(false);
  
  // Update night mode based on scroll position
  useEffect(() => {
    if (!scrollProgress) return;
    const unsubscribe = scrollProgress.on('change', (v: number) => {
      setNightMode(v > 0.6);
    });
    return () => unsubscribe();
  }, [scrollProgress]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top < 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 24, left: 0, right: 0, zIndex: 1000,
      padding: '0.75rem 2rem',
      background: scrolled 
        ? (nightMode ? 'rgba(15, 12, 41, 0.85)' : 'rgba(255, 248, 240, 0.85)') 
        : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled 
        ? (nightMode ? '1px solid rgba(245, 230, 208, 0.08)' : '1px solid rgba(139, 26, 26, 0.08)') 
        : '1px solid transparent',
      transition: 'all 0.3s ease',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      {/* Logo */}
      <a href="#hero" style={{
        fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.1rem',
        color: nightMode ? '#F5E6D0' : 'var(--color-text-primary)', textDecoration: 'none',
        letterSpacing: '-0.01em',
      }}>
        <span style={{ color: nightMode ? 'var(--color-accent-gold)' : 'var(--color-accent-maroon)' }}>✦</span> {SITE_CONFIG.name}
      </a>

      {/* Desktop Links */}
      <div style={{
        display: 'flex', gap: '2rem', alignItems: 'center',
      }} className="nav-desktop">
        {navLinks.map(link => (
          <a key={link.name} href={link.href} style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            fontWeight: activeSection === link.href.slice(1) ? 600 : 400,
            color: activeSection === link.href.slice(1) 
              ? (nightMode ? 'var(--color-accent-gold)' : 'var(--color-accent-maroon)') 
              : (nightMode ? '#B8AA99' : 'var(--color-text-muted)'),
            textDecoration: 'none',
            transition: 'color 0.2s',
            position: 'relative',
            paddingBottom: '4px',
          }}>
            {link.name}
            {activeSection === link.href.slice(1) && (
              <motion.div
                layoutId="nav-indicator"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  borderRadius: 1,
                  background: nightMode ? 'var(--color-accent-gold)' : 'var(--color-accent-maroon)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              />
            )}
          </a>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="nav-hamburger"
        style={{
          display: 'none', background: 'none', border: 'none', cursor: 'pointer',
          padding: '4px',
        }}
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
      >
        <div style={{
          width: 20, height: 2, background: nightMode ? '#F5E6D0' : 'var(--color-text-primary)',
          margin: '5px 0', transition: 'transform 0.3s, opacity 0.3s',
          transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none',
        }} />
        <div style={{
          width: 20, height: 2, background: nightMode ? '#F5E6D0' : 'var(--color-text-primary)',
          margin: '5px 0', transition: 'opacity 0.3s',
          opacity: mobileOpen ? 0 : 1,
        }} />
        <div style={{
          width: 20, height: 2, background: nightMode ? '#F5E6D0' : 'var(--color-text-primary)',
          margin: '5px 0', transition: 'transform 0.3s',
          transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
        }} />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="nav-mobile-menu"
            role="menu"
            style={{
              position: 'absolute', top: '100%', left: 0, right: 0,
              background: nightMode ? 'rgba(15, 12, 41, 0.97)' : 'rgba(255, 248, 240, 0.97)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderBottom: '1px solid rgba(139, 26, 26, 0.08)',
              padding: '1.5rem 2rem',
              display: 'flex', flexDirection: 'column', gap: '1rem',
            }}
          >
            {navLinks.map(link => (
              <a key={link.name} href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  color: nightMode ? '#F5E6D0' : 'var(--color-text-primary)',
                  textDecoration: 'none',
                }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
