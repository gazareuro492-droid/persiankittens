
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { kittens } from "@/data/kittens";

type Props = {
  params: Promise<{ locale: string }>;
};

const BASE_URL = "https://persiankittens.ca";



function formatPrice(price: number, locale: "en" | "fr") {
  return new Intl.NumberFormat(
    locale === "fr" ? "fr-CA" : "en-CA",
    {
      style: "currency",
      currency: "CAD",
      maximumFractionDigits: 0,
    }
  ).format(price);
}

function translateColor(color: string, fr: boolean) {
  if (!fr) return color;

  const colors: Record<string, string> = {
    White: "Blanc",
    Grey: "Gris",
    "Golden Shaded": "Golden Shaded",
    "Cream White": "Crème et blanc",
    Blue: "Bleu",
    "Golden Tabby": "Golden Tabby",
    "Calico Persian": "Persan calico",
    "Cream Shaded": "Crème ombrée",
  };

  return colors[color] ?? color;
}



export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale !== "en" && locale !== "fr") notFound();

  const fr = locale === "fr";
  const pageUrl = `${BASE_URL}/${locale}/kittens`;

  const title = fr
    ? "Chatons Persans à Vendre au Canada | Modern Kittens"
    : "Persian Kittens for Sale in Canada | Modern Kittens";

  const description = fr
    ? "Découvrez nos chatons Persans disponibles au Canada. Consultez leurs photos, leurs couleurs, leurs prix et leurs informations. Contactez Modern Kittens."
    : "Discover Persian kittens available in Canada. Explore their photos, coat colors, prices and details. Contact Modern Kittens to learn more.";

  return {
    title,
    description,

    alternates: {
      canonical: pageUrl,
      languages: {
        en: `${BASE_URL}/en/kittens`,
        fr: `${BASE_URL}/fr/kittens`,
        "x-default": `${BASE_URL}/en/kittens`,
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


export default async function KittensPage({ params }: Props) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "fr") notFound();

  const fr = locale === "fr";

  const availableKittens = kittens.filter(
    (kitten) => kitten.available
  );

  return (
    <main className="min-h-screen bg-[#FAF8F3]">

      {/* HERO SECTION */}
      <section className="px-6 pb-16 pt-20 text-center sm:pb-20 sm:pt-24">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#94744D]">
          {fr ? "PERSIAN KITTENS" : "PERSIAN KITTENS"}
        </p>

        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-[#294C39] sm:text-5xl lg:text-6xl">
          {fr
            ? "Découvrez nos chatons Persans"
            : "Meet Our Beautiful Persian Kittens"}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
          {fr
            ? "Découvrez nos chatons Persans, chacun avec sa personnalité et son charme. Contactez-nous pour obtenir des renseignements."
            : "Discover our beautiful Persian kittens, each with their own personality and charm. Contact us to learn more."}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="rounded-full border border-[#DCD3C2] bg-white px-5 py-2 text-sm font-medium text-[#294C39]">
            {fr ? "Chatons Persans" : "Persian Kittens"}
          </span>

          <span className="rounded-full border border-[#DCD3C2] bg-white px-5 py-2 text-sm font-medium text-[#294C39]">
            {fr ? "Canada" : "Canada"}
          </span>
        </div>
      </section>

      {/* AVAILABLE KITTENS */}
      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#94744D]">
              {fr ? "NOS COMPAGNONS" : "MEET YOUR NEW COMPANION"}
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#294C39] sm:text-3xl">
              {fr ? "Chatons disponibles" : "Available Kittens"}
            </h2>
          </div>

          <p className="text-sm text-gray-500">
            {availableKittens.length}{" "}
            {fr
              ? availableKittens.length === 1
                ? "chaton disponible"
                : "chatons disponibles"
              : availableKittens.length === 1
                ? "kitten available"
                : "kittens available"}
          </p>
        </div>

        {availableKittens.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {availableKittens.map((kitten) => (
              <article
                key={kitten.id}
className="w-full overflow-hidden rounded-3xl border border-[#EAE5DA] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"              >

                {/* KITTEN PHOTO */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F0EDE5]">

                  <Image
                    src={kitten.image}
                    alt={
                      fr
                        ? `${kitten.name}, chaton Persan disponible`
                        : `${kitten.name}, available Persian kitten`
                    }
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="object-cover transition duration-500 hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-[#294C39] px-4 py-2 text-xs font-semibold text-white shadow">
                    {fr ? "Disponible" : "Available"}
                  </span>

                </div>

                
<div className="p-6 sm:p-7">

  {/* KITTEN ID */}
  <p className="text-xs font-bold uppercase tracking-widest text-[#94744D]">
    {fr ? "Référence" : "Kitten ID"}: {kitten.id}
  </p>

  {/* NAME */}
  <h3 className="mt-2 text-2xl font-bold text-[#294C39]">
    {kitten.name}
  </h3>

  <p className="mt-2 text-sm text-gray-500">
    {fr ? "Chaton Persan" : "Persian Kitten"}
  </p>

  {/* PRICE */}
  <div className="mt-5">
    <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
      {fr ? "Prix" : "Price"}
    </p>

    <p className="mt-1 text-2xl font-bold text-[#294C39]">
      {formatPrice(kitten.price, locale)}
    </p>
  </div>

  <div className="my-5 h-px bg-[#EAE5DA]" />

  {/* KITTEN INFORMATION */}
  <div className="grid grid-cols-2 gap-x-4 gap-y-5">

    <div>
      <p className="text-xs text-gray-400">
        {fr ? "Couleur" : "Coat Color"}
      </p>
      <p className="mt-1 font-semibold text-gray-800">
        {translateColor(kitten.color, fr)}
      </p>
    </div>

    <div>
      <p className="text-xs text-gray-400">
        {fr ? "Âge" : "Age"}
      </p>
      <p className="mt-1 font-semibold text-gray-800">
        {kitten.age}
      </p>
    </div>

    <div>
      <p className="text-xs text-gray-400">
        {fr ? "Sexe" : "Sex"}
      </p>
      <p className="mt-1 font-semibold text-gray-800">
        {fr
          ? kitten.sex === "Male" ? "Mâle" : "Femelle"
          : kitten.sex}
      </p>
    </div>

    <div>
      <p className="text-xs text-gray-400">
        {fr ? "Race" : "Breed"}
      </p>
      <p className="mt-1 font-semibold text-gray-800">
        {fr ? "Persan" : kitten.breed}
      </p>
    </div>

  </div>

  {/* DESCRIPTION */}
  <p className="mt-6 text-sm leading-7 text-gray-600">
    {kitten.description[locale]}
  </p>

  {/* CONTACT BUTTON */}
  <Link
    href={`/${locale}/contact?kitten=${encodeURIComponent(kitten.id)}`}
    className="mt-7 flex w-full items-center justify-center rounded-full bg-[#294C39] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#203C2D]"
  >
    {fr
      ? `Se renseigner sur ${kitten.name}`
      : `Enquire About ${kitten.name}`}
  </Link>

</div>
 </article>
                              
))}

</div>
        ) : (

          /* NO AVAILABLE KITTENS */
          <div className="mx-auto max-w-2xl rounded-3xl border border-[#EAE5DA] bg-white px-6 py-16 text-center shadow-sm">

            <h2 className="text-2xl font-bold text-[#294C39]">
              {fr
                ? "Aucun chaton disponible actuellement"
                : "No Kittens Available Right Now"}
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              {fr
                ? "Contactez-nous pour connaître les prochaines disponibilités."
                : "Contact us to ask about upcoming kitten availability."}
            </p>

            <Link
              href={`/${locale}/contact`}
              className="mt-7 inline-flex rounded-full bg-[#294C39] px-7 py-4 font-semibold text-white transition hover:bg-[#203C2D]"
            >
              {fr ? "Nous contacter" : "Contact Us"}
            </Link>

          </div>
        )}

      </section>

      {/* FINAL CONTACT SECTION */}
      <section className="bg-[#294C39] px-6 py-16 text-center sm:py-20">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9BE8A]">
          Modern Kittens
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
          {fr
            ? "Vous cherchez votre compagnon idéal ?"
            : "Looking for Your Perfect Companion?"}
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-white/75">
          {fr
            ? "Notre équipe sera ravie de répondre à vos questions concernant nos chatons Persans."
            : "We would be happy to answer your questions about our Persian kittens."}
        </p>

        <Link
          href={`/${locale}/contact`}
          className="mt-8 inline-flex rounded-full bg-[#D9BE8A] px-8 py-4 font-semibold text-[#294C39] transition hover:bg-white"
        >
          {fr ? "Contactez-nous" : "Get in Touch"}
        </Link>

      </section>

    </main>
  );
}
