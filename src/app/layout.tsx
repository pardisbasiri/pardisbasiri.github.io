// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={[
          inter.className,
          "bg-white text-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 antialiased",
        ].join(" ")}
      >
        <Header />        
        {children}
      </body>
    </html>
  );
}
