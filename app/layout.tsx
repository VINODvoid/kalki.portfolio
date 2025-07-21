import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const poppins = Poppins({
   subsets:["latin"],
   variable:"--font-poppins",
   weight:["400","500","600","700"]
})



export const metadata: Metadata = {
  title: "Kalki | Portfolio",
  description: "My name is Vinod Vardaram, I'm a Software Developer. The question isn't who am I, but when am I? ",
  keywords:[
   "kalki",
   "kalki portfolio",
   "vinod portfolio",
   "vinod vardaram",
   "vinod vard",
   "vinod ram",
   "kalki vinod",
   "vinod kal",
   "portfolio developer",
   "vinod",
   "portfolio vinod",
  ],
  openGraph:{
    type:"website",
    title:"Kalki | Portfolio",
    siteName:"Kalki | Portfolio",
    description:"My name is Vinod Vardaram, I'm a Software Developer. The question isn't who am I, but when am I? ",
  },
  icons:{
    icon:"/images/icon.png"
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${poppins.variable}antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
