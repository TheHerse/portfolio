import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Herson Hernandez | Web Developer",
  description: "Custom websites for small businesses. Fast, professional web development with no templates or monthly fees. Starting at $600.",
  keywords: "web developer, clarksville tn, website design, small business website, freelance web developer",
  authors: [{ name: "Herson Hernandez" }],
  openGraph: {
    title: "Herson Hernandez | Web Developer",
    description: "Custom websites for small businesses",
    url: "https://hersonhernandez.com",
    siteName: "Herson Hernandez",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Herson Hernandez | Web Developer",
    description: "Custom websites for small businesses",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-V9YBT08XDG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V9YBT08XDG');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}