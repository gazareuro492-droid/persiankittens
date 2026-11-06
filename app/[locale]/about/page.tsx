
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const BASE_URL = "https://persiankittens.ca";

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

  return {
    title: isFrench
      ? "À propos de nous | Modern Kittens Canada"
      : "About Us | Modern Kittens Canada",

    description: isFrench
      ? "Découvrez Modern Kittens, notre passion familiale pour les chatons Persans et les soins que nous leur apportons."
      : "Discover Modern Kittens, our family passion for Persian kittens and the care we give them.",

    alternates: {
      canonical: `${BASE_URL}/${locale}/about`,
      languages: {
        en: `${BASE_URL}/en/about`,
        fr: `${BASE_URL}/fr/about`,
        "x-default": `${BASE_URL}/en/about`,
      },
    },

    openGraph: {
      title: isFrench
        ? "À propos de Modern Kittens"
        : "About Modern Kittens",
      description: isFrench
        ? "Une passion familiale pour les magnifiques chatons Persans."
        : "A family passion for beautiful Persian kittens.",
      url: `${BASE_URL}/${locale}/about`,
      siteName: "Modern Kittens",
      locale: isFrench ? "fr_CA" : "en_CA",
      type: "website",
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "fr") {
    notFound();
  }

  const isFrench = locale === "fr";

  const careItems = [
    {
      icon: "♡",
      title: isFrench ? "Alimentation" : "Nutrition",
      description: isFrench
        ? "Nous choisissons Royal Canin pour nos chatons en raison de son prix relativement abordable et de sa disponibilité dans de nombreuses animaleries et épiceries. Nous apprécions également sa longue expérience dans la nutrition animale et ses recherches sur les besoins nutritionnels des chats."
        : "We choose Royal Canin for our kittens because it is relatively affordable and readily available at many pet shops and grocery stores. We also appreciate its long history in pet nutrition and its research into feline nutritional needs.",
    },
    {
      icon: "✧",
      title: isFrench ? "Toilettage et soins quotidiens" : "Grooming and Daily Care",
      description: isFrench
        ? "Les chatons Persans ont besoin d'un entretien régulier. Nous brossons fréquemment leur pelage et nettoyons leurs yeux dans le cadre de leur routine de soins."
        : "Persian kittens need regular grooming. We frequently brush their coats and clean their eyes as part of their regular care routine.",
    },
    {
      icon: "♡",
      title: isFrench ? "Vie de famille et socialisation" : "Family Life and Socialization",
      description: isFrench
        ? "Nos chatons grandissent dans notre foyer familial, entourés d'enfants et d'autres animaux domestiques. Ils ont ainsi l'occasion de découvrir la vie de famille, les moments de jeu et les interactions quotidiennes."
        : "Our kittens grow up in our family home, around children and other household pets. They have opportunities to experience family life, playtime and everyday interactions.",
    },
    {
      icon: "✧",
      title: isFrench ? "Suivi vétérinaire et santé" : "Veterinary Care and Health",
      description: isFrench
        ? "Tous nos chatons ont été examinés par un vétérinaire et ont reçu leurs première et deuxième vaccinations. Chaque chaton est accompagné d'un certificat attestant de son bon état de santé et d'une garantie écrite de santé d'un an."
        : "All our kittens have been examined by a veterinarian and have received their first and second vaccinations. Every kitten comes with a clean bill of health and a written one-year health guarantee.",
    },
  ];

  return (
    <main className="bg-[#FAF9F6] text-[#26352B]">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#EDEFE7] px-6 py-24 text-center sm:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#8B987D]">
            {isFrench
              ? "Bienvenue chez Modern Kittens"
              : "Welcome to Modern Kittens"}
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            {isFrench
              ? "Une passion familiale fondée sur l'amour"
              : "A Family Passion Built on Love"}
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#657064] sm:text-lg">
            {isFrench
              ? "Des chatons Persans élevés au sein de notre foyer familial, avec affection, attention et amour."
              : "Persian kittens raised in our family home with affection, attention and love."}
          </p>

          <Link
            href={`/${locale}/kittens`}
            className="mt-9 inline-flex rounded-full bg-[#536B50] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#3F553D]"
          >
            {isFrench ? "Découvrir nos chatons" : "Meet Our Kittens"}
          </Link>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8B987D]">
              {isFrench ? "Notre histoire" : "Our Story"}
            </p>

            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              {isFrench
                ? "Une passion qui vient du cœur"
                : "A Passion That Comes From the Heart"}
            </h2>

            <p className="mt-6 leading-8 text-[#687367]">
              {isFrench
                ? "Modern Kittens est né d'une véritable passion familiale pour les chats Persans. Notre amour pour ces magnifiques compagnons est devenu un engagement à les élever dans un environnement familial rempli d'affection et d'attention."
                : "Modern Kittens was born from a genuine family passion for Persian cats. Our love for these beautiful companions has grown into a commitment to raising them in a family environment filled with affection and attention."}
            </p>

            <p className="mt-5 leading-8 text-[#687367]">
              {isFrench
                ? "Nos chatons grandissent dans notre maison, entourés de notre famille, de nos enfants et d'autres animaux domestiques. Nous apprécions les moments de jeu, les interactions quotidiennes et les liens particuliers qui se développent avec eux."
                : "Our kittens grow up in our family home, surrounded by our family, children and other household pets. We enjoy their playtime, everyday interactions and the special bonds that develop with them."}
            </p>

            <p className="mt-5 leading-8 text-[#687367]">
              {isFrench
                ? "Notre objectif est de trouver à chaque chaton un foyer où il sera aimé, respecté et considéré comme un véritable membre de la famille."
                : "Our goal is to find every kitten a home where they will be loved, cherished and treated as a true member of the family."}
            </p>
          </div>

          <div className="rounded-3xl bg-[#E9EDE4] p-5 sm:p-8">
            <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-[#D9E0D3] bg-[#F5F5EF] p-8 text-center">
              <div>
                <span className="text-5xl">🐱</span>
                <p className="mt-5 text-xl font-semibold">
                  Modern Kittens
                </p>
                <p className="mt-2 text-sm text-[#687367]">
                  {isFrench
                    ? "Le charme des chatons Persans"
                    : "The charm of Persian kittens"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8B987D]">
            {isFrench ? "Notre philosophie" : "Our Philosophy"}
          </p>

          <h2 className="text-3xl font-semibold sm:text-4xl">
            {isFrench
              ? "Bien plus qu'un achat, un engagement pour la vie"
              : "More Than a Purchase, A Lifetime Commitment"}
          </h2>

          <p className="mt-7 text-base leading-8 text-[#687367] sm:text-lg">
            {isFrench
              ? "Pour nous, accueillir un chaton représente bien plus que l'argent dépensé pour l'adopter. Un chaton mérite une famille prête à lui offrir de l'amour, de la patience, de l'attention et du temps."
              : "For us, welcoming a kitten into your home means much more than the money spent to bring them home. A kitten deserves a family ready to offer love, patience, attention and time."}
          </p>

          <p className="mt-5 text-base leading-8 text-[#687367] sm:text-lg">
            {isFrench
              ? "Nous souhaitons que chaque chaton trouve un foyer sûr et aimant, où il sera choyé et entouré d'affection tout au long de sa vie."
              : "We want every kitten to find a safe and loving home where they will be spoiled with affection and cared for throughout their life."}
          </p>
        </div>
      </section>

      {/* Kitten Care */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8B987D]">
              {isFrench ? "Nos soins aux chatons" : "Our Kitten Care"}
            </p>

            <h2 className="text-3xl font-semibold sm:text-4xl">
              {isFrench
                ? "Grandir avec attention et affection"
                : "Growing Up With Care and Affection"}
            </h2>

            <p className="mt-5 leading-8 text-[#687367]">
              {isFrench
                ? "Nous accordons de l'importance aux soins quotidiens, à la vie familiale et au bien-être de chacun de nos chatons."
                : "We value daily care, family interaction and the wellbeing of every kitten."}
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2">
            {careItems.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-[#EAE5DA] bg-white p-8 shadow-sm"
              >
                <span className="text-3xl text-[#8B987D]">
                  {item.icon}
                </span>

                <h3 className="mt-5 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-[#687367]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Finding Forever Homes */}
      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8B987D]">
            {isFrench ? "Un foyer pour la vie" : "A Forever Home"}
          </p>

          <h2 className="text-3xl font-semibold sm:text-4xl">
            {isFrench
              ? "Le bonheur de trouver la bonne famille"
              : "The Joy of Finding the Right Family"}
          </h2>

          <p className="mt-7 leading-8 text-[#687367]">
            {isFrench
              ? "Nous encourageons chaque famille intéressée à réfléchir attentivement à la responsabilité qu'implique l'accueil d'un chaton. L'amour, la patience, l'attention et le temps sont tout aussi importants que le prix d'achat."
              : "We encourage every prospective family to think carefully about the responsibility of welcoming a kitten. Love, patience, attention and time are just as important as the purchase price."}
          </p>

          <p className="mt-5 leading-8 text-[#687367]">
            {isFrench
              ? "Notre plus grand souhait est de savoir que nos chatons rejoignent des familles qui les aiment sincèrement et qui sont prêtes à leur offrir les soins qu'ils méritent."
              : "Our greatest wish is to know that our kittens are joining families who genuinely love them and are ready to provide the care they deserve."}
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#EDEFE7] px-6 py-20 text-center sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {isFrench
              ? "Prêt à découvrir nos chatons ?"
              : "Ready to Meet Our Kittens?"}
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-[#687367]">
            {isFrench
              ? "Découvrez nos chatons disponibles ou contactez-nous pour toute question. Nous serons heureux de vous renseigner."
              : "Explore our available kittens or contact us with any questions. We would be happy to hear from you."}
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={`/${locale}/kittens`}
              className="rounded-full bg-[#536B50] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#3F553D]"
            >
              {isFrench ? "Voir les chatons" : "View Available Kittens"}
            </Link>

            <Link
              href={`/${locale}/contact`}
              className="rounded-full border border-[#536B50] px-8 py-4 text-sm font-semibold text-[#536B50] transition hover:bg-white"
            >
              {isFrench ? "Nous contacter" : "Contact Us"}
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
