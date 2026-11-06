
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePageContent from "@/components/HomePageContent";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale !== "en" && locale !== "fr") {
    notFound();
  }

  const isFrench = locale === "fr";

  const pageUrl = `https://persiankittens.ca/${locale}`;

  const title = isFrench
    ? "Chatons Persans au Canada | Modern Kittens"
    : "Persian Kittens for Sale in Canada | Modern Kittens";

  const description = isFrench
    ? "Découvrez nos magnifiques chatons Persans élevés dans un environnement familial. Consultez les chatons disponibles et contactez Modern Kittens au Canada."
    : "Discover beautiful Persian kittens raised in a loving family home. Explore available kittens and contact Modern Kittens in Canada.";

  return {
    title,
    description,

    alternates: {
      canonical: pageUrl,
      languages: {
        en: "https://persiankittens.ca/en",
        fr: "https://persiankittens.ca/fr",
        "x-default": "https://persiankittens.ca/en",
      },
    },

    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "Modern Kittens",
      type: "website",
      locale: isFrench ? "fr_CA" : "en_CA",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function HomePage() {
  return <HomePageContent />;
}
