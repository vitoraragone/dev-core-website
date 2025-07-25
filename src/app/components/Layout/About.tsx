"use client";
import React from "react";
import ButtonLink from "../utils/ButtonLink";
import Image from "next/image";
import { motion, Variants, easeOut } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      when: "beforeChildren",
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen pt-[70px] relative lg:sticky top-0 z-20 bg-gradient-to-b from-white to-slate-50"
      aria-labelledby="about-title"
    >
      <motion.div
        className="min-h-screen container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        role="region"
        aria-label="Seção sobre a empresa DevCore"
      >
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-start"
          variants={textVariants}
          tabIndex={0}
        >
          <h3
            id="about-title"
            className="text-5xl lg:text-xl uppercase text-sky-600 drop-shadow-sm mb-1 tracking-wide"
          >
            SOBRE NÓS
          </h3>
          <h4 className="text-3xl uppercase text-slate-700 leading-tight font-bold">
            Conheça a <span className="text-blue-950">Devcore</span>
          </h4>

          <p className="max-w-[65ch] leading-tight mt-6 text-lg text-slate-800 mb-12 mx-auto lg:mx-0">
            Na DevCore, a gente acredita que tecnologia de verdade é aquela que
            resolve o problema do cliente. Por isso, criamos websites, sistemas
            e plataformas totalmente personalizados pra empresas que querem
            crescer, otimizar processos e fortalecer a presença online. Além do
            desenvolvimento, oferecemos hospedagem robusta e serviços de SEO pra
            sua empresa não só estar online, mas também ser encontrada pelos
            clientes certos. Seja qual for o tamanho do seu desafio, pode contar
            com a DevCore pra transformar ideia em solução digital de alto
            nível.
          </p>

          <ButtonLink aria-label="Solicitar proposta agora">
            SOLICITAR PROPOSTA AGORA
          </ButtonLink>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2"
          variants={imageVariants}
          aria-hidden="true"
        >
          <Image
            className="w-full h-full object-cover shadow-md rounded-md"
            src="/assets/team-group.jpg"
            width={400}
            height={400}
            alt="Equipe profissional da DevCore trabalhando"
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
