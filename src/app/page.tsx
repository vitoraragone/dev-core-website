import React from "react";
import Hero from "./components/Layout/Hero";
import Services from "./components/Layout/Services";
import Metodology from "./components/Layout/Metodology";
import About from "./components/Layout/About";
import Solutions from "./components/Layout/Solutions";
import Testimonials from "./components/Layout/Testimonials";
import Contact from "./components/Layout/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Metodology />
      <About />
      <Solutions />
      <Testimonials />
      <Contact />
    </main>
  );
}
