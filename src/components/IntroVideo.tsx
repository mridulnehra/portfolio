'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';

const TOTAL_FRAMES = 128;
const FPS = 30;
const FRAME_DURATION = 1000 / FPS; // ~33.33ms per frame
const HOLD_DURATION = 800; // Hold last frame for 800ms before sliding up
const SLIDE_DURATION = 900; // Slide-up animation duration in ms

interface IntroVideoProps {
  onComplete: () => void;
}

export default function IntroVideo({ onComplete }: IntroVideoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const animationRef = useRef<number>(0);

  // Lock scroll while intro is active
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Preload all frames
  useEffect(() => {
    let loaded = 0;
    const images: HTMLImageElement[] = [];
    let cancelled = false;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `/intro-frames/ezgif-frame-${frameNum}.jpg`;

      img.onload = () => {
        if (cancelled) return;
        loaded++;
        setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
        if (loaded === TOTAL_FRAMES) {
          framesRef.current = images;
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        if (cancelled) return;
        loaded++;
        setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
        if (loaded === TOTAL_FRAMES) {
          framesRef.current = images;
          setIsLoaded(true);
        }
      };

      images.push(img);
    }

    return () => {
      cancelled = true;
    };
  }, []);

  // Draw a frame on canvas with "cover" behavior
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = framesRef.current[frameIndex];
    if (!img || !img.complete || !img.naturalWidth) return;

    // Set canvas size to viewport
    const dpr = window.devicePixelRatio || 1;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    if (canvas.width !== vw * dpr || canvas.height !== vh * dpr) {
      canvas.width = vw * dpr;
      canvas.height = vh * dpr;
      canvas.style.width = `${vw}px`;
      canvas.style.height = `${vh}px`;
      ctx.scale(dpr, dpr);
    }

    // Calculate "object-fit: cover" dimensions
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = vw / vh;

    let drawWidth: number, drawHeight: number, offsetX: number, offsetY: number;

    if (imgRatio > canvasRatio) {
      // Image is wider than canvas — fit height, crop width
      drawHeight = vh;
      drawWidth = vh * imgRatio;
      offsetX = (vw - drawWidth) / 2;
      offsetY = 0;
    } else {
      // Image is taller than canvas — fit width, crop height
      drawWidth = vw;
      drawHeight = vw / imgRatio;
      offsetX = 0;
      offsetY = (vh - drawHeight) / 2;
    }

    ctx.clearRect(0, 0, vw, vh);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  // Play frames on canvas at 30fps
  useEffect(() => {
    if (!isLoaded) return;

    let currentFrame = 0;
    let startTime: number | null = null;
    let holdStartTime: number | null = null;
    let isHolding = false;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
        drawFrame(0);
      }

      if (isHolding) {
        // We're holding the last frame
        if (holdStartTime === null) {
          holdStartTime = timestamp;
        }
        if (timestamp - holdStartTime >= HOLD_DURATION) {
          // Start slide-up
          setIsSliding(true);
          // Wait for slide animation to finish, then call onComplete
          setTimeout(() => {
            onComplete();
          }, SLIDE_DURATION + 100);
          return; // Stop the animation loop
        }
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const elapsed = timestamp - startTime;
      const targetFrame = Math.floor(elapsed / FRAME_DURATION);

      if (targetFrame !== currentFrame && targetFrame < TOTAL_FRAMES) {
        currentFrame = targetFrame;
        drawFrame(currentFrame);
      }

      if (targetFrame >= TOTAL_FRAMES - 1) {
        // Reached last frame, start holding
        drawFrame(TOTAL_FRAMES - 1);
        isHolding = true;
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isLoaded, drawFrame, onComplete]);

  // Handle window resize during playback
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      canvas.width = vw * dpr;
      canvas.height = vh * dpr;
      canvas.style.width = `${vw}px`;
      canvas.style.height = `${vh}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`intro-video-container ${isSliding ? 'intro-slide-up' : ''}`}
    >
      {/* Loading screen */}
      {!isLoaded && (
        <div className="intro-loading">
          <div className="intro-loading-inner">
            <div className="intro-loading-icon">✦</div>
            <div className="intro-loading-text">Loading your adventure...</div>
            <div className="intro-progress-bar-track">
              <div
                className="intro-progress-bar-fill"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            <div className="intro-progress-text">{loadProgress}%</div>
          </div>
        </div>
      )}

      {/* Canvas for frame playback */}
      <canvas
        ref={canvasRef}
        className="intro-canvas"
        style={{ opacity: isLoaded ? 1 : 0 }}
      />
    </div>
  );
}
