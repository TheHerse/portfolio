import type { Metadata } from "next";
import HomePage from "../components/HomePage";

type LocalizedPageProps = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return [{ lang: "es" }];
}

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  const { lang } = await params;

  if (lang !== "es") {
    return {};
  }

  return {
    title: "Desarrollador Web Bilingue para Negocios",
    description: "Paginas web rapidas y personalizadas para negocios que necesitan clientes. Desarrollo web en ingles y espanol, SEO basico, formularios y codigo propio.",
    alternates: {
      canonical: "/es/",
      languages: {
        "en-US": "/",
        "es-US": "/es/",
      },
    },
    openGraph: {
      title: "Herson Hernandez | Desarrollador Web Bilingue",
      description: "Paginas web rapidas y personalizadas para negocios en ingles y espanol.",
      url: "https://hersonhernandez.com/es/",
      locale: "es_US",
      alternateLocale: ["en_US"],
      type: "website",
    },
  };
}

export default async function LocalizedHome({ params }: LocalizedPageProps) {
  const { lang } = await params;

  return <HomePage lang={lang === "es" ? "es" : "en"} />;
}
