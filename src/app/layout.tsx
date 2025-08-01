import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "./components";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TMT",
  description: "TАКАСАВА МАШИН ТУЛ",
  icons:"./favicon.ico"
};

export default function RootLayout({
  phone,
  email,
  children,
}: Readonly<{
  phone: React.ReactNode;
  email: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {phone}
        {email}
        {children}
        <Footer />
      </body>
    </html>
  );
}
