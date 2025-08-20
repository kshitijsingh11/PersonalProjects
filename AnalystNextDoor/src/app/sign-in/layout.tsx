import { Inter } from "next/font/google";
import "../globals.css";
import NaviBar from "@/components/navbar";
import Footer from "@/components/ui/footer";



const inter = Inter({ subsets: ["latin"] });


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <>
          
          
      {children}
    
    </>
  );
}
