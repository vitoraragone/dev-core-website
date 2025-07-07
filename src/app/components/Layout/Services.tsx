import Image from "next/image";
import React from "react";
import ButtonLink from "../utils/ButtonLink";

const Services = () => {
  return (
    <section className="md:pt-[70px] relative z-3 bg-gradient-to-b from-white to-slate-50">
      {/* marquee */}
      <div className="inset-shadow overflow-hidden whitespace-nowrap w-full">
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
      <div className="container mx-auto mt-20 px-4">
        <h1 className="text-center md:text-start text-2xl md:text-5xl uppercase text-blue-950 text-shadow-md text-shadow-slate-300">
          Serviços que oferecemos
        </h1>
        <p className="text-center md:text-start max-w-[50ch] leading-tight mt-5 text-xl text-slate-800">
          Na Devcore, temos todas as soluções para impulsionar o crescimento
          digital da sua empresa.
        </p>

        <ul className="flex flex-col lg:flex-row gap-10 mt-10">
          <li className="flex-1 border-1 border-sky-400 rounded-md shadow-md">
            <div className="rounded-md w-full h-60">
              <Image
                className="w-full h-full object-cover rounded-t-md"
                src="/assets/card-image-1.webp"
                width={300}
                height={300}
                alt="Card Image 1"
              />
            </div>
            <div className="px-4 py-8">
              <h3 className="text-2xl uppercase font-semibold text-blue-950">
                Desenvolvimento de Software
              </h3>
              <p className="leading-tight mt-2 text-slate-700">
                Criamos sites e sistemas personalizados, pensados para resolver
                os desafios específicos do seu negócio.
              </p>
            </div>
          </li>
          <li className="flex-1 border-1 border-sky-400 rounded-md shadow-md">
            <div className="rounded-md w-full h-60">
              <Image
                className="w-full h-full object-cover rounded-t-md"
                src="/assets/card-image-2.webp"
                width={300}
                height={300}
                alt="Card Image 2"
              />
            </div>
            <div className="px-4 py-8">
              <h3 className="text-2xl uppercase font-semibold text-blue-950">
                Consultoria Especializada
              </h3>
              <p className="leading-tight mt-2 text-slate-700">
                Orientamos seu projeto com foco em eficiência, sugerindo
                soluções que otimizam processos e resultados.
              </p>
            </div>
          </li>
          <li className="flex-1 border-1 border-sky-400 rounded-md shadow-md">
            <div className="rounded-md w-full h-60">
              <Image
                className="w-full h-full object-cover rounded-t-md"
                src="/assets/card-image-3.jpg"
                width={300}
                height={300}
                alt="Card Image 3"
              />
            </div>
            <div className="px-4 py-8">
              <h3 className="text-2xl uppercase font-semibold text-blue-950">
                SEO Estratégico
              </h3>
              <p className="leading-tight mt-2 text-slate-700">
                Aumente sua presença no Google com técnicas que atraem
                visitantes certos e geram conversões reais
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* why choose devcore */}
      <div className="container mx-auto mt-32 px-2 text-center md:text-start border-l-4 border-r-4 md:border-r-0 border-sky-500 lg:pl-6">
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
      </div>

      {/* solutions */}
      <section className="pt-[70px] w-full overflow-x-clip ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 md:items-end">
            <div className="col-span-1 lg:col-span-4 text-center lg:text-start">
              <h3 className="text-lg uppercase text-sky-600 drop-shadow-sm mb-1 tracking-wide">
                Soluções Inteligentes
              </h3>
              <h4 className="text-2xl md:text-3xl uppercase text-slate-700 leading-tight font-bold">
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
      </section>
    </section>
  );
};

export default Services;
