"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears, faBolt, faRocket } from "@fortawesome/free-solid-svg-icons";
import { motion, Variants, easeOut } from "framer-motion";

const cards = [
  {
    icon: faGears,
    title: "Consultoria Especializada",
    description:
      "Entendemos seus objetivos e indicamos as melhores soluções digitais para acelerar seu crescimento.",
  },
  {
    icon: faBolt,
    title: "Desenvolvimento de Sites",
    description:
      "Criamos sites modernos, personalizados e otimizados para conversão, focados nas metas do seu negócio.",
  },
  {
    icon: faRocket,
    title: "Hospedagem Segura",
    description:
      "Oferecemos servidores de alta performance com estabilidade, segurança e suporte dedicado sempre que precisar.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      ease: easeOut,
    },
  },
};

const Solutions = () => {
  return (
    <motion.section
      id="solutions"
      className="pt-[100px] lg:pt-[70px] min-h-screen relative z-20 bg-gradient-to-b from-slate-50 to-white flex flex-col"
      aria-label="Seção de soluções pensadas para sua empresa"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 flex flex-col flex-1 gap-20 justify-center">
        <div className="text-center" tabIndex={0}>
          <h3 className="text-4xl md:text-5xl uppercase text-sky-600 drop-shadow-sm mb-1 tracking-wide">
            Soluções pensadas em você
          </h3>
          <h4 className="text-3xl md:text-4xl uppercase text-slate-700 leading-tight font-bold">
            Integrados para sua empresa lucrar mais com menos esforço
          </h4>
        </div>

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center backdrop-blur-md rounded-2xl p-8"
          role="list"
          aria-label="Lista de soluções oferecidas"
        >
          {cards.map((card, index) => (
            <motion.li
              key={index}
              className="flex flex-col items-start justify-between w-full max-w-[300px] h-auto border border-sky-300 rounded-xl bg-slate-50 p-6 transition-all duration-300 shadow hover:shadow-lg hover:border-sky-400 hover:scale-[1.015]"
              role="listitem"
              tabIndex={-1}
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
                aria-hidden="true"
              />
              <div>
                <h2
                  className="text-xl font-poppins uppercase text-sky-900 py-3"
                  tabIndex={0}
                >
                  {card.title}
                </h2>
                <p className="text-sky-800 leading-tight">{card.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default Solutions;
