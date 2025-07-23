import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-black text-white relative z-30 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col space-y-4 max-w-xs">
          <div className="flex items-center space-x-3">
            <Logo />
          </div>
          <p className="text-slate-400 text-md leading-relaxed">
            Soluções digitais personalizadas em sites, sistemas, SEO e
            hospedagem. Atendemos com consultoria estratégica para transformar
            sua presença online
          </p>
        </div>

        <nav className="flex flex-col space-y-3 text-sm">
          <h5 className="uppercase font-semibold text-sky-500 mb-3">
            Navegação
          </h5>
          <Link
            href="/"
            className="hover:text-sky-500 transition-colors duration-200 uppercase"
          >
            Início
          </Link>
          <Link
            href="#services"
            className="hover:text-sky-500 transition-colors duration-200 uppercase"
          >
            Serviços
          </Link>
          <Link
            href="#metodology"
            className="hover:text-sky-500 transition-colors duration-200 uppercase"
          >
            Metodologia
          </Link>
          <Link
            href="#about"
            className="hover:text-sky-500 transition-colors duration-200 uppercase"
          >
            Sobre Nós
          </Link>
          <Link
            href="#testimonials"
            className="hover:text-sky-500 transition-colors duration-200 uppercase"
          >
            Depoimentos
          </Link>
          <Link
            href="#contact"
            className="hover:text-sky-500 transition-colors duration-200 uppercase"
          >
            Contato
          </Link>
        </nav>

        <div className="flex flex-col space-y-0.5 text-sm text-slate-400">
          <h5 className="uppercase font-semibold text-sky-500 mb-3">Contato</h5>
          <p>Rua Raimundo Montanari, 1421 - Sala 302</p>
          <p>Flores da Cunha, RS</p>
          <p>Email: contato@devcore.com.br</p>
          <p>Telefone: (11) 91234-5678</p>
        </div>

        <div className="flex flex-col space-y-4 text-sm text-slate-400">
          <h5 className="uppercase font-semibold text-sky-500 mb-3">
            Redes Sociais
          </h5>
          <p>LinkedIn: linkedin.com/company/devcore</p>
          <p>Instagram: instagram.com/devcore</p>
          <p>WhatsApp: (11) 91234-5678</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800 mt-12 pt-6 text-center text-slate-500 text-xs">
        © {new Date().getFullYear()} DevCore. Todos os direitos reservados.
      </div>
    </section>
  );
};

export default Footer;
