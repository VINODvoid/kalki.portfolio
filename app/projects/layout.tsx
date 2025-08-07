// generate layout with footer
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kalki | Projects"
};
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white">
      {children}
      <Footer />
    </div>
  );
}