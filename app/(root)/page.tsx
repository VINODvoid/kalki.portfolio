'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/legacy/image';
import Link from 'next/link';

import Button from '@/components/Button';
import Hr from '@/components/Hr';

import Me from '@/public/images/me.png';
import MeAbout from '@/public/images/me.png';
import ProjectAll from '@/public/images/me.png';
import Setup from '@/public/images/me.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const sections = [
  { id: 'home', content: HomeSection },
  { id: 'about', content: AboutSection },
  { id: 'projects', content: ProjectsSection },
  { id: 'contact', content: ContactSection },
];

export default function Page() {
  const [current, setCurrent] = useState(0);

  const scrollTo = (index: number) => {
    if (index < 0 || index >= sections.length) return;
    setCurrent(index);
  };

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0) scrollTo(current + 1);
    else scrollTo(current - 1);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') scrollTo(current + 1);
    if (e.key === 'ArrowUp') scrollTo(current - 1);
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [current]);

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <motion.div
        className="absolute top-0 left-0 w-full"
        animate={{ y: `-${current * 100}vh` }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      >
        {sections.map((Section) => (
          <div key={Section.id} className="h-screen w-screen">
            <Section.content />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ----------- Sections -----------

function HomeSection() {
  return (
    <div className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-4 p-10 overflow-hidden md:px-20 h-full">
      <motion.div
        className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring' }}
      >
        <div className="block md:hidden col-span-1 mx-auto my-10">
          <div className="bg-slate-500 rounded-full h-60 w-60 grayscale hover:grayscale-0 transition-all ease duration-300">
            <Image
              src={Me}
              width={500}
              height={500}
              className="rounded-full w-full h-full object-cover"
              alt="vinod"
              placeholder="blur"
            />
          </div>
        </div>
        <motion.h3
          className="uppercase text-xl mb-3 font-normal tracking-[.5rem] text-gray-500"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          Vinod (kalki)
        </motion.h3>
        <motion.h1
          className="text-black text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold my-2 md:my-5 dark:text-white"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
        >
          Full Stack Developer
        </motion.h1>
        <motion.p
          className="title text-md 2xl:text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem]"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: 'spring' }}
        >
          Hello! I'm Vinod (KALKI), a dedicated full-stack developer with expertise in modern web development and a keen interest in artificial intelligence. I&rsquo;m passionate about creating scalable, user-friendly web applications and diving into innovative AI technologies, including generative models and LLM integration, as well as Web3 technologies like Solana, Ethereum, and DePIN.
        </motion.p>
        <motion.div
          className="buttons flex flex-row justify-center items-center space-x-4 mt-10"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
        >
          <Button variation="primary">
            <Link href="/docs/cv.pdf" target="_blank" rel="noopener noreferrer" download>
              Download CV
            </Link>
          </Button>
          <Button variation="secondary">
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        className="hidden md:flex col-span-1 mx-auto justify-center items-center"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7, type: 'spring' }}
      >
        <div className="rounded-full h-auto w-auto lg:px-12 grayscale hover:grayscale-0 transition-all ease duration-300">
          <Image
            src={Me}
            width={400}
            height={550}
            placeholder="blur"
            alt="vinod"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="relative md:h-screen w-screen gap-4 flex justify-center items-center flex-col overflow-hidden h-full">
      <div className="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16">
        <motion.div
          className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
          initial={{ x: 300, opacity: 0, z: -100 }}
          whileInView={{ x: 0, opacity: 1, z: 0 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 100, damping: 20 }}
        >
          <Image
            src={MeAbout}
            layout="fill"
            className="object-cover"
            alt="vinod"
            placeholder="blur"
          />
        </motion.div>
      </div>
      <div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 flex flex-col justify-center items-start text-start px-10 py-5">
        <motion.h1
          className="bg-white lg:bg-transparent bg-opacity-50 px-3 md-px-0 text-black text-5xl md:text-8xl font-bold"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, type: 'spring' }}
        >
          About Me
        </motion.h1>
        <Hr />
        <motion.p
          className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          A brief introduction about me and my interest.
        </motion.p>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
        >
          <Button variation="primary">
            <Link href="/about">Learn More</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <div className="relative md:h-screen w-screen gap-4 p-10 flex justify-center items-center flex-col overflow-hidden h-full">
      <div className="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16">
        <motion.div
          className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
          initial={{ x: 300, opacity: 0, z: -100 }}
          whileInView={{ x: 0, opacity: 1, z: 0 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 100, damping: 20 }}
        >
          <Image
            src={ProjectAll}
            layout="fill"
            className="object-cover"
            alt="Projects"
            placeholder="blur"
          />
        </motion.div>
      </div>
      <div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 flex flex-col justify-center items-start text-start px-10 py-5">
        <motion.h1
          className="bg-white lg:bg-transparent bg-opacity-50 px-3 md-px-0 text-black text-5xl md:text-8xl font-bold"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, type: 'spring' }}
        >
          My Projects
        </motion.h1>
        <Hr />
        <motion.p
          className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          This is some of my projects that I have done{' '}
          <span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
            and currently working on.
          </span>
        </motion.p>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
        >
          <Button variation="primary">
            <Link href="/projects">Learn More</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="relative md:h-screen w-screen gap-4 p-10 flex justify-center items-center flex-col overflow-hidden h-full">
      <div className="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16">
        <motion.div
          className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
          initial={{ x: 300, opacity: 0, z: -100 }}
          whileInView={{ x: 0, opacity: 1, z: 0 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 100, damping: 20 }}
        >
          <Image
            src={Setup}
            layout="fill"
            className="object-cover"
            alt="Setup"
            placeholder="blur"
          />
        </motion.div>
      </div>
      <div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 flex flex-col justify-center items-start text-start px-10 overflow-hidden">
        <motion.h1
          className="bg-white lg:bg-transparent bg-opacity-50 px-3 md-px-0 text-black text-5xl md:text-8xl font-bold mb-3"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, type: 'spring' }}
        >
          Get In Touch
        </motion.h1>
        <Hr />
        <motion.p
          className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] md:mb-5"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          Feel free to contact me if you have any{' '}
          <span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
            questions or just want to say hi.
          </span>
        </motion.p>
        <motion.p
          className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
        >
          <a href="mailto:kalki.the.dev@gmail.com?subject=Hello&body=Hello Kalki,">
            kalki.the.dev@gmail.com
          </a>
        </motion.p>
        <div className="flex justify-center items-center space-x-4">
          <motion.a
            href="mailto:kalki.the.dev@gmail.com?subject=Hello&body=Hello Kalki,"
            className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ y: { delay: 0.1 }, opacity: { delay: 0.2 } }}
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
          </motion.a>

          <motion.a
            href="https://github.com/VINODvoid"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ y: { delay: 0.2 }, opacity: { delay: 0.3 } }}
          >
            <FontAwesomeIcon icon={faGithub} className="text-3xl" />
          </motion.a>

          <motion.a
            href="https://www.x.com/kalki_kal/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ y: { delay: 0.3 }, opacity: { delay: 0.4 } }}
          >
            <FontAwesomeIcon icon={faTwitter} className="text-3xl" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/kalki__kal/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ y: { delay: 0.4 }, opacity: { delay: 0.5 } }}
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
          </motion.a>

          <motion.a
            href="https://discordapp.com/users/vinod#0060"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ y: { delay: 0.5 }, opacity: { delay: 0.6 } }}
          >
            <FontAwesomeIcon icon={faDiscord} className="text-3xl" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}
