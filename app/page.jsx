"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BarChart3, Shield, LineChart, Building2, Layers, Send } from "lucide-react";

const heroImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85";
const decorativeImage = heroImage;
const logoSrc = "/assets/glg-capital-logo-white.png";

const content = {
  es: {
    nav: ["Nuestra Firma", "Filosofía", "Estrategias", "Gobernanza y Riesgo", "Dirección", "Contacto"],
    heroTitle: "GLG Capital Management",
    heroSubtitle:
      "Firma privada de administración de activos enfocada en la gestión estratégica de capital bajo una estructura privada orientada al beneficio de nuestros socios e inversionistas.",
    primaryButton: "Nuestra Firma",
    secondaryButton: "Contacto",
    firmTitle: "Nuestra Firma",
    firmParagraphs: [
      "GLG Capital Management es una firma privada de inversión y administración de activos con enfoque en estrategias disciplinadas de mercado, gestión prudente del riesgo y construcción sostenible de capital.",
      "Nuestra firma combina un enfoque disciplinado de gestión de riesgo con estrategias sistemáticas, análisis de mercado y una visión de largo plazo, permitiéndonos operar de manera eficiente en distintos entornos financieros. A través de una infraestructura moderna y procesos estructurados, buscamos optimizar la consistencia operativa y la toma de decisiones dentro de nuestras carteras de inversión.",
      "GLG Capital Management opera bajo un modelo privado y selectivo, enfocado en el desarrollo de relaciones de largo plazo, estructuras sólidas de gestión y una visión institucional del manejo de capital."
    ],
    philosophyTitle: "Filosofía de Inversión",
    philosophyIntro:
      "Nuestra filosofía integra innovación, disciplina operativa y análisis estratégico, priorizando la adaptabilidad frente a los cambios estructurales de los mercados globales y la construcción de resultados sostenibles a largo plazo.",
    philosophyBlocks: ["Disciplina", "Gestión de Riesgo", "Enfoque de Largo Plazo", "Análisis Estratégico", "Estructura Privada"],
    strategiesTitle: "Estrategias",
    strategiesIntro:
      "La firma desarrolla un enfoque multi-estrategia bajo una estructura privada, combinando procesos sistemáticos, análisis fundamental y asignación disciplinada de capital.",
    strategies: [
      "Estrategias Cuantitativas en Derivados",
      "Ejecución Sistemática de Futuros",
      "Estrategias Cuantitativas de Estructura de Mercado",
      "Asignación Fundamental de Renta Variable",
      "Rebalanceo Dinámico de Portafolios",
      "Asignación de Capital Basada en Flujo de Caja",
      "Inversiones Alternativas Multi-Estrategia"
    ],
    governanceTitle: "Gobernanza y Riesgo",
    governanceIntro:
      "La gestión del riesgo es un componente central de nuestra estructura operativa. GLG Capital Management prioriza procesos disciplinados orientados a preservar capital, controlar exposición y mantener consistencia en la toma de decisiones.",
    governanceItems: ["Control de exposición", "Disciplina operativa", "Enfoque estructurado", "Monitoreo continuo", "Gestión prudente del capital"],
    contactTitle: "Contacto",
    contactText:
      "Para consultas o información general sobre GLG Capital Management, puede completar el siguiente formulario. Nuestro equipo revisará la información y responderá cuando corresponda.",
    location: "Santo Domingo, Dominican Republic",
    formName: "Nombre",
    formEmail: "Correo electrónico",
    formMessage: "Mensaje",
    formButton: "Enviar consulta",
    leadershipTitle: "Dirección de la Firma",
    leadershipName: "Pedro Alberto Lopez Gonzalez",
    leadershipRole: "Founder, CEO & CIO",
    leadershipParagraphs: [
      "Pedro Alberto Lopez Gonzalez fundó GLG Capital Management con el objetivo de desarrollar una estructura privada de administración de capital basada en disciplina operativa, gestión prudente del riesgo y una visión estratégica de largo plazo.",
      "Actualmente dirige el desarrollo institucional de la firma, la supervisión de estrategias de inversión y la asignación general de capital bajo un enfoque estructurado y orientado a la sostenibilidad operativa."
    ],
    disclaimer:
      "GLG Capital Management es una firma que opera bajo estructura privada. La información contenida en este sitio tiene fines exclusivamente institucionales e informativos y no constituye una oferta pública de inversión, asesoría financiera ni solicitud de capital."
  },
  en: {
    nav: ["Our Firm", "Philosophy", "Strategies", "Governance & Risk", "Leadership", "Contact"],
    heroTitle: "GLG Capital Management",
    heroSubtitle:
      "Private asset management firm focused on strategic capital management under a private structure oriented toward the benefit of our partners and investors.",
    primaryButton: "Our Firm",
    secondaryButton: "Contact",
    firmTitle: "Our Firm",
    firmParagraphs: [
      "GLG Capital Management is a private investment and asset management firm focused on disciplined market strategies, prudent risk management and sustainable capital development.",
      "Our firm combines a disciplined risk management approach with systematic strategies, market analysis and a long-term vision, allowing us to operate efficiently across different financial environments. Through modern infrastructure and structured processes, we seek to optimize operational consistency and decision-making within our investment portfolios.",
      "GLG Capital Management operates under a private and selective model, focused on developing long-term relationships, solid management structures and an institutional view of capital management."
    ],
    philosophyTitle: "Investment Philosophy",
    philosophyIntro:
      "Our philosophy integrates innovation, operational discipline and strategic analysis, prioritizing adaptability to structural changes in global markets and the development of sustainable long-term results.",
    philosophyBlocks: ["Discipline", "Risk Management", "Long-Term Approach", "Strategic Analysis", "Private Structure"],
    strategiesTitle: "Strategies",
    strategiesIntro:
      "The firm develops a multi-strategy approach under a private structure, combining systematic processes, fundamental analysis and disciplined capital allocation.",
    strategies: [
      "Quantitative Derivatives Strategies",
      "Systematic Futures Execution",
      "Quantitative Market Structure Strategies",
      "Fundamental Equity Allocation",
      "Dynamic Portfolio Rebalancing",
      "Cash Flow-Driven Capital Allocation",
      "Multi-Strategy Alternative Investments"
    ],
    governanceTitle: "Governance & Risk",
    governanceIntro:
      "Risk management is a central component of our operating structure. GLG Capital Management prioritizes disciplined processes designed to preserve capital, control exposure and maintain consistency in decision-making.",
    governanceItems: ["Exposure control", "Operational discipline", "Structured approach", "Continuous monitoring", "Prudent capital management"],
    contactTitle: "Contact",
    contactText:
      "For inquiries or general information about GLG Capital Management, please complete the following form. Our team will review the information and respond when appropriate.",
    location: "Santo Domingo, Dominican Republic",
    formName: "Name",
    formEmail: "Email address",
    formMessage: "Message",
    formButton: "Send inquiry",
    leadershipTitle: "Firm Leadership",
    leadershipName: "Pedro Alberto Lopez Gonzalez",
    leadershipRole: "Founder, CEO & CIO",
    leadershipParagraphs: [
      "Pedro Alberto Lopez Gonzalez founded GLG Capital Management with the objective of developing a private capital management structure built upon operational discipline, prudent risk management and a long-term strategic vision.",
      "He currently oversees the institutional development of the firm, investment strategy supervision and general capital allocation under a structured and sustainability-oriented approach."
    ],
    disclaimer:
      "GLG Capital Management is a firm operating under a private structure. The information contained on this website is provided solely for institutional and informational purposes and does not constitute a public offering of investment, financial advice or solicitation of capital."
  }
};

