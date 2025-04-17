import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import { Header } from "./components/Header/Header";

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
  title: "Simbian AI",
  description: "Simbian AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-gradient-to-b from-[#0a1026] to-[#0c1533] text-white p-0">
          {/* Navbar */}
          <Header />

          {children}
        </div>
      </body>
    </html>
  );
}
