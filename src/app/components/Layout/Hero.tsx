"use client";
import React from "react";
import ButtonLink from "../utils/ButtonLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faComments } from "@fortawesome/free-solid-svg-icons";
import IndicatorScroll from "../IndicatorScroll";
import { easeOut, motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen md:pt-[70px] overflow-hidden"
      aria-label="Seção principal - construa sua presença online"
    >
      <IndicatorScroll />

      <div className="hidden md:block" aria-hidden="true">
        <video
          className="fixed top-0 left-0 w-full h-full object-cover z-[1]"
          src="/assets/VzgT1sOS4ue9LJ42EAVxKEitdWo.mp4"
          autoPlay
          muted
          loop
          playsInline
          tabIndex={-1}
        />
      </div>

      <motion.div
        className="flex flex-col gap-10 justify-center items-start relative z-[2] container mx-auto p-2 h-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div
          className="flex gap-5"
          role="list"
          aria-label="Serviços principais"
        >
          <div
            className="flex items-center gap-5 justify-center flex-1 bg-sky-700 rounded-full px-4 py-2 text-gray-50 text-center"
            role="listitem"
          >
            <FontAwesomeIcon
              icon={faComments}
              size="lg"
              className="font-slate-100"
              aria-hidden="true"
            />
            <p>Consultoria</p>
          </div>
          <div
            className="flex items-center gap-5 justify-center flex-1 bg-sky-700 rounded-full px-4 py-2 text-gray-50 text-center"
            role="listitem"
          >
            <FontAwesomeIcon
              icon={faCode}
              size="lg"
              className="font-slate-100"
              aria-hidden="true"
            />
            <p>Software</p>
          </div>
        </div>

        <div>
          <h1 className="text-5xl max-w-[20ch] uppercase text-blue-950 font-semibold">
            Construa sua presença online com{" "}
            <span className="text-blue-950">performance e SEO</span>
          </h1>
          <p
            className="uppercase max-w-[45ch] text-xl text-slate-800 mb-10 mt-5"
            aria-label="Descrição do serviço"
          >
            Sites rápidos, sistemas inteligentes e estratégias de SEO pensadas
            para fazer sua empresa crescer.
          </p>
        </div>

        <ButtonLink aria-label="Solicitar proposta agora">
          SOLICITAR PROPOSTA AGORA
        </ButtonLink>
      </motion.div>
    </section>
  );
};

export default Hero;
