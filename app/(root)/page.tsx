'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import HomeSection from '@/components/sections/Home';
import AboutSection from '@/components/sections/About';
import ProjectsSection from '@/components/sections/Project';
import ContactSection from '@/components/sections/Contact';

const sections = [
  { id: 'home', content: HomeSection },
  { id: 'about', content: AboutSection },
  { id: 'projects', content: ProjectsSection },
  { id: 'contact', content: ContactSection },
];

export default function Page() {
  const [current, setCurrent] = useState(0);
  const [canScroll, setCanScroll] = useState(true);

  const touchStartY = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);

  const scrollTo = (index: number) => {
    if (index < 0 || index >= sections.length) return;
    setCurrent(index);
  };

  const handleWheel = (e: WheelEvent) => {
    if (!canScroll) return;
    e.preventDefault();
    setCanScroll(false);

    if (e.deltaY > 0) scrollTo(current + 1);
    else scrollTo(current - 1);

    setTimeout(() => setCanScroll(true), 800);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!canScroll) return;
    setCanScroll(false);

    if (e.key === 'ArrowDown') scrollTo(current + 1);
    if (e.key === 'ArrowUp') scrollTo(current - 1);

    setTimeout(() => setCanScroll(true), 800);
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    touchEndY.current = e.changedTouches[0].clientY;
    const delta = (touchStartY.current ?? 0) - (touchEndY.current ?? 0);

    if (Math.abs(delta) < 50 || !canScroll) return;

    setCanScroll(false);
    if (delta > 0) scrollTo(current + 1); // swipe up
    else scrollTo(current - 1); // swipe down

    setTimeout(() => setCanScroll(true), 800);
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [current, canScroll]);

  return (
    <div className="h-screen w-screen overflow-hidden relative bg-white touch-none">
      <motion.div
        className="absolute top-0 left-0 w-full"
        animate={{ y: `-${current * 100}vh` }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      >
        {sections.map((Section) => (
          <div key={Section.id} className="h-screen w-screen" id={Section.id}>
            <Section.content />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
