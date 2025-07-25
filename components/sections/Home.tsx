import Image from "next/image";
import { motion } from "framer-motion";
import Me from "@/public/images/beserk.png"
import Button from "../Button";
import Link from "next/link";

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
          className="text-black text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold my-2 md:my-5 "
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
          Hello! I&apos;m Vinod (KALKI), a dedicated full-stack developer with expertise in modern web development and a keen interest in artificial intelligence. I&rsquo;m passionate about creating scalable, user-friendly web applications and diving into innovative AI technologies, including generative models and LLM integration, as well as Web3 technologies like Solana, Ethereum, and DePIN.
        </motion.p>
        <motion.div
          className="buttons flex flex-row justify-center items-center space-x-4 mt-10"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
        >
          <Button variation="primary">
            <Link href="/docs/resume.pdf" target="_blank" rel="noopener noreferrer" download>
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

export default HomeSection;