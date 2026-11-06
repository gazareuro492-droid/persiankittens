
"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function HomePageContent() {
  const t = useTranslations("Home");
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-[#FAF8F3] text-[#294235]">
      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#9B8055]">
            {t("eyebrow")}
          </p>

          <h1 className="max-w-xl text-5xl font-semibold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
            {t("title")}
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-[#6C716B] md:text-lg">
            {t("description")}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href={`/${locale}/kittens`}
              className="rounded-full bg-[#294235] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#3B5948]"
            >
              {t("button")} →
            </Link>

            <Link
              href={`/${locale}/about`}
              className="rounded-full border border-[#D8D1C4] px-7 py-4 text-sm font-medium transition hover:bg-white"
            >
              {t("learnMore")}
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#74796F]">
            <span>♡ {locale === "fr" ? "Bien-être animal" : "Animal wellbeing"}</span>
            <span>♡ {locale === "fr" ? "Soins attentionnés" : "Thoughtful care"}</span>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] bg-[#EDE5D8]">
            <img
              src="/images/hero-kitten.jpeg"
              alt={
                locale === "fr"
                  ? "Chaton photographié dans un intérieur chaleureux"
                  : "Kitten photographed in a warm, cozy home"
              }
              className="h-[380px] w-full object-cover sm:h-[520px]"
            />
          </div>

          <div className="absolute -bottom-5 left-4 rounded-2xl border border-[#E9E4DA] bg-white/95 px-5 py-4 shadow-sm sm:left-8">
            <p className="text-sm font-semibold">
              {locale === "fr"
                ? "Chaque chaton est unique"
                : "Every kitten is unique"}
            </p>
            <p className="mt-1 text-xs text-[#777A73]">
              {locale === "fr"
                ? "Découvrez leur personnalité"
                : "Discover their personality"}
            </p>
          </div>
        </div>
      </section>

      {/* Featured section */}
      <section className="mt-12 border-t border-[#E9E4DA] bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9B8055]">
            {locale === "fr" ? "Nos petits compagnons" : "Our little companions"}
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("featured")}
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-[#777A73]">
            {locale === "fr"
              ? "Rencontrez nos chatons et apprenez à connaître chacun d'eux."
              : "Meet our kittens and get to know each of their personalities."}
          </p>

          <Link
            href={`/${locale}/kittens`}
            className="mt-8 inline-flex rounded-full border border-[#294235] px-7 py-3 text-sm font-medium transition hover:bg-[#294235] hover:text-white"
          >
            {t("button")} →
          </Link>
        </div>
      </section>

      {/* Care section */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 sm:grid-cols-3">
        {[
          {
            icon: "♡",
            title: locale === "fr" ? "Bien-être avant tout" : "Wellbeing first",
            description:
              locale === "fr"
                ? "Le bien-être des chatons mérite une attention constante."
                : "Every kitten deserves thoughtful care and attention.",
          },
          {
            icon: "✳",
            title: locale === "fr" ? "Des informations claires" : "Clear information",
            description:
              locale === "fr"
                ? "Apprenez-en davantage sur leur santé, leurs habitudes et leur personnalité."
                : "Learn about their health, habits and personality.",
          },
          {
            icon: "♡",
            title: locale === "fr" ? "Un accompagnement humain" : "Personal guidance",
            description:
              locale === "fr"
                ? "Nous sommes là pour répondre à vos questions."
                : "We're here to help answer your questions.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-3xl bg-[#FAF8F3] p-8"
          >
            <span className="text-3xl text-[#A58B62]">{item.icon}</span>
            <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#777A73]">
              {item.description}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
