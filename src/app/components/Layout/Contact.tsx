"use client";
import React from "react";

const Contact = () => {
  return (
    <section className="relative z-30 pt-[100px] lg:pt-[70px] min-h-screen flex items-center bg-gradient-to-b from-slate-50 to-white px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 border-l-4 border-sky-500 pl-6 py-2">
          <h3 className="text-lg lg:text-3xl text-sky-600 font-semibold tracking-wide uppercase">
            Entre em contato
          </h3>
          <h4 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight uppercase">
            Vamos tirar sua ideia do papel
          </h4>
          <p className="text-lg text-slate-700 leading-tight max-w-[50ch] uppercase">
            Estamos prontos para ouvir você. Preencha o formulário com os
            detalhes do seu projeto e nossa equipe retornará o mais rápido
            possível.
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-white rounded-2xl shadow-xl px-8 py-10 border border-sky-100 w-full space-y-6"
        >
          <div>
            <label className="block text-sm text-slate-600 mb-1 font-medium">
              Nome
            </label>
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full px-4 py-3 border border-sky-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300 text-slate-800"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1 font-medium">
              Empresa
            </label>
            <input
              type="text"
              placeholder="Empresa"
              className="w-full px-4 py-3 border border-sky-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300 text-slate-800"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1 font-medium">
              E-mail
            </label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full px-4 py-3 border border-sky-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300 text-slate-800"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1 font-medium">
              Mensagem
            </label>
            <textarea
              rows={5}
              placeholder="Como podemos te ajudar?"
              className="w-full px-4 py-3 border border-sky-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300 text-slate-800"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-sky-600 text-white px-6 py-3 rounded-md hover:bg-sky-700 transition-all duration-200 w-full font-semibold tracking-wide uppercase"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
