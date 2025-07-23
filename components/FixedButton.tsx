import Link from "next/link";

import { ReactNode } from "react";

interface FixedButtonProps {
	children: ReactNode;
	href?: string;
}

const FixedButton = ({ children, href = '/' }: FixedButtonProps) => (
	<Link
		href={href}
		className="fixed top-2 -left-2 md:left-10 flex justify-center items-center  rounded-full p-4  transition duration-300 ease-in-out z-50 transparent">
		{children}
	</Link>
);

export default FixedButton;