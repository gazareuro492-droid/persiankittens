
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {
  children: React.ReactNode;
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

  const title = isFrench
    ? "Chatons Persans au Canada | Modern Kittens"
    : "Persian Kittens in Canada | Modern Kittens";

  const description = isFrench
    ? "Découvrez nos magnifiques chatons persans élevés dans un environnement familial rempli d'amour. Consultez les chatons disponibles et contactez Modern Kittens au Canada."
    : "Discover beautiful Persian kittens raised in a loving family home. Explore available kittens and contact Modern Kittens in Canada.";

  return {
    metadataBase: new URL("https://persiankittens.ca"),

    title: {
      default: title,
      template: "%s",
    },

    description,

    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        fr: "/fr",
        "x-default": "/en",
      },
    },

    openGraph: {
      type: "website",
      siteName: "Modern Kittens",
      title,
      description,
      url: `https://persiankittens.ca/${locale}`,
      locale: isFrench ? "fr_CA" : "en_CA",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}


export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "fr") {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          {children}
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
