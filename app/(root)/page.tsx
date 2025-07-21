"use client"
import ReactFullpage from "@fullpage/react-fullpage";
import Image from "next/image";
import { motion } from "framer-motion";

import Me from "@/public/images/me.png"
export default function Home() {
  const fullPageOptions = {
    anchors:["home","about","projects","contact"],
    scrollingSpeed : 1500,
    licenseKey:"MIT-License",
    menu:"#sidebar",
    lockAnchors:false,
    credits: { enabled: false }, // Added required 'credits' property
  };
  return (
    <div>
      <ReactFullpage render={({state,fullpageApi}) =>(
        <ReactFullpage.Wrapper>
          <div className="section">
            <div className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-4 p-10 overflow-hidden md:px-20">
          <motion.div
          className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start"
          initial={{x:-100,opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{type:"spring"}}
          >
            <div className="block md:hidden col-span-1 mx-auto my-10">
              <div className="bg-slate-500 rounded-full h-60 w-60 grayscale hover:grayscale-0 transition-all ease-in duration-300">
                {/* need assit */}
                <Image src={Me} alt="me" width={300} height={300}/>
              </div>
            </div>
            <motion.h3
            className="uppercase text-xl font-normal tracking-[.5rem] text-gray-500 "
            initial={{x:-100,opacity:0}}
            transition={{
              delay:0.5,
              type:"spring",
            }}
            >
              Vinod ( Kalki )
            </motion.h3>
          </motion.div>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      )} {...fullPageOptions}/>
        
    </div>
  );
}
