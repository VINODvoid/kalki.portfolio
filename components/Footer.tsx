"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import { ArrowLeft } from "lucide-react";

export default function Footer() {
	return (
		<div className="flex justify-center items-center flex-col mt-5 overflow-hidden bg bg-white">
			<div className="flex justify-center items-center flex-col mt-5 self-center min-h-[50vh] border-b-2 min-w-[80vw] ">
				<Link href="/#contact">
					<motion.h2
						className="text-xl font-medium mt-3 text-center text-gray-700  hover:underline whitespace-nowrap leading-none md:tracking-[0.5rem]"
						initial={{
							opacity: 0,
							x: -100,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.2,
						}}>
						Want something like this?
					</motion.h2>
					<motion.h1
						className="text-5xl md:text-7xl font-medium mt-3  hover:underline whitespace-nowrap leading-none text-gray-950"
						initial={{
							opacity: 0,
							x: 100,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.5,
						}}>
						Get In Touch{" "}
						<ArrowLeft
							className="text-5xl ml-2 "
						/>
					</motion.h1>
				</Link>
			</div>
			<footer className="flex justify-center items-center flex-col my-5 self-start]">
				<p className="text-gray-900 text-sm">
					&copy;{new Date().getFullYear()} -{" "}
					<span className="text-gray-700 text-lg">Kalki</span>
				</p>
			</footer>
		</div>
	);
}