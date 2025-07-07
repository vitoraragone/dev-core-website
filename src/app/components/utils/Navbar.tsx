"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import ButtonLink from "./ButtonLink";
import Logo from "./Logo";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <header className="fixed z-[9999] w-full bg-white/10 backdrop-blur-sm uppercase h-[70px] flex items-center">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Logo />

        <nav className="hidden lg:flex gap-10 items-center">
          <ul className="flex gap-5 text-blue-950">
            <li>
              <Link className="underline-animation" href="#services">
                Serviços
              </Link>
            </li>
            <li>
              <Link className="underline-animation" href="#metodology">
                Metodologia
              </Link>
            </li>
            <li>
              <Link className="underline-animation" href="#about">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link className="underline-animation" href="#testimonials">
                Depoimentos
              </Link>
            </li>
          </ul>
          <ButtonLink>Contato</ButtonLink>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-blue-950 z-50"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} size="xl" />
        </button>

        <nav
          className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-50 to-slate-200 backdrop-blur-md flex flex-col items-center justify-center gap-10 text-blue-950 text-xl transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-8 items-center">
            <li onClick={() => setOpen(false)}>
              <Link className="underline-animation" href="#services">
                Serviços
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link className="underline-animation" href="#metodology">
                Metodologia
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link className="underline-animation" href="#about">
                Sobre Nós
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link className="underline-animation" href="#testimonials">
                Depoimentos
              </Link>
            </li>
          </ul>
          <ButtonLink>Contato</ButtonLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
