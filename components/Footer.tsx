
import Link from "next/link";

type FooterProps = {
  locale: "en" | "fr";
};

export default function Footer({ locale }: FooterProps) {
  const isFrench = locale === "fr";

  return (
    <footer className="border-t border-[#E9E4DA] bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 py-8 text-center sm:px-6">

        <Link
          href={`/${locale}`}
          className="text-xl font-semibold text-[#294235]"
        >
          Modern<span className="text-[#A58B62]">Kittens.</span>
        </Link>

        <nav
          aria-label={
            isFrench ? "Navigation de pied de page" : "Footer navigation"
          }
          className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm text-[#6C716B]"
        >
          <Link href={`/${locale}/kittens`} className="hover:text-[#A58B62]">
            {isFrench ? "Nos chatons" : "Our Kittens"}
          </Link>

          <Link href={`/${locale}/breeds`} className="hover:text-[#A58B62]">
            {isFrench ? "Persans" : "Persians"}
          </Link>

          <Link href={`/${locale}/about`} className="hover:text-[#A58B62]">
            {isFrench ? "À propos" : "About Us"}
          </Link>

          <Link href={`/${locale}/contact`} className="hover:text-[#A58B62]">
            Contact
          </Link>
        </nav>

        <p className="text-xs leading-6 text-[#777A73]">
          © {new Date().getFullYear()} Modern Kittens.
          {" "}
          {isFrench
            ? "Tous droits réservés."
            : "All rights reserved."}
        </p>
      </div>
    </footer>
  );
}
