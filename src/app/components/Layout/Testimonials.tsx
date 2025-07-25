"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const testimonials = [
  {
    name: "Paulo Henrique",
    company: "Imobiliária PrimeLar",
    text: "A DevCore desenvolveu um sistema de gestão imobiliária que otimizou nosso atendimento e organização. Resultado: mais agilidade e clientes satisfeitos.",
  },
  {
    name: "Fernanda Costa",
    company: "Logística Ágil",
    text: "A DevCore entregou um sistema personalizado que otimizou nossa gestão de entregas e melhorou muito a comunicação interna da equipe.",
  },
  {
    name: "Ricardo Oliveira",
    company: "Clínica BemViver",
    text: "Nosso novo sistema de agendamento e prontuário digital desenvolvido pela DevCore facilitou muito a rotina e melhorou a experiência dos pacientes.",
  },
  {
    name: "Roberto Lima",
    company: "EducaTech Soluções",
    text: "Com a plataforma criada pela DevCore, conseguimos digitalizar nossos cursos e alcançar alunos de todo o país de forma eficiente e segura.",
  },
];

const containerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      ease: "easeOut",
    },
  },
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="pt-[100px] lg:pt-[70px] min-h-screen relative z-20 bg-gradient-to-b from-white to-slate-50 px-4 flex flex-col"
      aria-label="Depoimentos reais de clientes da DevCore"
    >
      <div className="container mx-auto flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto w-full">
          <div className="flex flex-col justify-center">
            <h3
              className="text-lg uppercase text-sky-600 drop-shadow-sm tracking-wide mb-2"
              tabIndex={0}
            >
              Depoimentos reais
            </h3>
            <h4
              className="text-3xl md:text-4xl uppercase text-blue-950 font-bold mb-6"
              tabIndex={0}
            >
              O que dizem sobre a DevCore
            </h4>
            <p
              className="text-sky-900 leading-relaxed max-w-md uppercase text-lg"
              tabIndex={0}
            >
              Trabalhamos com transparência, dedicação e foco total no sucesso
              dos nossos clientes. Cada projeto é único, e nosso compromisso é
              entregar soluções que realmente transformam negócios, sempre com
              uma comunicação clara e suporte ágil.
            </p>
          </div>

          <motion.ul
            className="flex gap-6 overflow-x-auto sm:grid sm:grid-cols-2 sm:gap-8 scrollbar-none px-4 py-2"
            role="list"
            aria-label="Lista de depoimentos dos clientes"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {testimonials.map((item, index) => (
              <motion.li
                key={index}
                className="bg-white border border-sky-100 shadow-md rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 min-w-[280px] sm:min-w-auto"
                role="listitem"
                tabIndex={0}
              >
                <blockquote className="text-sky-900 text-base leading-relaxed mb-6">
                  “{item.text}”
                </blockquote>
                <div className="mt-auto">
                  <p className="text-blue-950 font-semibold">{item.name}</p>
                  <p className="text-slate-400 text-sm">{item.company}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
