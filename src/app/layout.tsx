
import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer, Header } from "./components";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Takasawa Machine Tool – Ремонт и обслуживание металлообрабатывающих станков",
  description: "Основным направлением деятельности ООО «TMT» является ремонт машин и оборудования, включая поставку, наладку, модернизацию и обслуживание металлообрабатывающих станков.",
  keywords: [
    "TMT",
    "ремонт станков",
    "металлообрабатывающие станки",
    "металлорежущее оборудование",
    "токарные станки",
    "фрезерные станки",
    "шлифовальные станки",
    "обслуживание оборудования",
    "модернизация станков",
  ],
  openGraph: {
    title: "Takasawa Machine Tool – Ремонт станков",
    description:
      "Поставка, наладка, модернизация и обслуживание металлообрабатывающих станков различных групп.",
    url: "https://takasawamachinetool.ru",
    siteName: "Takasawa Machine Tool",
    images: [
      {
        url: "./og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ремонт станков",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  alternates: {
    canonical: "https://takasawamachinetool.ru",
  },
  icons:"./favicon.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  phone: React.ReactNode;
  email: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <Head>
        <title>
          Takasawa Machine Tool – Ремонт и обслуживание металлообрабатывающих станков
        </title>
        <meta
          name="description"
          content="Основным направлением деятельности ООО «TMT» является ремонт машин и оборудования, включая поставку, наладку, модернизацию и обслуживание металлообрабатывающих станков."
          key="desc"
        />
        <link rel="icon" type="image/ico" href="/favicon.ico"/>
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
