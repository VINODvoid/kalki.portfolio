import Image from "next/image";
import { motion } from "framer-motion";
import Setup from "@/public/images/connect.png"

import Hr from "../Hr";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
          className="bg-white lg:bg-transparent bg-opacity-50 px-3 md-px-0 text-black text-5xl md:text-8xl font-bold mb-3 "
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


export default ContactSection;