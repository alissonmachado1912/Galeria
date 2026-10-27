import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Galeria",
  description: "Galeria de veículos — Aula 08: Carousel com Swiper, SENAI.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
