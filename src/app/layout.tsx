import type { Metadata } from "next";
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
  title: "Herson Hernandez | Web Developer in Clarksville, TN",
  description: "Custom websites for small businesses in Clarksville, TN. Fast, professional web development with no templates or monthly fees. Starting at $800.",
  keywords: "web developer, clarksville tn, website design, small business website, freelance web developer",
  authors: [{ name: "Herson Hernandez" }],
  openGraph: {
    title: "Herson Hernandez | Web Developer",
    description: "Custom websites for small businesses in Clarksville, TN",
    url: "https://hersonhernandez.com",
    siteName: "Herson Hernandez",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Herson Hernandez | Web Developer",
    description: "Custom websites for small businesses in Clarksville, TN",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
    ],
  },
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
        {children}
      </body>
    </html>
  );
}