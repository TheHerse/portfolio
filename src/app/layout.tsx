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
  metadataBase: new URL("https://hersonhernandez.com"),
  title: {
    default: "Herson Hernandez | Web Developer for Small Businesses",
    template: "%s | Herson Hernandez",
  },
  description: "Fast custom websites for small businesses in English and Spanish. Hand-coded web development, SEO setup, contact forms, and no monthly maintenance fees.",
  keywords: [
    "web developer",
    "Spanish speaking web developer",
    "bilingual web developer",
    "small business website",
    "website design",
    "freelance web developer",
    "Clarksville TN web developer",
    "desarrollo web para negocios",
    "paginas web para negocios",
  ],
  authors: [{ name: "Herson Hernandez" }],
  creator: "Herson Hernandez",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "es-US": "/es/",
    },
  },
  openGraph: {
    title: "Herson Hernandez | Web Developer for Small Businesses",
    description: "Fast custom websites for small businesses in English and Spanish.",
    url: "https://hersonhernandez.com",
    siteName: "Herson Hernandez",
    locale: "en_US",
    alternateLocale: ["es_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Herson Hernandez | Web Developer for Small Businesses",
    description: "Fast custom websites for small businesses in English and Spanish.",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
