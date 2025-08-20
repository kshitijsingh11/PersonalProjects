import { Inter } from "next/font/google";
import "../globals.css";
import NaviBar from "@/components/navbar";
import SlimFooter from "@/components/slim-footer";
import Loading from "./loading";
import { Suspense } from "react";


const inter = Inter({ subsets: ["latin"] });


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <>
          
          <div className=" border-b-2 border-border sticky top-0 bg-background z-50">
              <NaviBar />
            </div>
            <Suspense fallback={<Loading />}>
            {children}
            </Suspense>
          
            <SlimFooter />
    </>
  );
}
