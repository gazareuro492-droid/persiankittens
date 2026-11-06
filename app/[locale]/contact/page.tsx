
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import { kittens } from "@/data/kittens";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ kitten?: string }>;
};


export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale !== "en" && locale !== "fr") {
    notFound();
  }

  const fr = locale === "fr";
  const pageUrl = `https://persiankittens.ca/${locale}/contact`;

  const title = fr
    ? "Contactez Modern Kittens | Chatons Persans au Canada"
    : "Contact Modern Kittens | Persian Kittens in Canada";

  const description = fr
    ? "Contactez Modern Kittens pour obtenir des renseignements sur nos chatons Persans, leur disponibilité, leurs soins et le processus d'adoption."
    : "Contact Modern Kittens for information about our Persian kittens, availability, care and the process of welcoming a kitten into your home.";

  return {
    title,
    description,

    alternates: {
      canonical: pageUrl,
      languages: {
        en: "https://persiankittens.ca/en/contact",
        fr: "https://persiankittens.ca/fr/contact",
        "x-default": "https://persiankittens.ca/en/contact",
      },
    },

    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "Modern Kittens",
      type: "website",
      locale: fr ? "fr_CA" : "en_CA",
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


export default async function ContactPage({
  params,
  searchParams,
}: Props) {
  const { locale } = await params;
  const { kitten: kittenId } = await searchParams;

  if (locale !== "en" && locale !== "fr") {
    notFound();
  }

  // Find a known, currently available kitten.
  const selectedKitten = kittens.find(
    (kitten) =>
      kitten.id === kittenId && kitten.available
  );

  const fr = locale === "fr";

  return (
    <main className="min-h-screen bg-[#FAF8F3]">
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#94744D]">
            Modern Kittens
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[#294C39] sm:text-5xl">
            {fr ? "Contactez-nous" : "Contact Us"}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
            {fr
              ? "Vous avez une question sur nos chatons Persans ? Envoyez-nous un message. Nous serons ravis de vous renseigner."
              : "Have a question about our Persian kittens? Send us a message. We will be happy to help."}
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-[#EAE5DA] bg-white p-6 shadow-sm sm:p-10">
          <ContactForm
            locale={locale}
            selectedKitten={
              selectedKitten
                ? {
                    id: selectedKitten.id,
                    name: selectedKitten.name,
                    color: selectedKitten.color,
                  }
                : null
            }
          />
        </div>
      </section>
    </main>
  );
}