function GLGLogo({ size = "normal" }) {
  return (
    <img
      src={logoSrc}
      alt="GLG Capital"
      className={size === "large" ? "h-14 w-auto md:h-20" : "h-8 w-auto md:h-9"}
    />
  );
}

function SectionLabel({ children }) {
  return <p className="mb-4 text-xs uppercase tracking-[0.32em] text-zinc-500">{children}</p>;
}

function LanguageToggle({ language, setLanguage }) {
  return (
    <div className="flex items-center rounded-full border border-zinc-700/80 bg-black/50 p-1 text-xs shadow-2xl shadow-black/30 backdrop-blur">
      <button onClick={() => setLanguage("es")} className={`rounded-full px-3 py-1.5 transition ${language === "es" ? "bg-white text-black" : "text-zinc-400 hover:text-white"}`}>ES</button>
      <button onClick={() => setLanguage("en")} className={`rounded-full px-3 py-1.5 transition ${language === "en" ? "bg-white text-black" : "text-zinc-400 hover:text-white"}`}>EN</button>
    </div>
  );
}

function ParallaxImage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-24%", "24%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18]);

  return (
    <section ref={ref} className="relative h-[500px] overflow-hidden border-y border-zinc-800/70">
      <motion.div
        className="absolute inset-x-0 -top-32 h-[760px] bg-cover bg-center"
        style={{ y, scale, backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.52)), url('${decorativeImage}')` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:78px_78px] opacity-25" />
    </section>
  );
}

export default function GLGCapitalWebsite() {
  const [language, setLanguage] = useState("es");
  const t = content[language];
  const navTargets = ["firm", "philosophy", "strategies", "governance", "leadership", "contact"];

  return (
    <div className="min-h-screen bg-[#050607] text-white antialiased">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/35 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center">
            <GLGLogo />
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {t.nav.map((item, index) => (
              <a key={item} href={`#${navTargets[index]}`} className="text-xs text-zinc-300 transition hover:text-white">{item}</a>
            ))}
          </nav>
          <LanguageToggle language={language} setLanguage={setLanguage} />
        </div>
      </header>

      <main id="top" className="relative z-10">
        <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-28 lg:px-8">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroImage}')` }} />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88),rgba(0,0,0,0.58),rgba(0,0,0,0.32)),linear-gradient(180deg,rgba(0,0,0,0.62),rgba(0,0,0,0.5))]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:86px_86px] opacity-30" />

          <motion.div className="relative z-10 mx-auto w-full max-w-7xl" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionLabel>Asset Management</SectionLabel>
            <div className="mb-10">
              <GLGLogo size="large" />
            </div>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] text-white md:text-7xl lg:text-8xl">{t.heroTitle}</h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-200 md:text-xl">{t.heroSubtitle}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#firm" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200">{t.primaryButton}<ArrowRight className="ml-2 h-4 w-4" /></a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-medium text-white transition hover:border-white hover:bg-white/10">{t.secondaryButton}</a>
            </div>
          </motion.div>
        </section>

        <section id="firm" className="border-y border-zinc-800/70 bg-zinc-950/55 px-6 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionLabel>01</SectionLabel>
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">{t.firmTitle}</h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-zinc-300 md:text-lg">
              {t.firmParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>

        <ParallaxImage />

        <section id="philosophy" className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>02</SectionLabel>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">{t.philosophyTitle}</h2>
              <p className="text-base leading-8 text-zinc-300 md:text-lg">{t.philosophyIntro}</p>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-5">
              {t.philosophyBlocks.map((block, index) => {
                const icons = [Shield, BarChart3, LineChart, Layers, Building2];
                const Icon = icons[index];
                return <div key={block} className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-6 transition hover:border-zinc-600 hover:bg-zinc-900/70"><Icon className="mb-8 h-6 w-6 text-zinc-400" /><p className="text-sm font-medium text-zinc-100">{block}</p></div>;
              })}
            </div>
          </div>
        </section>

        <section id="strategies" className="border-y border-zinc-800/70 bg-zinc-950/55 px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>03</SectionLabel>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">{t.strategiesTitle}</h2>
              <p className="text-base leading-8 text-zinc-300 md:text-lg">{t.strategiesIntro}</p>
            </div>
            <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {t.strategies.map((strategy) => <div key={strategy} className="group rounded-2xl border border-zinc-800 bg-black/40 p-5 transition hover:border-zinc-600 hover:bg-black/70"><p className="text-sm text-zinc-200">{strategy}</p></div>)}
            </div>
          </div>
        </section>

        <section id="governance" className="px-6 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionLabel>04</SectionLabel>
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">{t.governanceTitle}</h2>
              <p className="mt-8 text-base leading-8 text-zinc-300 md:text-lg">{t.governanceIntro}</p>
            </div>
            <div className="grid gap-4">
              {t.governanceItems.map((item, index) => <div key={item} className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5"><span className="text-zinc-200">{item}</span><span className="text-xs text-zinc-600">0{index + 1}</span></div>)}
            </div>
          </div>
        </section>

        <section id="leadership" className="border-t border-zinc-800/70 bg-black/35 px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>05</SectionLabel>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">{t.leadershipTitle}</h2>
              </div>
              <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950/60 p-8 md:p-10">
                <p className="text-2xl font-semibold text-white md:text-3xl">{t.leadershipName}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.24em] text-zinc-500">{t.leadershipRole}</p>
                <div className="mt-8 space-y-6 text-base leading-8 text-zinc-300 md:text-lg">
                  {t.leadershipParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-zinc-800/70 bg-zinc-950/75 px-6 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionLabel>05</SectionLabel>
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">{t.contactTitle}</h2>
              <p className="mt-8 max-w-xl text-base leading-8 text-zinc-300 md:text-lg">{t.contactText}</p>
              <div className="mt-8 flex items-center gap-3 text-sm text-zinc-400"><Building2 className="h-5 w-5 text-zinc-500" /><span>{t.location}</span></div>
            </div>
            <form
  action="https://formspree.io/f/mjgzaeez"
  method="POST"
  className="space-y-6"
>
  <div>
    <label className="block text-sm mb-2 text-gray-300">
      Nombre
    </label>

    <input
      type="text"
      name="name"
      required
      className="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white"
    />
  </div>

  <div>
    <label className="block text-sm mb-2 text-gray-300">
      Email
    </label>

    <input
      type="email"
      name="email"
      required
      className="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white"
    />
  </div>

  <div>
    <label className="block text-sm mb-2 text-gray-300">
      Mensaje
    </label>

    <textarea
      name="message"
      rows="6"
      required
      className="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white"
    ></textarea>
  </div>

  <button
    type="submit"
    className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
  >
    Enviar Mensaje
  </button>
</form>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-zinc-800/70 bg-[#050607] px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <GLGLogo />
            <p className="mt-4 text-sm text-zinc-500">{t.location}</p>
          </div>
          <div className="max-w-2xl">
            <p className="text-xs leading-6 text-zinc-500">{t.disclaimer}</p>
            <div className="mb-4 flex flex-wrap gap-4 text-xs text-zinc-500">
  <a href="https://www.linkedin.com/company/glgcapital/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
    LinkedIn
  </a>
  <a href="https://x.com/glgcapital" target="_blank" rel="noopener noreferrer" className="hover:text-white">
    X
  </a>
  <a href="https://www.instagram.com/glgcapital/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
    Instagram
  </a>
  <a href="https://www.facebook.com/glgcapitalmanagement/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
    Facebook
  </a>
</div>
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-zinc-500">
  <a href="/privacy-policy" className="hover:text-white">
    Política de Privacidad
  </a>

  <a href="/terms-and-conditions" className="hover:text-white">
    Términos y Condiciones
  </a>

  <span>
    © 2026 GLG Capital Management. Todos los derechos reservados.
  </span>
</div>
            <div className="mt-5 flex justify-start lg:justify-end">
              <LanguageToggle language={language} setLanguage={setLanguage} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
