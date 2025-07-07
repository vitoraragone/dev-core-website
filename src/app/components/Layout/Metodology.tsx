import React from "react";
import ButtonLink from "../utils/ButtonLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faLaptopCode,
  faRocket,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Metodology = () => {
  interface Card {
    title: string;
    description: string;
    icon: IconProp;
  }
  const cards: Card[] = [
    {
      title: "Requisitos",
      description:
        "Analisamos as necessidades do seu negócio, entendendo desafios e demandas para garantir uma solução personalizada e eficaz.",
      icon: faClipboardList,
    },
    {
      title: "Prototipação",
      description:
        "Analisamos as necessidades do seu negócio, entendendo desafios e demandas para garantir uma solução personalizada e eficaz.",
      icon: faLaptopCode,
    },
    {
      title: "Desenvolvimento",
      description:
        "Implementamos o sistema com foco em eficiência e integração, priorizando qualidade e performance para atender suas necessidades.",
      icon: faTools,
    },
    {
      title: "Entrega",
      description:
        "Testamos o sistema para garantir que atenda aos requisitos, e após validação, o publicamos em produção, pronto para uso.",
      icon: faRocket,
    },
  ];

  return (
    <section className="pt-[70px] min-h-screen lg:h-screen relative lg:sticky top-0 z-3 bg-gradient-to-b from-slate-50 to-white">
      <div className="h-full container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="col-span-1 lg:col-span-5 text-center lg:text-start">
          <h3 className="text-lg uppercase text-sky-600 drop-shadow-sm mb-1 tracking-wide">
            METODOLOGIA
          </h3>
          <h4 className="text-3xl uppercase text-slate-700 leading-tight font-bold">
            Processo de desenvolvimento
          </h4>

          <p className="max-w-[65ch] leading-tight mt-6 text-lg text-slate-800 mb-12 mx-auto md:mx-0">
            A gente entende o seu negócio, desenvolve tudo sob medida e te
            acompanha em cada etapa —{" "}
            <b>do planejamento ao suporte contínuo.</b>
          </p>
          <ButtonLink>SOLICITAR PROPOSTA AGORA</ButtonLink>
        </div>

        <ul className="col-span-1 lg:col-span-7 flex flex-wrap justify-around gap-y-10 px-4">
          {cards.map((card, index) => (
            <li
              key={index}
              className="flex flex-col items-start justify-between p-5 md:max-w-[300px] h-72 border border-sky-300 rounded-md  bg-slate-50 transition-colors duration-300 hover:bg-sky-50 hover:border-sky-400 hover:shadow-sm"
            >
              <FontAwesomeIcon
                icon={card.icon}
                size="2xl"
                className="text-sky-600 mb-4"
                style={{
                  padding: "8px",
                  borderRadius: "10%",
                  boxShadow: `
                0 0 0 2px rgba(56, 189, 248, 0.4),
                0 0 0 6px rgba(56, 189, 248, 0.2),
                0 0 0 10px rgba(56, 189, 248, 0.1)
              `,
                }}
              />
              <div className="min-h-[140px]">
                <h2 className="text-2xl font-poppins uppercase text-sky-900 mb-2">
                  {card.title}
                </h2>
                <p className="text-sky-800 line-clamp-5 leading-tight">
                  {card.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Metodology;
