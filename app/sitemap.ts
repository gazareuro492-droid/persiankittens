
import type { MetadataRoute } from "next";

const BASE_URL = "https://persiankittens.ca";

const pages = [
  "",
  "/kittens",
  "/breeds",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) => [
    {
      url: `${BASE_URL}/en${page}`,
      alternates: {
        languages: {
          en: `${BASE_URL}/en${page}`,
          fr: `${BASE_URL}/fr${page}`,
        },
      },
    },
    {
      url: `${BASE_URL}/fr${page}`,
      alternates: {
        languages: {
          en: `${BASE_URL}/en${page}`,
          fr: `${BASE_URL}/fr${page}`,
        },
      },
    },
  ]);
}
