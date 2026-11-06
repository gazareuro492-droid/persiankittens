
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const persianStyles = [
  {
    name: {
      en: "White Persian",
      fr: "Persan blanc",
    },
    description: {
      en: "A beautiful white coat with an elegant, soft appearance. Regular grooming helps keep the coat clean and comfortable.",
      fr: "Un magnifique pelage blanc à l'apparence élégante et douce. Un toilettage régulier aide à garder le pelage propre et confortable.",
    },
    image: "/images/hero-kitten666.jpg",
  },
  {
    name: {
      en: "Cream Persian",
      fr: "Persan crème",
    },
    description: {
      en: "A warm, pale cream coat that gives these cats a gentle, charming look.",
      fr: "Un pelage crème clair et chaleureux qui donne à ces chats une apparence douce et charmante.",
    },
    image: "/images/hero-kitten11.jpg",
  },
  {
    name: {
      en: "Bi-color Persian",
      fr: "Persan bicolore",
    },
    description: {
      en: "A lovely combination of white and another coat color, with patterns that make every cat unique.",
      fr: "Une jolie combinaison de blanc et d'une autre couleur, avec des motifs qui rendent chaque chat unique.",
    },
    image: "/images/hero-kitten5555.jpg",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (locale !== "en" && locale !== "fr") {
    return {};
  }

  const isFrench = locale === "fr";

  return {
    title: isFrench
      ? "Chatons persans | Modern Kittens"
      : "Persian Kittens | Modern Kittens",

    description: isFrench
      ? "Découvrez les chatons persans, leurs couleurs de robe, leurs caractéristiques et leurs besoins en matière de soins."
      : "Discover Persian kittens, their coat colors, characteristics and care needs.",

    alternates: {
      canonical: `/${locale}/breeds`,
      languages: {
        en: "/en/breeds",
        fr: "/fr/breeds",
      },
    },
  };
}

export default async function BreedsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "fr") {
    notFound();
  }

  const isFrench = locale === "fr";

  return (
    <main className="min-h-screen bg-[#FAF8F3] text-[#294235]">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9B8055]">
            {isFrench ? "Notre spécialité" : "Our specialty"}
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
            {isFrench
              ? "Découvrez nos chatons persans"
              : "Discover our Persian kittens"}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#6C716B] sm:text-lg">
            {isFrench
              ? "Élégants, attachants et reconnaissables à leur magnifique pelage, les chats persans séduisent par leur charme particulier. Découvrez leurs couleurs et apprenez à mieux les connaître."
              : "Elegant and charming, Persian cats are admired for their beautiful coats and distinctive appearance. Explore their colors and learn more about this beloved breed."}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center rounded-full bg-[#294235] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#3B5848]"
            >
              {isFrench ? "Nous contacter" : "Make an inquiry"} →
            </Link>

            <Link
              href={`/${locale}/kittens`}
              className="inline-flex items-center rounded-full border border-[#D8D1C4] px-7 py-3.5 text-sm font-medium transition hover:bg-white"
            >
              {isFrench ? "Voir les chatons" : "Meet our kittens"}
            </Link>
          </div>
        </div>
      </section>

      {/* Breed introduction */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="grid gap-10 rounded-3xl border border-[#E9E4DA] bg-white p-6 sm:p-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9B8055]">
              {isFrench ? "La race persane" : "The Persian breed"}
            </p>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              {isFrench
                ? "Une beauté tout en douceur"
                : "Beauty in every detail"}
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#6C716B]">
              {isFrench
                ? "Les chats persans sont connus pour leur pelage long, leur tête arrondie et leur expression douce. Chaque chat possède sa propre personnalité. Un brossage fréquent et des soins adaptés sont essentiels à leur bien-être."
                : "Persian cats are known for their long coats, rounded features and sweet expression. Every cat has an individual personality. Frequent brushing and appropriate care are important for their wellbeing."}
            </p>

            <ul className="mt-6 space-y-3 text-sm leading-6 text-[#53685B]">
              <li>
                ♡ {isFrench ? "Pelage long et soyeux" : "Long, luxurious coat"}
              </li>
              <li>
                ♡ {isFrench
                  ? "Personnalité propre à chaque chat"
                  : "An individual personality in every cat"}
              </li>
              <li>
                ♡ {isFrench
                  ? "Toilettage régulier nécessaire"
                  : "Regular grooming required"}
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl bg-[#EDE5D8]">
            <img
              src="/images/hero-kitten1.jpeg"
              alt={
                isFrench
                  ? "Photo illustrative d'un chaton persan"
                  : "Illustrative Persian kitten photograph"
              }
              className="h-72 w-full object-cover sm:h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* Persian coat colors */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9B8055]">
            {isFrench ? "Couleurs et robes" : "Coat colors"}
          </p>

          <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
            {isFrench
              ? "Chaque robe a son charme"
              : "Every coat has its charm"}
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#6C716B]">
            {isFrench
              ? "Découvrez quelques exemples de couleurs de robe chez les chats persans."
              : "Explore a few examples of coat colors found in Persian cats."}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {persianStyles.map((style) => (
            <article
              key={style.name.en}
              className="overflow-hidden rounded-3xl border border-[#E9E4DA] bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="overflow-hidden bg-[#EDE5D8]">
                <img
                  src={style.image}
                  alt={
                    isFrench
                      ? `Image illustrative : ${style.name.fr}`
                      : `Illustrative ${style.name.en} coat color`
                  }
                  className="h-64 w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {isFrench ? style.name.fr : style.name.en}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6C716B]">
                  {isFrench
                    ? style.description.fr
                    : style.description.en}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-xs leading-6 text-[#777A73]">
          {isFrench
            ? "Ces exemples présentent des couleurs de robe, et non des races distinctes ni des chatons actuellement disponibles."
            : "These are coat color examples, not separate breeds or confirmation of currently available kittens."}
        </p>
      </section>

      {/* Contact call to action */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl bg-[#294235] px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {isFrench
              ? "Vous aimez les chats persans ?"
              : "Love Persian kittens?"}
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/75">
            {isFrench
              ? "Écrivez-nous pour poser vos questions sur nos chatons, leurs soins et leur disponibilité."
              : "Contact us with questions about our kittens, their care and availability."}
          </p>

          <Link
            href={`/${locale}/contact`}
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[#294235] transition hover:bg-[#F0E9DD]"
          >
            {isFrench ? "Nous contacter" : "Contact us"} →
          </Link>
        </div>
      </section>
    </main>
  );
}
