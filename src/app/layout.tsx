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
    "DevCore | Soluções digitais personalizadas em sites, sistemas, SEO e hospedagem. Atendemos com consultoria estratégica para transformar sua presença online.",
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
