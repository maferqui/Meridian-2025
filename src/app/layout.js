'use client';

import localFont from 'next/font/local'
import '@fontsource/libre-baskerville/400.css'
import '@fontsource/libre-baskerville/700.css'
import "./globals.css";

import { ScrollToTopButton } from "@/components/custom/ScrollToTopButton";

const theYoungestSerif = localFont({
  src: "../fonts/TheYoungestSerif.ttf",
  variable: "--font-primary",
  subsets: ["latin"],
});

const ttCommonsPro = localFont({
  src: "../fonts/TTCommonsPro.otf",
  variable: "--font-secondary",
  subsets: ["latin"],
});


import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "Meridian");
  }, []);

  return (
    <html lang="en">
      <body
        className="antialiased scroll-smooth"
      >
        <ScrollToTopButton />
        {children}
      </body>
    </html>
  );
}