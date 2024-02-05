import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React, { useEffect } from 'react'

import iconTitle from "../public/icon-title.png";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Website Kaine',
  description: 'Created with Next.js app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

function App() {
        useEffect(() => {
           const link = document.createElement('link');
           link.rel = 'icon';
           link.href = iconTitle;

           document.head.appendChild(link);

           return () => document.head.removeChild(link);
        }, []);
        return (
            <div>

            </div>
        );
}
