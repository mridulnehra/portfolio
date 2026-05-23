'use client';

import React, { useMemo } from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface DayNightCycleProps {
  scrollProgress: MotionValue<number>;
}

export default function DayNightCycle({ scrollProgress }: DayNightCycleProps) {
  /* ------------------------------------------------------------------ */
  /*  SKY COLORS                                                        */
  /* ------------------------------------------------------------------ */
  const skyTop = useTransform(
    scrollProgress,
    [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
    [
      '#87CEEB', // morning blue
      '#6BB5E0', // warm blue
      '#D4A96A', // golden afternoon
      '#E87040', // deep orange
      '#C24B5A', // rose sunset
      '#2D1B4E', // deep purple
      '#0F0C29', // twilight
      '#0A0E27', // midnight
    ],
  );

  const skyBottom = useTransform(
    scrollProgress,
    [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
    [
      '#FFF8F0', // cream
      '#FAEBD7', // antique white
      '#F5D79E', // amber
      '#FFB347', // golden
      '#8B4560', // mauve
      '#1A1040', // deep indigo
      '#0D0D25', // navy
      '#080816', // deep night
    ],
  );

  /* ------------------------------------------------------------------ */
  /*  SUN — arc across the sky                                          */
  /* ------------------------------------------------------------------ */
  // Sun horizontal: right to left
  const sunLeft = useTransform(
    scrollProgress,
    [0, 0.15, 0.3, 0.45, 0.6, 0.75],
    ['85%', '70%', '50%', '30%', '15%', '-10%'],
  );

  // Sun vertical: parabolic arc
  const sunTop = useTransform(
    scrollProgress,
    [0, 0.15, 0.3, 0.45, 0.6, 0.72],
    ['15%', '8%', '5%', '15%', '45%', '110%'],
  );

  // Sun size: normal → bigger as it "sets" (atmospheric)
  const sunScale = useTransform(
    scrollProgress,
    [0, 0.3, 0.55, 0.7],
    [1, 0.95, 1.4, 1.6],
  );

  // Sun opacity: fully visible → fades out as it sets behind dunes
  const sunOpacity = useTransform(
    scrollProgress,
    [0, 0.6, 0.72],
    [1, 1, 0],
  );

  // Sun color: yellow → orange → deep red
  const sunColor1 = useTransform(
    scrollProgress,
    [0, 0.3, 0.5, 0.65],
    ['#FFD700', '#FFA500', '#FF6B35', '#FF4444'],
  );
  const sunColor2 = useTransform(
    scrollProgress,
    [0, 0.3, 0.5, 0.65],
    ['#FDB863', '#FF8C42', '#E85D3A', '#CC3333'],
  );

  // Sun glow: intensifies during sunset
  const sunGlow = useTransform(
    scrollProgress,
    [0, 0.3, 0.55, 0.7],
    [
      '0 0 80px rgba(253,184,99,0.4)',
      '0 0 80px rgba(253,184,99,0.35)',
      '0 0 120px rgba(255,100,50,0.6)',
      '0 0 160px rgba(255,60,30,0.5)',
    ],
  );

  /* ------------------------------------------------------------------ */
  /*  MOON — rises from the right after sunset                          */
  /* ------------------------------------------------------------------ */
  const moonLeft = useTransform(
    scrollProgress,
    [0.6, 0.7, 0.8, 0.9, 1],
    ['110%', '85%', '60%', '35%', '10%'],
  );
  const moonTop = useTransform(
    scrollProgress,
    [0.6, 0.7, 0.8, 0.9, 1],
    ['110%', '45%', '15%', '5%', '15%'],
  );
  const moonOpacity = useTransform(
    scrollProgress,
    [0.6, 0.72, 0.85],
    [0, 0.5, 1],
  );

  /* ------------------------------------------------------------------ */
  /*  STARS — fade in during twilight                                    */
  /* ------------------------------------------------------------------ */
  const starsOpacity = useTransform(
    scrollProgress,
    [0.6, 0.78, 0.9],
    [0, 0.4, 0.9],
  );

  // Generate star positions once
  const stars = useMemo(() => {
    const s = [];
    for (let i = 0; i < 80; i++) {
      s.push({
        x: Math.random() * 100,
        y: Math.random() * 55, // upper part of sky
        size: 1 + Math.random() * 2,
        delay: Math.random() * 3,
      });
    }
    return s;
  }, []);

  /* ------------------------------------------------------------------ */
  /*  DUNE COLORS                                                       */
  /* ------------------------------------------------------------------ */
  const duneBack = useTransform(
    scrollProgress,
    [0, 0.3, 0.55, 0.75, 1],
    ['#E8C98E', '#E0B870', '#B87550', '#3D2845', '#1A1030'],
  );
  const duneMid = useTransform(
    scrollProgress,
    [0, 0.3, 0.55, 0.75, 1],
    ['#D4A96A', '#CC9555', '#A05E3A', '#2D1D38', '#121025'],
  );
  const duneFront = useTransform(
    scrollProgress,
    [0, 0.3, 0.55, 0.75, 1],
    ['#C9956B', '#C08550', '#8B4730', '#221530', '#0D0B1A'],
  );
  const fortOpacity = useTransform(
    scrollProgress,
    [0, 0.35, 0.55, 0.7, 1],
    [0.2, 0.3, 0.5, 0.35, 0.15],
  );
  const fortColor = useTransform(
    scrollProgress,
    [0, 0.5, 0.75, 1],
    ['#8B6914', '#6B3A10', '#1A1030', '#0A0816'],
  );

  /* ------------------------------------------------------------------ */
  /*  RENDER                                                            */
  /* ------------------------------------------------------------------ */
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Sky gradient */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: useTransform(
            [skyTop, skyBottom] as MotionValue<string>[],
            ([top, bottom]: string[]) =>
              `linear-gradient(180deg, ${top} 0%, ${bottom} 100%)`,
          ),
        }}
      />

      {/* Stars */}
      <motion.div style={{ position: 'absolute', inset: 0, opacity: starsOpacity }}>
        {stars.map((star, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              borderRadius: '50%',
              background: '#fff',
              animation: `twinkle ${2 + star.delay}s ease-in-out ${star.delay}s infinite`,
            }}
          />
        ))}
      </motion.div>

      {/* Sun */}
      <motion.div
        style={{
          position: 'absolute',
          left: sunLeft,
          top: sunTop,
          width: 120,
          height: 120,
          scale: sunScale,
          opacity: sunOpacity,
          willChange: 'transform',
        }}
      >
        {/* Outer glow ring */}
        <motion.div
          style={{
            position: 'absolute',
            inset: -30,
            borderRadius: '50%',
            background: useTransform(
              sunColor2,
              (c: string) => `radial-gradient(circle, ${c}33 0%, transparent 70%)`,
            ),
          }}
        />
        {/* Sun disc */}
        <motion.div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: useTransform(
              [sunColor1, sunColor2] as MotionValue<string>[],
              ([c1, c2]: string[]) =>
                `radial-gradient(circle, ${c1} 0%, ${c2} 60%, transparent 72%)`,
            ),
            boxShadow: sunGlow,
          }}
        />
      </motion.div>

      {/* Moon */}
      <motion.div
        style={{
          position: 'absolute',
          left: moonLeft,
          top: moonTop,
          opacity: moonOpacity,
          willChange: 'transform',
        }}
      >
        <svg width="120" height="120" viewBox="0 0 120 120">
          {/* Moon glow */}
          <defs>
            <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(200,210,255,0.4)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle cx="60" cy="60" r="55" fill="url(#moonGlow)" />
          {/* Moon body */}
          <circle cx="60" cy="60" r="30" fill="#E8E4D4" />
          {/* Crater details */}
          <circle cx="50" cy="50" r="6" fill="rgba(180,175,160,0.5)" />
          <circle cx="70" cy="55" r="4" fill="rgba(180,175,160,0.4)" />
          <circle cx="55" cy="70" r="8" fill="rgba(180,175,160,0.3)" />
          <circle cx="65" cy="45" r="3" fill="rgba(180,175,160,0.4)" />
          <circle cx="75" cy="68" r="5" fill="rgba(180,175,160,0.5)" />
          <circle cx="45" cy="65" r="4" fill="rgba(180,175,160,0.4)" />
        </svg>
      </motion.div>

      {/* Sand Dunes — persistent ground */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 280" style={{ width: '100%', display: 'block' }} preserveAspectRatio="none">
          {/* Back dune */}
          <motion.path
            d="M0 280 L0 180 Q120 100 300 140 Q480 180 600 120 Q720 60 900 100 Q1080 140 1200 90 Q1320 40 1440 80 L1440 280 Z"
            fill={duneBack}
            opacity="0.5"
          />
          {/* Mid dune */}
          <motion.path
            d="M0 280 L0 200 Q160 150 350 180 Q540 210 700 160 Q860 110 1050 150 Q1240 190 1440 140 L1440 280 Z"
            fill={duneMid}
            opacity="0.7"
          />
          {/* Front dune */}
          <motion.path
            d="M0 280 L0 230 Q200 200 400 220 Q600 240 800 210 Q1000 180 1200 210 Q1350 230 1440 220 L1440 280 Z"
            fill={duneFront}
          />

          {/* Fort silhouette */}
          <motion.g opacity={fortOpacity}>
            <motion.path
              d="M900 130 L900 100 L910 100 L910 80 L920 70 L930 80 L930 100 L960 100 L960 85 L970 75 L980 85 L980 100 L1010 100 L1010 90 L1020 80 L1025 70 L1030 80 L1030 90 L1060 90 L1060 100 L1090 100 L1090 130"
              fill={fortColor}
            />
          </motion.g>

          {/* Camel Caravan */}
          <g transform="translate(200, 140) scale(0.4)">
            <motion.path d="M0 60 L5 30 Q10 10 20 15 L25 20 L30 10 Q35 5 40 15 L40 30 L50 25 L55 60" fill={fortColor} />
            <motion.circle cx="35" cy="8" r="4" fill={fortColor} />
            <motion.line x1="20" y1="60" x2="18" y2="80" stroke={fortColor} strokeWidth="3" />
            <motion.line x1="40" y1="60" x2="42" y2="80" stroke={fortColor} strokeWidth="3" />
            {/* Rider */}
            <circle cx="28" cy="15" r="5" fill="#E8650A" opacity="0.6" />
            <ellipse cx="28" cy="11" rx="6" ry="4" fill="#FFD700" opacity="0.5" />
          </g>
          <g transform="translate(280, 148) scale(0.35)">
            <motion.path d="M0 60 L5 30 Q10 10 20 15 L25 20 L30 10 Q35 5 40 15 L40 30 L50 25 L55 60" fill={fortColor} />
            <motion.circle cx="35" cy="8" r="4" fill={fortColor} />
            <motion.line x1="20" y1="60" x2="18" y2="80" stroke={fortColor} strokeWidth="3" />
            <motion.line x1="40" y1="60" x2="42" y2="80" stroke={fortColor} strokeWidth="3" />
          </g>
          <g transform="translate(345, 155) scale(0.3)">
            <motion.path d="M0 60 L5 30 Q10 10 20 15 L25 20 L30 10 Q35 5 40 15 L40 30 L50 25 L55 60" fill={fortColor} />
            <motion.circle cx="35" cy="8" r="4" fill={fortColor} />
            <motion.line x1="20" y1="60" x2="18" y2="80" stroke={fortColor} strokeWidth="3" />
            <motion.line x1="40" y1="60" x2="42" y2="80" stroke={fortColor} strokeWidth="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}
