
import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";

export const locales = ["en", "fr"] as const;

export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  const locale = hasLocale(locales, requested)
    ? requested
    : notFound();

  return {
    locale,
    messages: (
      await import(`./messages/${locale}.json`)
    ).default,
  };
});
