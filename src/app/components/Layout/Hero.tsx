import React from "react";
import ButtonLink from "../utils/ButtonLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faComments } from "@fortawesome/free-solid-svg-icons";
import IndicatorScroll from "../IndicatorScroll";

const Hero = () => {
  return (
    <section className="relative h-screen md:pt-[70px] overflow-hidden">
      <IndicatorScroll />
      <div className="hidden md:block">
        <video
          className="fixed top-0 left-0 w-full h-full object-cover z-[1]"
          src="/assets/VzgT1sOS4ue9LJ42EAVxKEitdWo.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <div className="flex flex-col gap-10 justify-center items-start relative z-[2] container mx-auto p-2 h-full">
        <div className="flex gap-5">
          <div className="flex items-center gap-5 justify-center flex-1 bg-sky-700 rounded-full px-4 py-2 text-gray-50 text-center">
            <FontAwesomeIcon
              icon={faComments}
              size="lg"
              className="font-slate-100"
            />
            <p>Consultoria</p>
          </div>
          <div className="flex items-center gap-5 justify-center flex-1 bg-sky-700 rounded-full px-4 py-2 text-gray-50 text-center">
            <FontAwesomeIcon
              icon={faCode}
              size="lg"
              className="font-slate-100"
            />
            <p>Software</p>
          </div>
        </div>
        <div>
          <h1 className="text-5xl max-w-[20ch] uppercase text-blue-950 font-semibold">
            Construa sua presença online com{" "}
            <span className="text-blue-950">performance e SEO</span>
          </h1>
          <p className="uppercase max-w-[45ch] text-xl text-slate-800 mb-10 mt-5">
            Sites rápidos, sistemas inteligentes e estratégias de SEO pensadas
            para fazer sua empresa crescer.
          </p>
        </div>
        <ButtonLink>SOLICITAR PROPOSTA AGORA</ButtonLink>
      </div>
    </section>
  );
};

export default Hero;
