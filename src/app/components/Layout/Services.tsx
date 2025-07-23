"use client";
import Image from "next/image";
import React from "react";
import ButtonLink from "../utils/ButtonLink";
import { motion, Variants } from "framer-motion";

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Services = () => {
  return (
    <section
      id="services"
      className="md:pt-[70px] relative z-3 bg-gradient-to-b from-white to-slate-50"
      aria-label="Seção de serviços oferecidos pela DevCore"
    >
      {/* marquee - sem motion */}
      <div
        className="inset-shadow overflow-hidden whitespace-nowrap w-full"
        aria-hidden="true"
      >
        <div className="flex items-center">
          <h1 className="text-6xl font-poppins px-4 text-slate-700  animate-marquee">
            Desenvolvimento de Sistemas | SaaS | Aplicativos | Consultoria |
            Dashboard | Desenvolvimento de Sistemas | SaaS | Aplicativos |
            Consultoria |
          </h1>
          <h1 className="text-6xl font-poppins px-4 text-slate-700 animate-marquee">
            Desenvolvimento de Sistemas | SaaS | Aplicativos | Consultoria |
            Dashboard | Desenvolvimento de Sistemas | SaaS | Aplicativos |
            Consultoria |
          </h1>
        </div>
      </div>

      {/* services */}
      <motion.div
        className="container mx-auto mt-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUpVariants}
      >
        <h1
          className="text-center md:text-start text-2xl md:text-5xl uppercase text-blue-950 text-shadow-md text-shadow-slate-300"
          tabIndex={0}
        >
          Serviços que oferecemos
        </h1>
        <p
          className="text-center md:text-start max-w-[50ch] leading-tight mt-5 text-xl text-slate-800"
          tabIndex={0}
        >
          Na Devcore, temos todas as soluções para impulsionar o crescimento
          digital da sua empresa.
        </p>

        <motion.ul
          className="flex flex-col lg:flex-row gap-10 mt-10"
          role="list"
          aria-label="Lista de serviços oferecidos"
          variants={listVariants}
        >
          {[
            // map para evitar repetição, mas aqui mantive fixo para clareza
            {
              title: "Desenvolvimento de Software",
              desc: "Criamos sites e sistemas personalizados, pensados para resolver os desafios específicos do seu negócio.",
              imgSrc: "/assets/card-image-1.webp",
              imgAlt: "Imagem ilustrativa de desenvolvimento de software",
            },
            {
              title: "Consultoria Especializada",
              desc: "Orientamos seu projeto com foco em eficiência, sugerindo soluções que otimizam processos e resultados.",
              imgSrc: "/assets/card-image-2.webp",
              imgAlt: "Imagem ilustrativa de consultoria especializada",
            },
            {
              title: "SEO Estratégico",
              desc: "Aumente sua presença no Google com técnicas que atraem visitantes certos e geram conversões reais",
              imgSrc: "/assets/card-image-3.jpg",
              imgAlt: "Imagem ilustrativa de SEO estratégico",
            },
          ].map(({ title, desc, imgSrc, imgAlt }, idx) => (
            <motion.li
              key={idx}
              className="flex-1 border-1 border-sky-400 rounded-md shadow-md"
              variants={cardVariants}
              tabIndex={-1}
            >
              <div className="rounded-md w-full h-60">
                <Image
                  className="w-full h-full object-cover rounded-t-md"
                  src={imgSrc}
                  width={300}
                  height={300}
                  alt={imgAlt}
                  priority={idx === 0} // prioriza a primeira imagem
                />
              </div>
              <div className="px-4 py-8">
                <h3
                  className="text-2xl uppercase font-semibold text-blue-950"
                  tabIndex={0}
                >
                  {title}
                </h3>
                <p className="leading-tight mt-2 text-slate-700">{desc}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* why choose devcore */}
      <motion.div
        className="container mx-auto mt-32 px-2 text-center md:text-start border-l-4 border-r-4 md:border-r-0 border-sky-500 lg:pl-6"
        aria-label="Por que escolher a DevCore"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUpVariants}
        tabIndex={0}
      >
        <h2 className="text-3xl md:text-5xl uppercase text-blue-950 drop-shadow-sm">
          Por que escolher a DevCore?
        </h2>

        <p className="max-w-[50ch] leading-tight mt-6 text-xl text-slate-800">
          Entregamos <em>mais</em> do que tecnologia — oferecemos parceria,
          visão estratégica e{" "}
          <b className="text-blue-950">
            soluções que fazem diferença de verdade.
          </b>
        </p>
      </motion.div>

      {/* solutions */}
      <motion.section
        className="pt-[70px] w-full overflow-x-clip "
        aria-label="Soluções inteligentes DevCore"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUpVariants}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 md:items-end">
            <div className="col-span-1 lg:col-span-4 text-center lg:text-start">
              <h3
                className="text-lg uppercase text-sky-600 drop-shadow-sm mb-1 tracking-wide"
                tabIndex={0}
              >
                Soluções Inteligentes
              </h3>
              <h4
                className="text-2xl md:text-3xl uppercase text-slate-700 leading-tight font-bold"
                tabIndex={0}
              >
                Tecnologia personalizada com{" "}
                <span className="text-sky-600">IA e estratégia</span>
              </h4>

              <p className="max-w-[65ch] leading-tight mt-6 text-lg text-slate-800 mb-12">
                Na <span className="text-slate-500">Dev</span>
                <span className="text-sky-600">Core</span>, cada projeto é
                desenvolvido com foco total nas necessidades e objetivos do
                cliente. Trabalhamos lado a lado desde a concepção até a
                entrega, garantindo que o resultado final seja funcional,
                escalável e pronto para gerar valor real. Nosso diferencial está
                na união entre inteligência artificial aplicada, consultoria
                especializada e soluções digitais sob medida — tudo para tornar
                seus processos mais eficientes e seu negócio mais competitivo.
              </p>
              <div className="w-fit mx-auto lg:m-0">
                <ButtonLink>FALAR COM ESPECIALISTA</ButtonLink>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-2">
              <Image
                className="w-full h-full object-cover"
                src="/assets/services-image.png"
                width={400}
                height={400}
                alt="Profissional trabalhando em um notebook"
              />
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default Services;
