
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

  return {
    title: fr
      ? "Contactez-nous | Modern Kittens"
      : "Contact Us | Modern Kittens",
    description: fr
      ? "Contactez Modern Kittens pour toute question sur nos chatons Persans."
      : "Contact Modern Kittens with questions about our Persian kittens.",
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        en: "/en/contact",
        fr: "/fr/contact",
      },
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
