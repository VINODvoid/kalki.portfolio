'use client';

import { useEffect, useState } from 'react';
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

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [current, canScroll]);

  return (
    <div className="h-screen w-screen overflow-hidden relative bg-white">
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







