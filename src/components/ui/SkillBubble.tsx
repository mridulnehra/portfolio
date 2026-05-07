'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SpeechBubble from './SpeechBubble';
import type { Skill } from '@/lib/types';

interface SkillBubbleProps {
  skill: Skill;
  index: number;
}

export default function SkillBubble({ skill, index }: SkillBubbleProps) {
  const [hovered, setHovered] = useState(false);
  const floatDuration = 5 + index;

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${skill.x}%`,
        top: `${skill.y}%`,
        transform: 'translate(-50%, -50%)',
        zIndex: hovered ? 10 : 1,
      }}
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div style={{ position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: 8, whiteSpace: 'nowrap' }}>
          <SpeechBubble text={skill.description} position="bottom" />
        </div>
      )}
      <motion.div
        whileHover={{ scale: 1.15 }}
        style={{
          width: 90,
          height: 90,
          borderRadius: '50%',
          background: 'var(--color-bg-primary)',
          border: '2.5px solid var(--color-accent-cyan)',
          boxShadow: hovered
            ? '0 0 20px rgba(0, 229, 255, 0.5)'
            : '0 0 12px rgba(0, 229, 255, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>{skill.icon}</span>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.8rem',
            color: 'var(--color-text-primary)',
            marginTop: 4,
            textAlign: 'center',
            lineHeight: 1.1,
          }}
        >
          {skill.name}
        </span>
      </motion.div>
    </motion.div>
  );
}
