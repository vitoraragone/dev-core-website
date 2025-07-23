"use client";
import React, { useEffect, useState, useRef } from "react";
import ButtonLink from "../utils/ButtonLink";
import { easeOut, motion, Variants, useReducedMotion } from "framer-motion";
import IndicatorScroll from "../IndicatorScroll";

const IconComments = () => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-6 h-6 text-gray-100"
  >
    <path d="M21 6h-2v9H7v2h9l4 4V6zM3 18V4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H7l-4 4z" />
  </svg>
);

const IconCode = () => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-6 h-6 text-gray-100"
  >
    <path d="M8.293 6.293L2.586 12 8.293 17.707 9.707 16.293 5.414 12l4.293-4.293-1.414-1.414zm7.414 0l-1.414 1.414L18.586 12l-4.293 4.293 1.414 1.414L21.414 12 15.707 6.293z" />
  </svg>
);

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  const [videoVisible, setVideoVisible] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVideoVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVideoVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -100px 0px" }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen md:pt-[70px] overflow-hidden"
      aria-label="Seção principal - construa sua presença online"
    >
      <IndicatorScroll />

      {videoVisible && (
        <div className="hidden md:block" aria-hidden="true">
          <video
            className="fixed top-0 left-0 w-full h-full object-cover z-[1]"
            src="/assets/VzgT1sOS4ue9LJ42EAVxKEitdWo.mp4"
            autoPlay
            muted
            loop
            playsInline
            tabIndex={-1}
            preload="metadata"
          />
        </div>
      )}

      <motion.div
        className="flex flex-col gap-10 justify-center items-start relative z-[2] container mx-auto p-2 h-full"
        initial="hidden"
        animate={prefersReducedMotion ? "visible" : "visible"}
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
            <IconComments />
            <p>Consultoria</p>
          </div>
          <div
            className="flex items-center gap-5 justify-center flex-1 bg-sky-700 rounded-full px-4 py-2 text-gray-50 text-center"
            role="listitem"
          >
            <IconCode />
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
