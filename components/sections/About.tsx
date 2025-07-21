import Image from "next/image";
import { motion } from "framer-motion";
import MeAbout from "@/public/images/me.png"
import Button from "../Button";
import Link from "next/link";
import Hr from "../Hr";

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
          className="bg-white lg:bg-transparent bg-opacity-50 px-3 md-px-0 text-black text-5xl md:text-8xl font-bold  "
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


export default AboutSection;