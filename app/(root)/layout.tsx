"use client"
import Sidebar from "@/components/SideBar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
	return (
		<>
			<Sidebar />
			{children}
		</>
	);
}