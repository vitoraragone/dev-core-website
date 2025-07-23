import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/utils/Navbar";
import LenisProvider from "./components/LenisProvider";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "./components/utils/Footer";
config.autoAddCss = false;

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Core | Software House",
  description:
    "DevCore | Soluções digitais personalizadas em sites, sistemas, SEO e hospedagem. Consultoria estratégica para transformar sua presença online.",
  keywords: [
    "Dev Core",
    "Software House",
    "Desenvolvimento de Sites",
    "Desenvolvimento Web",
    "Sistemas Web",
    "Sistemas Personalizados",
    "Plataformas SaaS",
    "SaaS",
    "Aplicações SaaS",
    "Consultoria Digital",
    "Consultoria em Tecnologia",
    "SEO",
    "Hospedagem de Sites",
    "Manutenção de Sites",
    "Agência de Tecnologia",
    "Empresa de Software",
    "Desenvolvimento de Aplicativos",
    "Aplicativos Web",
    "Automação de Processos",
    "Transformação Digital",
    "Landing Pages",
    "Criação de Landing Pages",
    "Desenvolvimento de Sistemas Internos",
    "Software Sob Medida",
    "Consultoria Estratégica em TI",
    "Tecnologia para Negócios",
    "Sites Otimizados para SEO",
    "UX/UI Design",
    "Design de Interface",
    "Front-End",
    "Back-End",
    "DevCore Tecnologia",
  ],

  authors: [{ name: "Dev Core", url: "https://devcore.com.br" }],
  creator: "Dev Core",
  publisher: "Dev Core",
  robots: "index, follow",
  metadataBase: new URL("https://devcore.com.br"), // substitua com seu domínio real

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://devcore.com.br",
    title: "Dev Core | Software House",
    description:
      "Soluções digitais personalizadas em sites, sistemas, SEO e hospedagem. Consultoria estratégica para transformar sua presença online.",
    siteName: "Dev Core",
    images: [
      {
        url: "https://devcore.com.br/og-image.jpg", // Substitua pela imagem real
        width: 1200,
        height: 630,
        alt: "Dev Core - Soluções Digitais",
      },
    ],
  },

  // twitter: {
  //   card: "summary_large_image",
  //   title: "Dev Core | Software House",
  //   description:
  //     "Soluções digitais personalizadas em sites, sistemas, SEO e hospedagem. Consultoria estratégica para transformar sua presença online.",
  //   images: ["https://devcore.com.br/og-image.jpg"],
  //   creator: "@devcore",
  // },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8fafc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className} antialiased`}>
        <header>
          <Navbar />
        </header>
        <LenisProvider>{children}</LenisProvider>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
