
import Link from "next/link";

type HeaderProps = {
  locale: "en" | "fr";
};

export default function Header({ locale }: HeaderProps) {
  const isFrench = locale === "fr";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E9E4DA] bg-[#FAF8F3]/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex min-h-[76px] items-center justify-between gap-3 py-3">
          <Link
            href={`/${locale}`}
            className="shrink-0 text-xl font-semibold tracking-tight sm:text-3xl"
          >
            Modern<span className="text-[#A58B62]">Kittens.</span>
          </Link>

          <Link
            href={isFrench ? "/en" : "/fr"}
            hrefLang={isFrench ? "en" : "fr"}
            aria-label={
              isFrench ? "Switch to English" : "Passer en français"
            }
            className="inline-flex h-11 min-w-14 shrink-0 items-center justify-center rounded-full border border-[#D8D1C4] px-4 text-sm font-medium hover:bg-white"
          >
            {isFrench ? "EN" : "FR"}
          </Link>
        </div>

        <nav
          aria-label={isFrench ? "Navigation principale" : "Main navigation"}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-[#E9E4DA] py-4 text-sm font-medium sm:gap-x-8 sm:text-base"
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
      </div>
    </header>
  );
}
