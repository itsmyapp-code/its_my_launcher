import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smartphone UI Showcase Hub | itsmyapp.co.uk",
  description:
    "Smartphone showcase hub featuring a realistic mobile chassis, 3x3 business matrix, 4xN app directory, persistent glassmorphism dock, and certified UK GDPR compliance.",
  authors: [{ name: "itsmyapp.co.uk" }],
  keywords: [
    "smartphone ui",
    "mobile showcase",
    "app launcher",
    "itsmyapp",
    "uk gdpr",
    "glassmorphism dock",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-neutral-950 text-white font-mono">
        {children}
      </body>
    </html>
  );
}
