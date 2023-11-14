import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const work = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matt Harvey Ostulano",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(work.className, "bg-[#F8F9FA]")}>{children}</body>
    </html>
  );
}