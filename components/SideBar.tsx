"use client";

import { useEffect, useState } from "react";
import { Home, User, FolderOpen, Mail } from "lucide-react";

const sections = ["home", "about", "projects", "contact"];

export default function Sidebar() {
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const id = entry.target.id;
						setActiveSection(id);
					}
				});
			},
			{
				threshold: 0.6,
			}
		);

		sections.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	const scrollToSection = (id: string) => {
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="hidden md:flex fixed z-40 bg-gray-200 h-[50vh] w-14 flex-col justify-between items-center p-4 left-0 top-1/4 rounded-e-3xl shadow-md">
			<ul className="flex flex-col justify-evenly items-center h-full text-gray-800">
				{sections.map((section, index) => {
					const Icon =
						section === "home"
							? Home
							: section === "about"
							? User
							: section === "projects"
							? FolderOpen
							: Mail;

					return (
						<li key={section} className="relative">
							<button
								onClick={() => scrollToSection(section)}
								className="flex flex-col items-center"
							>
								<Icon size={20} />
								{/* underline */}
								<span
									className={`h-[2px] w-4 mt-1 rounded-sm transition-all ${
										activeSection === section
											? "bg-blue-500 scale-100"
											: "scale-0"
									}`}
								></span>
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
