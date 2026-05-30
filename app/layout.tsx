import type { Metadata } from "next";
import { Work_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Work_Sans({
  variable: "--font-sans-var",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-var",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NerveEHR — The nervous system for modern hospitals",
  description:
    "A unified, HIPAA-ready EHR platform connecting patients, clinicians, labs, pharmacy, and billing in one workspace.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
