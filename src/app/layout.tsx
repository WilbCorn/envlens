// src/app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from 'next/link';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "EnvLens",
  description: "Open your view to the world",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>EnvLens</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className="header">
        <Link href="/" passHref>
          <img src="/images/app-logo.png" alt="EnvLens Logo" className="app-logo" />
        </Link>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item"><Link href="/">Home</Link></li>
              <li className="nav-item"><Link href="/about">About</Link></li>
            </ul>
          </nav>
        </header>
        <main className="main-content">
          {children}
        </main>
        <footer className="footer">
          <div className="footer-divider"></div>
          <p>Copyright &copy; 2024 WH</p>
          <div className="footer-divider"></div>
        </footer>
      </body>
    </html>
  );
}
