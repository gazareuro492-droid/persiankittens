
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modern Kittens",
  description:
    "Discover beautiful Persian kittens and learn about their care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
