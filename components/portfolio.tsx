"use client";

import { useState, useEffect } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  Briefcase,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Code2,
  Copy,
  Cpu,
  Database,
  ExternalLink,
  Globe2,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  Star,
  Terminal,
  UserCheck,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import {
  Language,
  CONTACT_INFO,
  PROJECTS_DATA,
  EXPERIENCE_DATA,
  PLANS_DATA,
  TESTIMONIALS_DATA,
  FAQS_DATA,
  UI_TEXT,
  ProjectItem,
} from "@/lib/translations";

export default function Portfolio() {
  const [lang, setLang] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Inquiry Form State
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formService, setFormService] = useState("");
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_lang") as Language | null;
    if (saved === "en" || saved === "es") {
      setLang(saved);
    }
  }, []);

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("portfolio_lang", newLang);
  };

  const t = UI_TEXT[lang];

  // Helper WhatsApp & Email URL generators
  const getWhatsappUrl = (customText?: string) => {
    const defaultMsg =
      lang === "es"
        ? `Hola Pawan, me gustaría hablar sobre desarrollo web y soporte para mi negocio.`
        : `Hi Pawan, I'd like to discuss web development and website support for my business.`;
    const message = customText || defaultMsg;
    return `https://wa.me/${CONTACT_INFO.whatsappClean}?text=${encodeURIComponent(message)}`;
  };

  const getEmailUrl = (subject?: string, body?: string) => {
    const defaultSubject =
      lang === "es" ? "Consulta sobre desarrollo web y mantenimiento" : "Website development & support enquiry";
    const sub = subject || defaultSubject;
    const b = body || "";
    return `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(b)}`;
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceName = formService || t.formServiceOption1;
    const msg =
      lang === "es"
        ? `*Nueva Consulta de Proyecto*\n*Nombre:* ${formName || "Cliente"}\n*Email:* ${formEmail || "N/A"}\n*Servicio:* ${serviceName}\n*Mensaje:* ${formMessage || "Deseo más información."}`
        : `*New Project Enquiry*\n*Name:* ${formName || "Client"}\n*Email:* ${formEmail || "N/A"}\n*Service:* ${serviceName}\n*Details:* ${formMessage || "I'd like to learn more."}`;
    window.open(getWhatsappUrl(msg), "_blank");
  };

  const handleFormEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceName = formService || t.formServiceOption1;
    const subject = `Project Inquiry from ${formName || "Website Visitor"}`;
    const body = `Name: ${formName}\nEmail: ${formEmail}\nService: ${serviceName}\n\nProject Details:\n${formMessage}`;
    window.location.href = getEmailUrl(subject, body);
  };

  // Filter projects
  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F7F8F5] text-ink selection:bg-lime selection:text-ink">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="border-b border-white/10 bg-ink py-2 text-white/80">
        <div className="container-wide flex flex-col items-center justify-between gap-2 text-xs sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime"></span>
            </span>
            <span className="font-medium tracking-wide">{t.badge}</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-white/70 transition hover:text-lime"
            >
              <MessageCircle size={13} className="text-lime" />
              <span>{CONTACT_INFO.phone}</span>
            </a>

            <div className="flex items-center rounded-full bg-white/10 p-0.5 text-[11px] font-semibold">
              <button
                onClick={() => handleLangChange("en")}
                className={`rounded-full px-2.5 py-0.5 transition ${
                  lang === "en"
                    ? "bg-lime text-ink shadow-sm"
                    : "text-white/60 hover:text-white"
                }`}
                aria-label="Switch to English"
              >
                🇬🇧 EN
              </button>
              <button
                onClick={() => handleLangChange("es")}
                className={`rounded-full px-2.5 py-0.5 transition ${
                  lang === "es"
                    ? "bg-lime text-ink shadow-sm"
                    : "text-white/60 hover:text-white"
                }`}
                aria-label="Cambiar a Español"
              >
                🇪🇸 ES
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. STICKY HEADER */}
      <header className="sticky top-0 z-40 border-b border-black/5 bg-[#F7F8F5]/90 backdrop-blur-xl transition-all">
        <div className="container-wide flex h-[76px] items-center justify-between">
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-ink font-bold text-lime shadow-sm transition group-hover:scale-105">
              PK
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight">
                PAWAN KUMAR<span className="text-[#78933e]">.</span>
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-muted uppercase">
                {lang === "es" ? "Desarrollador Full-Stack" : "Full-Stack Engineer"}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted lg:flex">
            <a className="transition hover:text-ink" href="#services">{t.navServices}</a>
            <a className="transition hover:text-ink" href="#work">{t.navWork}</a>
            <a className="transition hover:text-ink" href="#experience">{t.navExperience}</a>
            <a className="transition hover:text-ink" href="#pricing">{t.navPricing}</a>
            <a className="transition hover:text-ink" href="#why-me">{t.navWhyMe}</a>
            <a className="transition hover:text-ink" href="#testimonials">{t.navTestimonials}</a>
            <a className="transition hover:text-ink" href="#faq">{t.navFaq}</a>
          </nav>

          {/* Actions & Language Switch */}
          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center rounded-full border border-black/10 bg-white p-1 text-xs font-semibold shadow-sm">
              <button
                onClick={() => handleLangChange("en")}
                className={`rounded-full px-2.5 py-1 transition ${
                  lang === "en" ? "bg-ink text-white" : "text-muted hover:text-ink"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => handleLangChange("es")}
                className={`rounded-full px-2.5 py-1 transition ${
                  lang === "es" ? "bg-ink text-white" : "text-muted hover:text-ink"
                }`}
              >
                ES
              </button>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#2b323e] hover:shadow-md"
            >
              {t.navContact} <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-white text-ink lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <nav className="container-wide flex flex-col gap-3 border-t border-black/5 bg-[#F7F8F5] py-5 text-sm font-semibold lg:hidden">
            <div className="flex items-center justify-between border-b border-black/5 pb-3">
              <span className="text-xs text-muted">Language / Idioma:</span>
              <div className="flex items-center rounded-full border border-black/10 bg-white p-0.5 text-xs">
                <button
                  onClick={() => handleLangChange("en")}
                  className={`rounded-full px-3 py-1 ${
                    lang === "en" ? "bg-ink text-white" : "text-muted"
                  }`}
                >
                  🇬🇧 English
                </button>
                <button
                  onClick={() => handleLangChange("es")}
                  className={`rounded-full px-3 py-1 ${
                    lang === "es" ? "bg-ink text-white" : "text-muted"
                  }`}
                >
                  🇪🇸 Español
                </button>
              </div>
            </div>

            <a href="#services" onClick={() => setMenuOpen(false)} className="py-1 text-muted hover:text-ink">
              {t.navServices}
            </a>
            <a href="#work" onClick={() => setMenuOpen(false)} className="py-1 text-muted hover:text-ink">
              {t.navWork}
            </a>
            <a href="#experience" onClick={() => setMenuOpen(false)} className="py-1 text-muted hover:text-ink">
              {t.navExperience}
            </a>
            <a href="#pricing" onClick={() => setMenuOpen(false)} className="py-1 text-muted hover:text-ink">
              {t.navPricing}
            </a>
            <a href="#why-me" onClick={() => setMenuOpen(false)} className="py-1 text-muted hover:text-ink">
              {t.navWhyMe}
            </a>
            <a href="#testimonials" onClick={() => setMenuOpen(false)} className="py-1 text-muted hover:text-ink">
              {t.navTestimonials}
            </a>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="py-1 text-muted hover:text-ink">
              {t.navFaq}
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-ink py-3 text-center text-xs font-bold text-white"
            >
              {t.navContact} <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </a>
          </nav>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section id="home" className="relative pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="pointer-events-none absolute -right-32 -top-20 h-[560px] w-[560px] rounded-full gradient-orb opacity-75" />
        <div className="container-wide relative grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
          {/* Hero Left Column */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-muted shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#82b83d]" />
              {t.tagline}
            </div>

            <h1 className="max-w-3xl text-[clamp(2.75rem,6.5vw,5.5rem)] font-extrabold leading-[1.02] tracking-[-0.06em]">
              {t.heroTitle1} <br />
              <span className="text-[#78933e] underline decoration-[#c8f169]/60 underline-offset-4">
                {t.heroTitleHighlight}
              </span>{" "}
              {t.heroTitle2}
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {t.heroSubtitle}
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-4 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#2b323e]"
              >
                {t.heroBtnExplore} <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-6 py-4 text-sm font-semibold transition hover:border-ink hover:bg-neutral-50"
              >
                <Sparkles className="mr-2 h-4 w-4 text-[#78933e]" />
                {t.heroBtnCare}
              </a>

              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#25D366]/15 px-5 py-4 text-sm font-semibold text-[#128C7E] transition hover:bg-[#25D366]/25"
                title="Chat directly on WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 grid grid-cols-2 gap-3 text-xs font-semibold text-muted sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-[#78933e]" /> {t.badgeScope}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-[#78933e]" /> {t.badgeDirect}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-[#78933e]" /> {t.badgeCode}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-[#78933e]" /> {t.badgeGuarantee}
              </span>
            </div>
          </div>

          {/* Hero Right Column - High Trust Interactive Snapshot Card */}
          <div className="relative mx-auto w-full max-w-[490px]">
            <div className="absolute -inset-4 rounded-[2.5rem] border border-black/5 bg-gradient-to-tr from-lime/20 to-transparent blur-xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-ink p-7 text-white shadow-2xl sm:p-8">
              {/* Header Status */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-[11px] font-bold tracking-widest uppercase text-white/50">
                    {t.cardTitle}
                  </p>
                  <p className="mt-1 font-bold text-white">{t.cardSubtitle}</p>
                </div>
                <span className="flex items-center gap-1.5 rounded-full bg-lime/15 px-3 py-1 text-xs font-semibold text-lime">
                  <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
                  {t.cardStatus}
                </span>
              </div>

              {/* Snapshot Boxes */}
              <div className="mt-6 rounded-2xl bg-white/[0.06] p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-white/70">
                    {lang === "es" ? "Especialidad Técnica" : "Engineering Focus"}
                  </span>
                  <span className="text-xs font-semibold text-lime">5+ Years Exp.</span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/[0.08] p-3.5">
                    <p className="text-lg font-bold text-white">{t.cardStat1Title}</p>
                    <p className="mt-1 text-xs text-white/60">{t.cardStat1Sub}</p>
                  </div>
                  <div className="rounded-xl bg-white/[0.08] p-3.5">
                    <p className="text-lg font-bold text-white">{t.cardStat2Title}</p>
                    <p className="mt-1 text-xs text-white/60">{t.cardStat2Sub}</p>
                  </div>
                </div>
              </div>

              {/* Guarantees List */}
              <div className="mt-5 space-y-2.5">
                {[t.cardBullet1, t.cardBullet2, t.cardBullet3].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs text-white/80">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-lime/20 text-lime">
                      <Check size={12} />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Price Highlight */}
              <div className="mt-7 flex items-end justify-between border-t border-white/10 pt-5">
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-white/50">
                    {t.cardStartingAt}
                  </p>
                  <p className="mt-1 text-3xl font-extrabold text-white">
                    $10
                    <span className="text-xs font-normal text-white/60">
                      {t.cardPerMonth}
                    </span>
                  </p>
                </div>

                <a
                  href="#pricing"
                  className="inline-flex items-center gap-1.5 rounded-full bg-lime px-4 py-2.5 text-xs font-bold text-ink transition hover:bg-white"
                >
                  <span>{lang === "es" ? "Ver Planes" : "View Plans"}</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-black/5 bg-white p-4 shadow-soft sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-lime/30 text-ink">
                  <UserCheck size={20} className="text-[#607d2d]" />
                </div>
                <div>
                  <p className="text-xs text-muted">
                    {lang === "es" ? "Respuesta Inmediata" : "Direct WhatsApp Support"}
                  </p>
                  <p className="text-sm font-bold text-ink">{CONTACT_INFO.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATS & CREDIBILITY BAR */}
      <section className="border-y border-black/5 bg-white py-10">
        <div className="container-wide grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="border-l-2 border-[#78933e] pl-4">
            <p className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {CONTACT_INFO.experienceYears}
            </p>
            <p className="mt-1 text-xs font-bold uppercase tracking-wider text-muted">
              {t.statExperience}
            </p>
          </div>

          <div className="border-l-2 border-[#78933e] pl-4">
            <p className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {CONTACT_INFO.projectsCount}
            </p>
            <p className="mt-1 text-xs font-bold uppercase tracking-wider text-muted">
              {t.statProjects}
            </p>
          </div>

          <div className="border-l-2 border-[#78933e] pl-4">
            <p className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {CONTACT_INFO.clientSatisfaction}
            </p>
            <p className="mt-1 text-xs font-bold uppercase tracking-wider text-muted">
              {t.statSatisfaction}
            </p>
          </div>

          <div className="border-l-2 border-[#78933e] pl-4">
            <p className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {CONTACT_INFO.responseTime}
            </p>
            <p className="mt-1 text-xs font-bold uppercase tracking-wider text-muted">
              {t.statResponse}
            </p>
          </div>
        </div>
      </section>

      {/* 5. TECH STACK BADGES */}
      <section className="bg-paper py-8 border-b border-black/5">
        <div className="container-wide">
          <p className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
            {lang === "es" ? "Tecnologías y Frameworks Principales" : "Core Engineering Technologies"}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-semibold text-ink">
            {[
              "Laravel (PHP)",
              "Node.js",
              "React",
              "Next.js 15",
              "Python",
              "TypeScript",
              "Tailwind CSS",
              "REST APIs",
              "WebSockets",
              "MySQL",
              "PostgreSQL",
              "MongoDB",
              "Stripe & PayPal",
              "AWS S3",
              "Git & GitHub",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-black/10 bg-white px-3.5 py-1.5 shadow-sm transition hover:border-[#78933e] hover:text-[#78933e]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SERVICES SECTION */}
      <section id="services" className="container-wide py-24">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[.22em] text-[#78933e]">
            {t.servicesEyebrow}
          </p>
          <h2 className="text-3xl font-extrabold tracking-[-.045em] sm:text-4xl">
            {t.servicesTitle}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">{t.servicesDesc}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Code2,
              title: t.service1Title,
              desc: t.service1Desc,
              badge: "Full-Stack Web",
            },
            {
              icon: Wrench,
              title: t.service2Title,
              desc: t.service2Desc,
              badge: "From $10 / month",
            },
            {
              icon: Zap,
              title: t.service3Title,
              desc: t.service3Desc,
              badge: "Integrations & APIs",
            },
            {
              icon: ShieldCheck,
              title: t.service4Title,
              desc: t.service4Desc,
              badge: "Optimization & Security",
            },
          ].map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-3xl border border-black/5 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div>
                  <div className="mb-8 flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eef5df] text-[#607d2d] transition group-hover:scale-110">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-extrabold text-[#78933e]">0{idx + 1}</span>
                  </div>

                  <span className="inline-block rounded-full bg-black/5 px-2.5 py-1 text-[10px] font-bold text-muted uppercase">
                    {service.badge}
                  </span>

                  <h3 className="mt-4 text-lg font-bold tracking-tight text-ink">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted">{service.desc}</p>
                </div>

                <div className="mt-7 pt-4 border-t border-black/5">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-xs font-bold text-ink transition group-hover:text-[#78933e]"
                  >
                    <span>{lang === "es" ? "Consultar este servicio" : "Inquire about this"}</span>
                    <ArrowRight size={13} className="ml-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. REAL FEATURED PROJECTS SHOWCASE */}
      <section id="work" className="bg-[#EEF0E9] py-24">
        <div className="container-wide">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[.22em] text-[#78933e]">
                {t.projectsEyebrow}
              </p>
              <h2 className="text-3xl font-extrabold tracking-[-.045em] sm:text-4xl">
                {t.projectsTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">{t.projectsDesc}</p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              {[
                { id: "all", label: t.filterAll },
                { id: "mobility", label: t.filterMobility },
                { id: "health", label: t.filterHealth },
                { id: "web", label: t.filterWeb },
                { id: "ecommerce", label: t.filterEcommerce },
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full px-4 py-2 transition ${
                    activeCategory === category.id
                      ? "bg-ink text-white shadow-sm"
                      : "border border-black/10 bg-white text-muted hover:border-black/30 hover:text-ink"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, i) => (
              <article
                key={project.id}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div>
                  {/* Decorative Card Header */}
                  <div className="grid-dots relative flex h-40 items-center justify-center bg-gradient-to-br from-[#eef3e5] to-[#e4ebe0] p-4">
                    <div className="flex w-[88%] items-center justify-between rounded-2xl border border-black/10 bg-white/95 px-4 py-3 shadow-md backdrop-blur-sm">
                      <div className="flex items-center gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
                        <div className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
                        <div className="h-2.5 w-2.5 rounded-full bg-[#4ade80]" />
                      </div>
                      <span className="text-[11px] font-mono font-medium text-muted truncate max-w-[170px]">
                        {project.liveUrl.replace("https://", "")}
                      </span>
                      <ExternalLink size={13} className="text-muted" />
                    </div>

                    <span className="absolute bottom-3 right-4 rounded-full bg-white/80 px-2.5 py-0.5 text-[10px] font-bold text-ink backdrop-blur-sm">
                      {project.status[lang]}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#78933e]">
                      {project.tag[lang]}
                    </p>

                    <h3 className="mt-2 text-xl font-bold tracking-tight text-ink group-hover:text-[#78933e] transition">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {project.text[lang]}
                    </p>

                    {/* Tech Tags */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.tech.map((tItem) => (
                        <span
                          key={tItem}
                          className="rounded-md bg-[#f1f3ee] px-2 py-0.5 text-[11px] font-medium text-ink"
                        >
                          {tItem}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="p-7 pt-0">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/10 bg-neutral-50 px-4 py-2.5 text-xs font-bold text-ink transition hover:border-ink hover:bg-ink hover:text-white"
                  >
                    <span>{t.liveDemoBtn}</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-black/10 bg-white/70 p-5 text-center text-xs text-muted backdrop-blur-sm">
            <span>
              {lang === "es"
                ? "💡 ¿Buscas un proyecto específico o necesitas una demostración de código fuente? Contáctame para un recorrido guiado."
                : "💡 Looking for a specific technology or need a private code walkthrough? Message me for an in-depth demo."}
            </span>
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="ml-2 font-bold text-[#78933e] underline hover:text-ink"
            >
              {lang === "es" ? "Contactar por WhatsApp ↗" : "Request Private Demo ↗"}
            </a>
          </div>
        </div>
      </section>

      {/* 8. CAREER JOURNEY & EXPERIENCE */}
      <section id="experience" className="bg-white py-24">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[.22em] text-[#78933e]">
              {t.experienceEyebrow}
            </p>
            <h2 className="text-3xl font-extrabold tracking-[-.045em] sm:text-4xl">
              {t.experienceTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">{t.experienceDesc}</p>
          </div>

          <div className="mt-14 relative border-l-2 border-black/10 ml-4 pl-6 sm:ml-8 sm:pl-10 space-y-12">
            {EXPERIENCE_DATA.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#78933e] bg-white group-hover:bg-lime transition">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#78933e]" />
                </span>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#eef5df] px-3 py-1 text-xs font-bold text-[#607d2d]">
                    {exp.period}
                  </span>
                  <span className="text-xs text-muted font-medium flex items-center gap-1">
                    <MapPin size={12} /> {exp.location}
                  </span>
                </div>

                <h3 className="mt-2 text-xl font-bold tracking-tight text-ink">
                  {exp.role[lang]} <span className="text-[#78933e]">@ {exp.company}</span>
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {exp.description[lang]}
                </p>

                <ul className="mt-4 space-y-2">
                  {exp.achievements[lang].map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2 text-xs leading-relaxed text-ink/80">
                      <CheckCircle2 size={14} className="text-[#78933e] shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WHY CLIENTS TRUST PAWAN (ZERO RISK & GUARANTEES) */}
      <section id="why-me" className="bg-ink py-24 text-white">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[.22em] text-lime">
              {t.whyMeEyebrow}
            </p>
            <h2 className="text-3xl font-extrabold tracking-[-.045em] sm:text-4xl text-white">
              {t.whyMeTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-white/60">{t.whyMeDesc}</p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: UserCheck,
                title: t.trustPoint1Title,
                desc: t.trustPoint1Desc,
              },
              {
                icon: Award,
                title: t.trustPoint2Title,
                desc: t.trustPoint2Desc,
              },
              {
                icon: Terminal,
                title: t.trustPoint3Title,
                desc: t.trustPoint3Desc,
              },
              {
                icon: ShieldCheck,
                title: t.trustPoint4Title,
                desc: t.trustPoint4Desc,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:bg-white/[0.08]"
                >
                  <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-lime/15 text-lime">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-white">{item.title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-white/60">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Reassurance Banner */}
          <div className="mt-12 rounded-2xl border border-lime/30 bg-lime/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-lime text-ink">
                <Check size={24} />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">
                  {lang === "es"
                    ? "Garantía de Satisfacción y Código Limpio"
                    : "100% Satisfaction & Milestone Security"}
                </h4>
                <p className="mt-1 text-xs text-white/70">
                  {lang === "es"
                    ? "Trabajas con hitos claros. No pagas el saldo final hasta que revises y apruebes la entrega."
                    : "Work is delivered against clear milestones. Final balances are only released after your complete review."}
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="shrink-0 rounded-full bg-lime px-6 py-3 text-xs font-bold text-ink transition hover:bg-white"
            >
              {lang === "es" ? "Comenzar sin Riesgo" : "Start With Zero Risk"}
            </a>
          </div>
        </div>
      </section>

      {/* 10. TRANSPARENT MONTHLY CARE PLANS */}
      <section id="pricing" className="container-wide py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[.22em] text-[#78933e]">
              {t.pricingEyebrow}
            </p>
            <h2 className="text-3xl font-extrabold tracking-[-.045em] sm:text-4xl">
              {t.pricingTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">{t.pricingDesc}</p>
          </div>
          <p className="max-w-xs text-xs leading-relaxed text-muted">{t.pricingFootnote}</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS_DATA.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col justify-between rounded-3xl border p-8 transition duration-300 ${
                plan.featured
                  ? "border-ink bg-ink text-white shadow-2xl scale-[1.02]"
                  : "border-black/10 bg-white hover:border-black/20"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3.5 right-8 rounded-full bg-lime px-4 py-1 text-[11px] font-extrabold uppercase tracking-wider text-ink shadow-sm">
                  {plan.badge[lang]}
                </span>
              )}

              <div>
                <p
                  className={`text-sm font-bold uppercase tracking-wider ${
                    plan.featured ? "text-lime" : "text-[#78933e]"
                  }`}
                >
                  {plan.name[lang]}
                </p>

                <div className="mt-4 flex items-baseline">
                  <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                  <span
                    className={`ml-1 text-sm font-medium ${
                      plan.featured ? "text-white/60" : "text-muted"
                    }`}
                  >
                    {plan.period[lang]}
                  </span>
                </div>

                <p
                  className={`mt-3 text-xs leading-relaxed ${
                    plan.featured ? "text-white/70" : "text-muted"
                  }`}
                >
                  {plan.note[lang]}
                </p>

                <div
                  className={`my-8 h-px ${plan.featured ? "bg-white/15" : "bg-black/10"}`}
                />

                <ul className="space-y-3.5 text-xs">
                  {plan.items[lang].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className={`shrink-0 mt-0.5 ${
                          plan.featured ? "text-lime" : "text-[#78933e]"
                        }`}
                      />
                      <span className={plan.featured ? "text-white/90" : "text-ink/80"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-9">
                <a
                  href={getWhatsappUrl(
                    lang === "es"
                      ? `Hola Pawan, me interesa contratar el plan mensual ${plan.name[lang]} (${plan.price}/mes) para mi web.`
                      : `Hi Pawan, I'd like to get started with the ${plan.name[lang]} plan (${plan.price}/month) for my website.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex w-full items-center justify-center gap-2 rounded-full py-4 text-xs font-bold transition ${
                    plan.featured
                      ? "bg-lime text-ink hover:bg-white"
                      : "bg-ink text-white hover:bg-[#2b323e]"
                  }`}
                >
                  <span>
                    {lang === "es" ? `Elegir ${plan.name[lang]}` : `Choose ${plan.name[lang]}`}
                  </span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. CLIENT TESTIMONIALS & REVIEWS */}
      <section id="testimonials" className="bg-[#EEF0E9] py-24">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[.22em] text-[#78933e]">
              {t.testimonialsEyebrow}
            </p>
            <h2 className="text-3xl font-extrabold tracking-[-.045em] sm:text-4xl">
              {t.testimonialsTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">{t.testimonialsDesc}</p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS_DATA.map((review, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-3xl border border-black/5 bg-white p-7 shadow-sm transition hover:shadow-soft"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#eab308]">
                    {[...Array(review.rating)].map((_, rIdx) => (
                      <Star key={rIdx} size={14} fill="#eab308" />
                    ))}
                  </div>

                  <p className="mt-5 text-xs italic leading-relaxed text-ink/80">
                    &ldquo;{review.content[lang]}&rdquo;
                  </p>
                </div>

                <div className="mt-7 pt-4 border-t border-black/5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-ink">{review.name}</p>
                    <p className="text-[11px] text-muted">
                      {review.role[lang]} · {review.country}
                    </p>
                  </div>
                  <span className="text-xl" title={review.country}>
                    {review.flag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section id="faq" className="container-wide py-24">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[.22em] text-[#78933e]">
            {t.faqEyebrow}
          </p>
          <h2 className="text-3xl font-extrabold tracking-[-.045em] sm:text-4xl">
            {t.faqTitle}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">{t.faqDesc}</p>
        </div>

        <div className="mt-12 max-w-3xl space-y-4">
          {FAQS_DATA.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-black/10 bg-white overflow-hidden transition"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="flex w-full items-center justify-between p-6 text-left"
                aria-expanded={openFaq === idx}
              >
                <span className="text-base font-bold text-ink pr-4">
                  {faq.question[lang]}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-muted transition-transform duration-200 ${
                    openFaq === idx ? "rotate-180 text-ink" : ""
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="border-t border-black/5 bg-[#F7F8F5]/60 px-6 py-5 text-sm leading-relaxed text-muted">
                  {faq.answer[lang]}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 13. INTERACTIVE CONTACT & QUOTE SECTION */}
      <section id="contact" className="bg-ink py-24 text-white">
        <div className="container-wide grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
          {/* Left Column: Direct Info & Value */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-lime">
              {t.ctaEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-.05em] sm:text-5xl text-white">
              {t.ctaTitle}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60">
              {t.ctaDesc}
            </p>

            {/* Direct Contact Cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {/* WhatsApp Card */}
              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-[#25D366] hover:bg-white/[0.08]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#25D366]/20 text-[#25D366] transition group-hover:scale-110">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-white/50">
                    WhatsApp Chat
                  </p>
                  <p className="text-sm font-bold text-white">{CONTACT_INFO.phone}</p>
                </div>
              </a>

              {/* Email Card with Copy button */}
              <div className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-lime hover:bg-white/[0.08]">
                <div className="flex items-center gap-3 truncate pr-2">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-lime/20 text-lime">
                    <Mail size={22} />
                  </div>
                  <div className="truncate">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-white/50">
                      Direct Email
                    </p>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-xs font-bold text-white hover:underline truncate block"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmailToClipboard}
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/10 text-white/80 transition hover:bg-lime hover:text-ink"
                  title={copiedEmail ? t.copied : t.copyEmail}
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check size={14} className="text-lime" /> : <Copy size={14} />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-[#0077b5] hover:bg-white/[0.08]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#0077b5]/20 text-[#38bdf8] transition group-hover:scale-110">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-white/50">
                    LinkedIn Verified
                  </p>
                  <p className="text-sm font-bold text-white">/in/pawan-kumar</p>
                </div>
              </a>

              {/* Location & Timezone */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-white/80">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-white/50">
                    Working Hours
                  </p>
                  <p className="text-sm font-bold text-white">
                    {lang === "es" ? "Flexible Zona Horaria" : "Flexible Remote Hours"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-7 sm:p-9 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white">{t.formTitle}</h3>
            <p className="mt-1 text-xs text-white/60">
              {lang === "es"
                ? "Recibe respuesta y cotización estimada en menos de 1 hora."
                : "Get an estimated quote and practical next steps within 1 hour."}
            </p>

            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-white/70 mb-1.5">
                  {t.formName}
                </label>
                <input
                  type="text"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder={t.formNamePlaceholder}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-white/30 focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white/70 mb-1.5">
                  {t.formEmail}
                </label>
                <input
                  type="email"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder={t.formEmailPlaceholder}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-white/30 focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white/70 mb-1.5">
                  {t.formService}
                </label>
                <select
                  value={formService}
                  onChange={(e) => setFormService(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#161a23] px-4 py-3 text-xs text-white focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime"
                >
                  <option value={t.formServiceOption1}>{t.formServiceOption1}</option>
                  <option value={t.formServiceOption2}>{t.formServiceOption2}</option>
                  <option value={t.formServiceOption3}>{t.formServiceOption3}</option>
                  <option value={t.formServiceOption4}>{t.formServiceOption4}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-white/70 mb-1.5">
                  {t.formMessage}
                </label>
                <textarea
                  rows={3}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder={t.formMessagePlaceholder}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-white/30 focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime"
                />
              </div>

              <div className="grid grid-cols-1 gap-2.5 pt-2 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={handleFormWhatsapp}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-xs font-bold text-ink transition hover:bg-[#20ba5a]"
                >
                  <MessageCircle size={15} />
                  <span>{t.formSubmit}</span>
                </button>

                <button
                  type="button"
                  onClick={handleFormEmail}
                  className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-xs font-bold text-white transition hover:bg-white/20"
                >
                  <Send size={14} />
                  <span>{t.formSubmitEmail}</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* 14. FOOTER */}
        <div className="container-wide mt-20 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/50 sm:flex-row">
            <p>{t.footerCopyright}</p>
            <div className="flex items-center gap-6">
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-lime transition"
              >
                LinkedIn
              </a>
              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="hover:text-lime transition"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="hover:text-lime transition"
              >
                Email
              </a>
            </div>
            <p>{t.footerSubtext}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
