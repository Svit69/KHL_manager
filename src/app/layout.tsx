import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react';
import { TeamProvider } from '@/context/TeamContext';

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "KHL Manager",
  description: "Хоккейный менеджер КХЛ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <TeamProvider>
          {children}
        </TeamProvider>
      </body>
    </html>
  );
}