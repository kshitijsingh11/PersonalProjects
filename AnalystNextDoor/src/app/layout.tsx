import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import NaviBar from "@/components/navbar";
import Footer from "@/components/ui/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/themeprovider";
import { dark } from '@clerk/themes';
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://analystnextdoor.com/'),
  title: "Analyst Next Door",
  description: "Level up your data career here. Get involved in the worldwide data enthusiasts' community",
  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
    apple: "/icon.ico",
  },
  openGraph: {
    title: 'Analyst Next Door',
    description: "Level up your data career here. Get involved in the worldwide data enthusiasts' community. ",
    images: '/opengraph.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark
    }}>
    <html lang="en">
      <body className={`${inter.className} min-h-[100dvh] bg-background flex flex-col`}>
          <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
        
           
            {children}
          
           
            </ThemeProvider>
            </body>
    </html>
    </ClerkProvider>
  );
}
