'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CustomCursor from '@/components/ui/CustomCursor';
import RajasthaniBorder from '@/components/ui/RajasthaniBorder';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import AILab from '@/components/sections/AILab';
import Vision from '@/components/sections/Vision';
import Contact from '@/components/sections/Contact';
import IntroVideo from '@/components/IntroVideo';
import DayNightCycle from '@/components/DayNightCycle';
import SectionSlide from '@/components/SectionSlide';

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <CustomCursor />

      {/* Rajasthani Decorative Border — fixed at top */}
      <RajasthaniBorder />

      {/* Scroll Progress */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Intro Video Overlay */}
      {!introComplete && (
        <IntroVideo onComplete={() => setIntroComplete(true)} />
      )}

      {/* Main Content */}
      <Navbar />
      
      <div style={{ position: 'relative' }}>
        {/* Fixed background layer for the entire 24hr cycle */}
        <DayNightCycle scrollProgress={scrollYProgress} />
        
        {/* Scrollable sections */}
        <main style={{ position: 'relative', zIndex: 10 }}>
          <SectionSlide scrollProgress={scrollYProgress} range={[0, 0.14]} id="hero" isFirst={true}>
            <Hero scrollProgress={scrollYProgress} />
          </SectionSlide>
          
          <SectionSlide scrollProgress={scrollYProgress} range={[0.14, 0.28]} id="about">
            <About scrollProgress={scrollYProgress} />
          </SectionSlide>
          
          <SectionSlide scrollProgress={scrollYProgress} range={[0.28, 0.42]} id="skills">
            <Skills scrollProgress={scrollYProgress} />
          </SectionSlide>
          
          <SectionSlide scrollProgress={scrollYProgress} range={[0.42, 0.57]} id="projects">
            <Projects scrollProgress={scrollYProgress} />
          </SectionSlide>
          
          <SectionSlide scrollProgress={scrollYProgress} range={[0.57, 0.71]} id="lab">
            <AILab scrollProgress={scrollYProgress} />
          </SectionSlide>
          
          <SectionSlide scrollProgress={scrollYProgress} range={[0.71, 0.85]} id="vision">
            <Vision scrollProgress={scrollYProgress} />
          </SectionSlide>
          
          <SectionSlide scrollProgress={scrollYProgress} range={[0.85, 1.0]} id="contact">
            <Contact scrollProgress={scrollYProgress} />
          </SectionSlide>
        </main>
        
        {/* Ensure footer appears at the very end and sits above the background */}
        <div style={{ position: 'relative', zIndex: 20 }}>
          <Footer />
        </div>
      </div>
    </>
  );
}
