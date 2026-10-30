export type Language = "en" | "es";

export interface ProjectItem {
  id: string;
  tag: { en: string; es: string };
  category: "all" | "web" | "mobility" | "health" | "ecommerce";
  title: string;
  text: { en: string; es: string };
  tech: string[];
  liveUrl: string;
  status: { en: string; es: string };
}

export interface ExperienceItem {
  period: string;
  role: { en: string; es: string };
  company: string;
  location: string;
  description: { en: string; es: string };
  achievements: { en: string[]; es: string[] };
}

export interface PlanItem {
  id: string;
  name: { en: string; es: string };
  price: string;
  period: { en: string; es: string };
  note: { en: string; es: string };
  featured: boolean;
  items: { en: string[]; es: string[] };
  badge?: { en: string; es: string };
}

export interface TestimonialItem {
  name: string;
  role: { en: string; es: string };
  country: string;
  flag: string;
  rating: number;
  content: { en: string; es: string };
  projectRef: string;
}

export interface FaqItem {
  question: { en: string; es: string };
  answer: { en: string; es: string };
}

export const CONTACT_INFO = {
  name: "Pawan Kumar",
  title: {
    en: "Senior Full-Stack Engineer & Web Specialist",
    es: "Ingeniero Full-Stack Senior y Especialista Web",
  },
  email: "pawanchhapola72293@gmail.com",
  phone: "+91 98961 72293",
  whatsappClean: "919896172293",
  linkedin: "https://www.linkedin.com/in/pawan-kumar-a11724216/",
  github: "https://github.com/pawankumar", // or user's repo link
  location: "Haryana, India · Available Worldwide (Remote)",
  experienceYears: "5+",
  projectsCount: "25+",
  clientSatisfaction: "99.8%",
  responseTime: "< 1 Hour",
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "li-nk",
    category: "mobility",
    tag: {
      en: "Mobility & Airport Transfers · Full-Stack",
      es: "Movilidad y Traslados al Aeropuerto · Full-Stack",
    },
    title: "Li-nk Limousines & Transfers",
    text: {
      en: "Premium chauffeur and airport ride booking ecosystem (Blacklane alternative) featuring automated dispatch, multi-currency payments, and real-time ride tracking.",
      es: "Ecosistema premium de reservas de chófer y traslados al aeropuerto (alternativa a Blacklane) con despacho automatizado, pagos multidivisa y seguimiento en tiempo real.",
    },
    tech: ["Node.js", "Laravel", "React", "REST API", "Google Maps API", "Stripe"],
    liveUrl: "https://www.li-nk.com/",
    status: { en: "Live in Production", es: "En Producción Activa" },
  },
  {
    id: "tokyo-mk",
    category: "mobility",
    tag: {
      en: "Luxury Fleet & Travel · Web Platform",
      es: "Flota de Lujo y Viajes · Plataforma Web",
    },
    title: "Tokyo MK Luxury Transfers",
    text: {
      en: "Regional luxury transport and airport transfer platform serving international travelers across Tokyo and Kyoto with instant quotation and booking engines.",
      es: "Plataforma regional de transporte de lujo y traslados para viajeros internacionales en Tokio y Kioto con cotizaciones instantáneas y reservas.",
    },
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "REST APIs"],
    liveUrl: "https://en.tokyomk.com/taxi",
    status: { en: "Live in Production", es: "En Producción Activa" },
  },
  {
    id: "gymdekho",
    category: "health",
    tag: {
      en: "Fitness Discovery & Management · SaaS",
      es: "Descubrimiento de Gimnasios y SaaS Fitness",
    },
    title: "GymDekho Fitness Marketplace",
    text: {
      en: "Multi-tenant gym discovery and membership management platform with interactive class schedules, membership renewals, and online payment integrations.",
      es: "Plataforma multiinquilino de búsqueda de gimnasios y gestión de membresías con horarios interactivos, renovaciones de cuotas y pasarelas de pago.",
    },
    tech: ["Laravel", "MySQL", "Bootstrap", "Payment Gateway", "REST APIs"],
    liveUrl: "https://gymdekho.com/",
    status: { en: "Live in Production", es: "En Producción Activa" },
  },
  {
    id: "beastfitness",
    category: "health",
    tag: {
      en: "Health & Workout Platform · React & WebSockets",
      es: "Plataforma de Entrenamiento · React y WebSockets",
    },
    title: "Beast Fitness Web Application",
    text: {
      en: "Modern interactive fitness platform featuring personalized workout routines, trainer-client real-time messaging, and comprehensive progress analytics.",
      es: "Plataforma moderna de fitness con rutinas personalizadas, mensajería en tiempo real entre entrenador y cliente y análisis de progreso.",
    },
    tech: ["React", "Node.js", "WebSockets", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://beastfitness.netlify.app/",
    status: { en: "Live Demo Available", es: "Demo en Vivo Disponible" },
  },
  {
    id: "originrent",
    category: "mobility",
    tag: {
      en: "Car Rental & Reservation System",
      es: "Sistema de Alquiler de Vehículos y Reservas",
    },
    title: "OriginRent Vehicle Booking Engine",
    text: {
      en: "End-to-end car rental platform with real-time vehicle availability calendars, dynamic pricing tiers, deposit handling, and automated rental contracts.",
      es: "Plataforma integral de alquiler de coches con calendario de disponibilidad en tiempo real, tarifas dinámicas, gestión de fianzas y contratos automáticos.",
    },
    tech: ["PHP / Laravel", "MySQL", "Stripe API", "JavaScript", "Admin Dashboard"],
    liveUrl: "https://originrent.com/",
    status: { en: "Live in Production", es: "En Producción Activa" },
  },
  {
    id: "qmedicina",
    category: "health",
    tag: {
      en: "Healthcare & Telemedicine · Enterprise",
      es: "Salud y Telemedicina · Plataforma Médica",
    },
    title: "QMedicina Hospital & Clinical Portal",
    text: {
      en: "Complete hospital management web platform supporting patient appointments, doctor availability rosters, electronic health records, and telemedicine consultations.",
      es: "Plataforma de gestión hospitalaria y médica con reserva de citas, turnos médicos, historial clínico electrónico y consultas telemáticas seguras.",
    },
    tech: ["Node.js", "React", "PostgreSQL", "Video API", "Secure Auth"],
    liveUrl: "https://qmedicina.com.br/",
    status: { en: "Live in Production", es: "En Producción Activa" },
  },
  {
    id: "hyphenx",
    category: "web",
    tag: {
      en: "Digital Agency & Tech Platform · Next.js",
      es: "Agencia Digital y Plataforma Web · Next.js",
    },
    title: "HyphenX Solutions Corporate Web",
    text: {
      en: "High-performance digital agency platform engineered with modern UI/UX, optimized Core Web Vitals, high-converting lead funnels, and dynamic service catalogs.",
      es: "Sitio web de agencia tecnológica de alto rendimiento con interfaz moderna, métricas Core Web Vitals optimizadas y embudos de conversión dinámicos.",
    },
    tech: ["Next.js", "React", "Tailwind CSS", "SEO Optimization"],
    liveUrl: "https://hyphenxsolutions.com/",
    status: { en: "Live in Production", es: "En Producción Activa" },
  },
  {
    id: "mrrepair",
    category: "ecommerce",
    tag: {
      en: "On-Demand Service Marketplace",
      es: "Marketplace de Servicios a Domicilio",
    },
    title: "Mr Repair On-Demand Services",
    text: {
      en: "Home and appliance repair booking portal connecting verified technicians with homeowners, featuring automated time-slot dispatch and transparent pricing.",
      es: "Portal de reservas de reparación y mantenimiento del hogar que conecta técnicos con clientes mediante asignación inteligente de horarios y tarifas claras.",
    },
    tech: ["Laravel", "PHP", "MySQL", "Google Maps", "Payment Gateway"],
    liveUrl: "https://www.mrrepair.co.in/",
    status: { en: "Live in Production", es: "En Producción Activa" },
  },
  {
    id: "ebsher",
    category: "web",
    tag: {
      en: "Cloud Vault & Storage · Security",
      es: "Bóveda Digital en la Nube · Seguridad",
    },
    title: "Ebsher Secure Digital Vault",
    text: {
      en: "Encrypted digital memory locker allowing users to safeguard confidential media, photos, and documents with scheduled time-locked future unlocks.",
      es: "Bóveda digital cifrada para almacenar de forma segura recuerdos y documentos confidenciales con entregas y desbloqueos temporizados en el futuro.",
    },
    tech: ["Node.js", "AWS S3", "Encryption", "REST APIs", "React"],
    liveUrl: "https://ebsherapp.com/",
    status: { en: "Live in Production", es: "En Producción Activa" },
  },
  {
    id: "icastt",
    category: "web",
    tag: {
      en: "Talent Casting & Media Marketplace",
      es: "Marketplace de Casting y Audiovisual",
    },
    title: "iCastt Talent Discovery Engine",
    text: {
      en: "Casting platform connecting models, actors, and commercial filmmakers with media portfolio showcases, audition management, and talent contracting.",
      es: "Plataforma de casting que conecta modelos, actores y directores audiovisuales con muestras de portafolio, audiciones y gestión de contrataciones.",
    },
    tech: ["Laravel", "PHP", "MySQL", "AWS S3 Media", "REST APIs"],
    liveUrl: "https://icastt.com/",
    status: { en: "Live in Production", es: "En Producción Activa" },
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    period: "Jul 2024 - Present",
    company: "Independent Web & Software Engineering",
    location: "Remote · Full-Stack & Website Care",
    role: {
      en: "Senior Full-Stack Consultant & Website Care Specialist",
      es: "Consultor Full-Stack Senior y Especialista en Cuidado Web",
    },
    description: {
      en: "Partnering directly with international businesses across the US, UK, Spain, and Europe to engineer scalable web platforms, custom APIs, and reliable monthly maintenance retainers.",
      es: "Colaborando directamente con empresas internacionales de EE.UU., Reino Unido, España y Europa en el desarrollo de plataformas web escalables, APIs personalizadas y mantenimiento mensual continuo.",
    },
    achievements: {
      en: [
        "Delivered high-performance web applications and monthly support retainers for global clients.",
        "Engineered custom Laravel, Node.js, and React solutions with payment processing and third-party APIs.",
        "Maintained 99.8% client satisfaction with rapid 24-48 hour turnaround on production updates.",
      ],
      es: [
        "Despliegue de aplicaciones web de alto rendimiento y contratos de soporte mensual para clientes globales.",
        "Desarrollo de soluciones a medida con Laravel, Node.js y React con pasarelas de pago y APIs externas.",
        "Tasa de satisfacción del 99.8% con entregas rápidas de actualizaciones en 24 a 48 horas.",
      ],
    },
  },
  {
    period: "Apr 2024 - Jul 2024",
    company: "Jploft Solutions",
    location: "Jaipur, India · Full-Time",
    role: {
      en: "Senior Full-Stack Engineer",
      es: "Ingeniero Full-Stack Senior",
    },
    description: {
      en: "Architecting and shipping production web and mobile platforms with live third-party integrations, real-time messaging, and high-concurrency backends.",
      es: "Arquitectura y despliegue de plataformas web y móviles con integraciones externas en vivo, mensajería en tiempo real y backends de alta concurrencia.",
    },
    achievements: {
      en: [
        "Architected an international flight, hotel & apartment booking platform integrated with live GDS/flight APIs.",
        "Built full-featured e-commerce systems and fitness applications with real-time WebSockets chat.",
        "Led backend engineering with Node.js & Laravel and modern responsive frontends with React.",
        "Delivered a comprehensive hospital management application with strict privacy controls.",
      ],
      es: [
        "Desarrollé una plataforma internacional de vuelos, hoteles y apartamentos integrada con APIs de vuelos en vivo.",
        "Construí sistemas completos de e-commerce y apps de fitness con chat en tiempo real mediante WebSockets.",
        "Lideré la ingeniería backend con Node.js y Laravel, y frontends modernos y rápidos con React.",
        "Implementé una plataforma de gestión hospitalaria integral con altos estándares de seguridad médica.",
      ],
    },
  },
  {
    period: "Feb 2023 - Apr 2024",
    company: "GMTA Software Solutions",
    location: "India · Full-Time",
    role: {
      en: "Full-Stack Web & API Developer",
      es: "Desarrollador Full-Stack Web y APIs",
    },
    description: {
      en: "Engineered scalable REST APIs, payment systems, and responsive frontends for international mobility, gaming, and wellness clients.",
      es: "Desarrollo de APIs REST escalables, sistemas de pago y frontends adaptativos para clientes internacionales de movilidad, juegos y salud.",
    },
    achievements: {
      en: [
        "Developed 'Li-nk' & 'Tokyo MK' luxury chauffeur and airport transfer booking platforms.",
        "Built 'Wood Creation', a custom furniture e-commerce platform with automated order management.",
        "Created RESTful API backends for 'Quizzire' (gaming) and 'Ayurvedaam' (health/wellness apps).",
        "Optimized MySQL database queries and API response times by over 40%.",
      ],
      es: [
        "Desarrollé las plataformas de traslados de lujo y chófer 'Li-nk' y 'Tokyo MK'.",
        "Creé 'Wood Creation', un e-commerce personalizado de mobiliario con flujo de pedidos automatizado.",
        "Diseñé y programé las APIs REST para 'Quizzire' (juegos) y 'Ayurvedaam' (salud y bienestar).",
        "Optimicé consultas de base de datos MySQL y tiempos de respuesta de APIs en más del 40%.",
      ],
    },
  },
  {
    period: "Jul 2022 - Apr 2023",
    company: "Synarion IT Solutions",
    location: "India · Full-Time",
    role: {
      en: "Web & API Developer",
      es: "Desarrollador Web y de APIs",
    },
    description: {
      en: "Developed custom business management systems, e-commerce stores, and customer relationship management (CRM) software.",
      es: "Desarrollo de sistemas de gestión empresarial personalizados, tiendas virtuales y soluciones de CRM a medida.",
    },
    achievements: {
      en: [
        "Built 'The Johri Bazar' localized multi-vendor e-commerce platform.",
        "Developed 'Shotnlist', an interactive photo framing and customization ordering system.",
        "Engineered business CRM pipelines to automate customer lead tracking and sales conversions.",
      ],
      es: [
        "Construí la plataforma multitienda de comercio local 'The Johri Bazar'.",
        "Desarrollé 'Shotnlist', un sistema interactivo para enmarcado y pedidos personalizados de fotos.",
        "Implementé pipelines de CRM comercial para automatizar el seguimiento de prospectos y ventas.",
      ],
    },
  },
  {
    period: "Sept 2021 - Jul 2022",
    company: "Reva Consultants LLP",
    location: "India · Full-Time",
    role: {
      en: "Full-Stack Web Developer",
      es: "Desarrollador Web Full-Stack",
    },
    description: {
      en: "Delivered web applications, on-demand service dispatch platforms, and nonprofit donation portals with seamless payment integrations.",
      es: "Desarrollo de aplicaciones web, plataformas de despacho de servicios a domicilio y portales con pasarelas de pago seguras.",
    },
    achievements: {
      en: [
        "Constructed 'Mr Repair' on-demand technician booking platform for web and mobile.",
        "Shipped 'Vishwash Mart' full e-commerce shopping experience.",
        "Integrated payment gateways (Razorpay, Stripe) with automated invoicing and receipt generation.",
      ],
      es: [
        "Construí la plataforma 'Mr Repair' para agendamiento de técnicos a domicilio.",
        "Lancé 'Vishwash Mart' con catálogo completo de compras online.",
        "Integré pasarelas de pago con facturación automática y comprobantes electrónicos.",
      ],
    },
  },
  {
    period: "2021 - Present",
    company: "Beast Fitness Tech",
    location: "Remote · Lead Developer",
    role: {
      en: "Lead Web & App Developer",
      es: "Desarrollador Líder Web y Móvil",
    },
    description: {
      en: "Leading the technology lifecycle of top-rated fitness apps and web dashboards with continuous feature deployment and maintenance.",
      es: "Liderando la tecnología de aplicaciones de fitness y paneles web con despliegue continuo de mejoras y mantenimiento.",
    },
    achievements: {
      en: [
        "Architected end-to-end fitness tracking dashboards, workout calculators, and member management portals.",
        "Maintained 99.9% uptime and streamlined real-time user engagement features.",
      ],
      es: [
        "Arquitectura de paneles de seguimiento de entrenamiento, calculadoras fitness y gestión de socios.",
        "Mantuve 99.9% de operatividad y optimicé funciones interactivas en tiempo real.",
      ],
    },
  },
];

export const PLANS_DATA: PlanItem[] = [
  {
    id: "starter",
    name: { en: "Starter Care", es: "Cuidado Básico" },
    price: "$10",
    period: { en: "/ month", es: "/ mes" },
    note: {
      en: "For small websites, personal portfolios & blogs that need routine care.",
      es: "Para sitios pequeños, blogs y portafolios que necesitan mantenimiento mensual.",
    },
    featured: false,
    items: {
      en: [
        "Up to 2 content, FAQ, or image updates per month",
        "Monthly security & broken link health audit",
        "Direct email & WhatsApp developer support",
        "Turnaround in 48 hours or less",
        "Backup verification before making changes",
      ],
      es: [
        "Hasta 2 actualizaciones de texto, FAQs o imágenes al mes",
        "Auditoría mensual de seguridad y enlaces caídos",
        "Soporte directo por email y WhatsApp con el programador",
        "Entrega en 48 horas o menos",
        "Copia de seguridad antes de cada modificación",
      ],
    },
  },
  {
    id: "care",
    name: { en: "Business Pro", es: "Negocio Pro" },
    price: "$19",
    period: { en: "/ month", es: "/ mes" },
    note: {
      en: "Best for active businesses, gyms, clinics & stores needing reliable upkeep.",
      es: "Ideal para empresas activas, gimnasios, clínicas y tiendas que crecen.",
    },
    featured: true,
    badge: { en: "Most Popular", es: "Más Popular" },
    items: {
      en: [
        "Up to 5 content, price, schedule, or banner updates / month",
        "UI bug fixes & responsive layout adjustments",
        "Monthly speed & Core Web Vitals performance review",
        "Priority WhatsApp & Email direct communication",
        "Rapid 24-hour turnaround for emergency tweaks",
        "Form & payment integration functionality checks",
      ],
      es: [
        "Hasta 5 cambios de contenido, precios, horarios o banners al mes",
        "Corrección de errores visuales y ajustes responsive",
        "Revisión mensual de velocidad de carga y rendimiento",
        "Comunicación prioritaria por WhatsApp y correo",
        "Respuesta rápida en 24 horas para cambios urgentes",
        "Verificación de formularios de contacto y pasarelas de pago",
      ],
    },
  },
  {
    id: "growth",
    name: { en: "Growth & Scale", es: "Crecimiento y Escala" },
    price: "$39",
    period: { en: "/ month", es: "/ mes" },
    note: {
      en: "For dynamic websites and e-commerce requiring frequent updates and code tweaks.",
      es: "Para sitios dinámicos y e-commerce con alta frecuencia de novedades y mejoras de código.",
    },
    featured: false,
    items: {
      en: [
        "Up to 10 updates / month (content, code, styling & pages)",
        "New landing page creation or section redesigns",
        "API & webhook troubleshooting (Stripe, WhatsApp, CRMs)",
        "Same-day priority turnaround during business hours",
        "Full monthly performance, SEO & uptime analytics report",
        "Dedicated private Slack / WhatsApp direct channel",
      ],
      es: [
        "Hasta 10 actualizaciones al mes (contenido, código, estilos y páginas)",
        "Creación de nueva página de aterrizaje o rediseño de secciones",
        "Resolución de problemas en APIs y webhooks (Stripe, WhatsApp, CRM)",
        "Prioridad el mismo día en horario de trabajo",
        "Informe mensual de rendimiento, SEO y disponibilidad",
        "Canal directo y privado por WhatsApp o Slack",
      ],
    },
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    name: "Carlos Mendoza",
    role: { en: "Operations Director", es: "Director de Operaciones" },
    country: "Spain",
    flag: "🇪🇸",
    rating: 5,
    content: {
      en: "Pawan has been an absolute lifesaver for our platform. He fixed our booking workflow and payment bugs within hours. Very clear communication and exceptional Laravel and API expertise.",
      es: "Pawan ha sido un salvavidas para nuestra plataforma. Solucionó nuestro flujo de reservas y los errores de pago en cuestión de horas. Comunicación impecable y excelente dominio de Laravel y APIs.",
    },
    projectRef: "Mobility & Booking Platform",
  },
  {
    name: "James Thornton",
    role: { en: "Founder & CEO", es: "Fundador y CEO" },
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 5,
    content: {
      en: "Working directly with Pawan is 10x better than working with traditional agencies. No middlemen, no delays. When we ask for updates, they are done right the first time. Highly recommended!",
      es: "Trabajar directamente con Pawan es 10 veces mejor que con una agencia tradicional. Sin intermediarios ni retrasos. Cuando pedimos cambios, se hacen a la primera con alta calidad.",
    },
    projectRef: "Fitness & Web Platform",
  },
  {
    name: "Dr. Roberto Silva",
    role: { en: "Clinical Manager", es: "Gerente Clínico" },
    country: "Brazil / Portugal",
    flag: "🇧🇷",
    rating: 5,
    content: {
      en: "He helped build and maintain our healthcare portal. Super attentive to data privacy, fast execution, and always available when we need urgent assistance. Truly dependable.",
      es: "Nos ayudó a construir y mantener nuestro portal médico. Muy atento a la privacidad de datos, ejecución veloz y siempre disponible cuando necesitamos asistencia urgente.",
    },
    projectRef: "QMedicina Healthcare Portal",
  },
  {
    name: "Sarah Miller",
    role: { en: "E-Commerce Manager", es: "Directora de Comercio Electrónico" },
    country: "United States",
    flag: "🇺🇸",
    rating: 5,
    content: {
      en: "His monthly care plan is the best investment we made for our website. Everything from our seasonal banner updates to payment checkouts runs smoothly without any downtime.",
      es: "Su plan de mantenimiento mensual es la mejor inversión para nuestra web. Desde actualizaciones de banners de temporada hasta pagos online, todo funciona sin caídas.",
    },
    projectRef: "Online Retail Store",
  },
];

export const FAQS_DATA: FaqItem[] = [
  {
    question: {
      en: "Why should I hire you instead of an agency?",
      es: "¿Por qué debería contratarte a ti en lugar de una agencia?",
    },
    answer: {
      en: "With an agency, you pay heavy overhead costs and speak to account managers who do not write code. With me, you speak directly to the senior developer writing your code. You get faster delivery, transparent pricing, zero communication friction, and 100% accountability.",
      es: "Con una agencia pagas altos costes de intermediarios y hablas con gestores de cuentas que no programan. Conmigo hablas directamente con el desarrollador senior que escribe tu código. Obtienes entregas más rápidas, precios transparentes, cero fricción y total responsabilidad.",
    },
  },
  {
    question: {
      en: "How does the monthly website care plan work?",
      es: "¿Cómo funciona el plan mensual de cuidado y mantenimiento web?",
    },
    answer: {
      en: "It's simple and flexible: Choose a plan ($10, $19, or $39/mo). Whenever you need an update (text, prices, banners, FAQ, bug fix, or security check), message me on WhatsApp or email. I complete it within 24-48 hours. Cancel or upgrade anytime with zero lock-in.",
      es: "Es muy sencillo y flexible: Eliges un plan ($10, $19 o $39/mes). Cuando necesites un cambio (textos, precios, banners, FAQs, corrección de errores o seguridad), me escribes por WhatsApp o correo. Lo resuelvo en 24-48 horas. Puedes cancelar o cambiar de plan cuando quieras sin permanencia.",
    },
  },
  {
    question: {
      en: "Can you build full custom web applications from scratch?",
      es: "¿Puedes desarrollar aplicaciones web completas a medida desde cero?",
    },
    answer: {
      en: "Yes! In addition to monthly maintenance, I build complete end-to-end web apps using Laravel, Node.js, React, Next.js, and Python. From initial database schema to payment gateways, APIs, and cloud deployment, I deliver turnkey solutions.",
      es: "¡Sí, totalmente! Además del mantenimiento mensual, construyo aplicaciones web completas utilizando Laravel, Node.js, React, Next.js y Python. Desde la base de datos hasta pasarelas de pago, APIs y despliegue en la nube, entrego soluciones llave en mano.",
    },
  },
  {
    question: {
      en: "What about timezone differences and languages?",
      es: "¿Qué hay de la diferencia horaria y el idioma?",
    },
    answer: {
      en: "I work with international clients across the US, UK, Spain, Latin America, and Europe. I adapt my schedule to your working hours with guaranteed fast response times. I communicate fluently in English and handle Spanish projects seamlessly.",
      es: "Trabajo habitualmente con clientes internacionales de EE.UU., Reino Unido, España, Latinoamérica y Europa. Adapto mi horario a tu jornada laboral con tiempos de respuesta rápidos garantizados. Me comunico con fluidez en inglés y gestiono proyectos en español.",
    },
  },
  {
    question: {
      en: "Do you sign Non-Disclosure Agreements (NDAs)?",
      es: "¿Firmas acuerdos de confidencialidad (NDA)?",
    },
    answer: {
      en: "Absolutely. Your business ideas, source code, client records, and credentials are 100% confidential and safe. I am happy to sign an NDA before any project discussions begin.",
      es: "Por supuesto. Tus ideas de negocio, código fuente, datos de clientes y credenciales son 100% confidenciales y seguros. Firmo acuerdos de confidencialidad (NDA) antes de comenzar cualquier conversación.",
    },
  },
  {
    question: {
      en: "What guarantees do you offer for peace of mind?",
      es: "¿Qué garantías ofreces para mi total tranquilidad?",
    },
    answer: {
      en: "I offer milestone-based payment schedules, 100% full code ownership (pushed to your private GitHub/GitLab), clean documented code, and 30 days of free bug-fix warranty on all new project deliveries.",
      es: "Ofrezco pagos divididos por hitos completados, propiedad absoluta del código (subido a tu propio repositorio GitHub/GitLab), código limpio documentado y 30 días de garantía gratuita para corrección de incidencias.",
    },
  },
];

export const UI_TEXT = {
  en: {
    badge: "Available for remote projects · US · UK · Spain · India · Europe",
    tagline: "Independent Senior Full-Stack Engineer · 5+ Years Experience",
    heroTitle1: "Your website & apps.",
    heroTitleHighlight: "Always high-performing,",
    heroTitle2: "always up to date.",
    heroSubtitle:
      "I help growing businesses, agencies and entrepreneurs build robust web applications and keep their websites fresh, secure and bug-free — with dedicated 1-on-1 developer support.",
    heroBtnExplore: "View Featured Projects",
    heroBtnCare: "Monthly Care Plans ($10/mo)",
    heroBtnWhatsapp: "Chat on WhatsApp",
    statExperience: "Years Experience",
    statProjects: "Delivered Web Apps",
    statSatisfaction: "Client Satisfaction",
    statResponse: "Average Response Time",
    badgeScope: "Transparent Milestone Scope",
    badgeDirect: "Direct 1-on-1 Communication",
    badgeCode: "100% Code Ownership",
    badgeGuarantee: "30-Day Post-Launch Warranty",

    navServices: "Services",
    navWork: "Projects",
    navExperience: "Experience",
    navPricing: "Care Plans",
    navWhyMe: "Why Choose Me",
    navTestimonials: "Testimonials",
    navFaq: "FAQ",
    navContact: "Let's Talk",

    cardTitle: "Developer Status",
    cardSubtitle: "Ready for new projects & monthly care",
    cardStatus: "Active & Available",
    cardStat1Title: "Full-Stack Web",
    cardStat1Sub: "Laravel · Node · React",
    cardStat2Title: "Fast Turnaround",
    cardStat2Sub: "Within 24-48 Hours",
    cardBullet1: "New feature engineering & API integrations",
    cardBullet2: "Bug resolution & performance optimization",
    cardBullet3: "Reliable monthly website care from $10/mo",
    cardStartingAt: "MONTHLY PLANS FROM",
    cardPerMonth: " / month",

    servicesEyebrow: "Comprehensive Solutions",
    servicesTitle: "What I bring to your business",
    servicesDesc:
      "Whether you need an entire web platform built from the ground up or hands-on monthly support to keep your site updated, I handle the technical heavy lifting.",
    service1Title: "Custom Web Application Development",
    service1Desc:
      "Modern, scalable web platforms built with Laravel, Node.js, React, and Next.js. Engineered for speed, clean architecture, and long-term maintainability.",
    service2Title: "Ongoing Website Care & Maintenance",
    service2Desc:
      "Monthly website care to update FAQs, pricing, banners, schedule changes, security patches, and routine audits so you never have to worry about downtime.",
    service3Title: "API, Payment & WebSockets Integrations",
    service3Desc:
      "Seamless connection of third-party APIs: Stripe, PayPal, Razorpay, Google Maps, Twilio, WebSockets real-time chat, and live travel/booking APIs.",
    service4Title: "Bug Fixing & Performance Optimization",
    service4Desc:
      "Rapid diagnosis and resolution of broken layouts, slow database queries, broken checkout flows, and Core Web Vitals optimization.",

    projectsEyebrow: "Proven Track Record",
    projectsTitle: "Real-world production applications",
    projectsDesc:
      "Explore verified commercial platforms, mobility engines, and SaaS products I have engineered. Click live links to see them in action.",
    filterAll: "All Projects",
    filterMobility: "Mobility & Booking",
    filterHealth: "Health & Fitness",
    filterWeb: "Web Apps & Platforms",
    filterEcommerce: "E-Commerce & Services",
    liveDemoBtn: "Visit Live Website",

    experienceEyebrow: "Career Journey",
    experienceTitle: "5+ years of verified software engineering",
    experienceDesc:
      "A consistent track record of full-time and contract roles across innovative tech firms, delivering robust software for global clients.",

    whyMeEyebrow: "Zero Risk & High Trust",
    whyMeTitle: "Why clients trust me with their business",
    whyMeDesc:
      "Hiring a freelance developer shouldn't feel like a gamble. I provide the accountability and professionalism of a senior engineer with the flexibility of a partner.",
    trustPoint1Title: "Direct Developer Contact",
    trustPoint1Desc: "No account managers, no ticket delays. You get my direct WhatsApp and email for fast, clear answers.",
    trustPoint2Title: "Clear Fixed-Scope Pricing",
    trustPoint2Desc: "You know the exact investment upfront. No surprise bills or hidden hourly overages.",
    trustPoint3Title: "Full Code Ownership & Git Access",
    trustPoint3Desc: "All code is pushed to your repositories with clean commits, structured documentation, and complete IP rights.",
    trustPoint4Title: "Strict NDA & Security Standards",
    trustPoint4Desc: "Your confidential business logic, data, and user information are protected with professional non-disclosure agreements.",

    pricingEyebrow: "Transparent Monthly Care Plans",
    pricingTitle: "Keep your website in top shape every month",
    pricingDesc:
      "No long-term contracts. Pause or cancel anytime. Perfect for businesses that need dependable updates without hiring a full-time in-house developer.",
    pricingFootnote:
      "Need a custom full-stack web application built from scratch? Message me for a tailored milestone-based project quote.",

    testimonialsEyebrow: "Client Endorsements",
    testimonialsTitle: "Trusted by founders and business leaders",
    testimonialsDesc:
      "Here is what entrepreneurs, clinical managers, and project leaders say about working directly with me.",

    faqEyebrow: "Got Questions?",
    faqTitle: "Frequently Asked Questions",
    faqDesc: "Everything you need to know about starting a project, communication, and ongoing support.",

    ctaEyebrow: "Ready to upgrade your website?",
    ctaTitle: "Let's build something remarkable together.",
    ctaDesc:
      "Tell me about your website or app idea. I will review your requirements and respond within 1 hour with a practical action plan and quote.",
    ctaWhatsapp: "WhatsApp Quick Chat",
    ctaEmail: "Send Direct Email",
    ctaLinkedin: "Connect on LinkedIn",

    formTitle: "Send a Direct Project Inquiry",
    formName: "Your Full Name",
    formNamePlaceholder: "e.g. John Smith",
    formEmail: "Your Business Email",
    formEmailPlaceholder: "e.g. john@company.com",
    formService: "What do you need help with?",
    formServiceOption1: "Monthly Website Care ($10 - $39/mo)",
    formServiceOption2: "New Web App Development (Laravel / Node / React)",
    formServiceOption3: "Bug Fix / API Integration / Performance",
    formServiceOption4: "Other Project / Consultation",
    formMessage: "Project Details / Website Link",
    formMessagePlaceholder: "Tell me about your goals, current website URL, or key features you need...",
    formSubmit: "Send Message via WhatsApp",
    formSubmitEmail: "Send via Email",
    copyEmail: "Copy Email",
    copied: "Email Copied!",

    footerCopyright: `© ${new Date().getFullYear()} Pawan Kumar. All rights reserved.`,
    footerSubtext: "Built with Next.js 15, React 19, TypeScript & Tailwind CSS.",
  },

  es: {
    badge: "Disponible para proyectos remotos · España · EE.UU. · Reino Unido · India · Europa",
    tagline: "Ingeniero Full-Stack Senior Independiente · Más de 5 Años de Experiencia",
    heroTitle1: "Tu sitio web y aplicaciones.",
    heroTitleHighlight: "Siempre rápidos,",
    heroTitle2: "siempre actualizados.",
    heroSubtitle:
      "Ayudo a empresas en crecimiento, agencias y emprendedores a crear aplicaciones web robustas y mantener sus páginas actualizadas, seguras y sin fallos — con soporte técnico directo 1 a 1.",
    heroBtnExplore: "Ver Proyectos Destacados",
    heroBtnCare: "Planes de Mantenimiento ($10/mes)",
    heroBtnWhatsapp: "Contactar por WhatsApp",
    statExperience: "Años de Experiencia",
    statProjects: "Apps Web Entregadas",
    statSatisfaction: "Satisfacción del Cliente",
    statResponse: "Tiempo de Respuesta Promedio",
    badgeScope: "Alcance y Precios Claros",
    badgeDirect: "Comunicación Directa 1 a 1",
    badgeCode: "100% Propiedad del Código",
    badgeGuarantee: "Garantía Post-Lanzamiento 30 Días",

    navServices: "Servicios",
    navWork: "Proyectos",
    navExperience: "Experiencia",
    navPricing: "Mantenimiento",
    navWhyMe: "¿Por Qué Elegirme?",
    navTestimonials: "Testimonios",
    navFaq: "Preguntas Frecuentes",
    navContact: "Hablemos",

    cardTitle: "Estado del Programador",
    cardSubtitle: "Disponible para nuevos proyectos y planes mensuales",
    cardStatus: "Activo y Disponible",
    cardStat1Title: "Desarrollo Web Full-Stack",
    cardStat1Sub: "Laravel · Node · React",
    cardStat2Title: "Entrega Rápida",
    cardStat2Sub: "En 24 a 48 Horas",
    cardBullet1: "Desarrollo de nuevas funciones e integraciones API",
    cardBullet2: "Resolución de errores y optimización de velocidad",
    cardBullet3: "Cuidado mensual confiable desde $10/mes",
    cardStartingAt: "PLANES MENSUALES DESDE",
    cardPerMonth: " / mes",

    servicesEyebrow: "Soluciones Integrales",
    servicesTitle: "Lo que puedo aportar a tu negocio",
    servicesDesc:
      "Tanto si necesitas una plataforma web completa desarrollada desde cero como mantenimiento continuo para mantener tu página al día, yo me encargo de la tecnología.",
    service1Title: "Desarrollo de Aplicaciones Web a Medida",
    service1Desc:
      "Plataformas web modernas y escalables con Laravel, Node.js, React y Next.js. Diseñadas para velocidad, arquitectura limpia y fácil mantenimiento a largo plazo.",
    service2Title: "Cuidado y Mantenimiento Web Mensual",
    service2Desc:
      "Planes mensuales para actualizar textos, preguntas frecuentes, precios, banners, cambios de horario, parches de seguridad y auditorías preventivas.",
    service3Title: "Integración de APIs, Pagos y WebSockets",
    service3Desc:
      "Conexión perfecta de servicios externos: Stripe, PayPal, Razorpay, Google Maps, Twilio, chats en tiempo real con WebSockets y APIs de reservas en vivo.",
    service4Title: "Corrección de Errores y Optimización",
    service4Desc:
      "Diagnóstico y solución rápida de fallos visuales, lentitud en bases de datos, problemas en pasarelas de pago y mejora de Core Web Vitals.",

    projectsEyebrow: "Experiencia Comprobada",
    projectsTitle: "Aplicaciones reales en producción",
    projectsDesc:
      "Descubre plataformas comerciales, sistemas de movilidad y productos SaaS que he programado. Haz clic en los enlaces para verlos en vivo.",
    filterAll: "Todos los Proyectos",
    filterMobility: "Movilidad y Reservas",
    filterHealth: "Salud y Fitness",
    filterWeb: "Apps Web y Plataformas",
    filterEcommerce: "E-Commerce y Servicios",
    liveDemoBtn: "Visitar Sitio Web en Vivo",

    experienceEyebrow: "Trayectoria Profesional",
    experienceTitle: "Más de 5 años de experiencia comprobada",
    experienceDesc:
      "Historial contrastado en empresas de tecnología y consultoras de software, entregando soluciones robustas para clientes internacionales.",

    whyMeEyebrow: "Cero Riesgo y Máxima Confianza",
    whyMeTitle: "¿Por qué los clientes confían en mí?",
    whyMeDesc:
      "Contratar a un programador freelance no debe ser una incertidumbre. Te ofrezco la seriedad de un ingeniero senior con la cercanía y agilidad de un colaborador directo.",
    trustPoint1Title: "Contacto Directo con el Programador",
    trustPoint1Desc: "Sin intermediarios ni tickets de soporte lentos. Hablas directamente conmigo por WhatsApp y correo.",
    trustPoint2Title: "Presupuestos Cerrados y Claros",
    trustPoint2Desc: "Conoces el coste exacto desde el inicio. Sin sorpresas de facturación por horas imprevistas.",
    trustPoint3Title: "Propiedad Total del Código en Git",
    trustPoint3Desc: "Todo el código se sube a tus repositorios con documentación clara y todos los derechos de autor.",
    trustPoint4Title: "Acuerdos de Confidencialidad (NDA)",
    trustPoint4Desc: "Tu propiedad intelectual, lógica de negocio y datos están protegidos bajo contratos de confidencialidad estrictos.",

    pricingEyebrow: "Planes Mensuales Transparentes",
    pricingTitle: "Mantén tu web impecable mes a mes",
    pricingDesc:
      "Sin contratos de permanencia. Pausa o cancela cuando quieras. Ideal para empresas que necesitan soporte continuo sin el coste de un empleado a tiempo completo.",
    pricingFootnote:
      "¿Necesitas una aplicación web completa desarrollada desde cero? Escríbeme para un presupuesto cerrado adaptado a tu proyecto.",

    testimonialsEyebrow: "Opiniones de Clientes",
    testimonialsTitle: "Recomendado por fundadores y directivos",
    testimonialsDesc:
      "Descubre las experiencias de directores de empresas, gerentes clínicos y emprendedores que trabajan conmigo.",

    faqEyebrow: "¿Tienes Dudas?",
    faqTitle: "Preguntas Frecuentes",
    faqDesc: "Todo lo que necesitas saber sobre el inicio de proyectos, métodos de trabajo y soporte continuo.",

    ctaEyebrow: "¿Listo para mejorar tu web?",
    ctaTitle: "Construyamos algo extraordinario juntos.",
    ctaDesc:
      "Cuéntame sobre tu sitio web o aplicación. Analizaré tus necesidades y te responderé en menos de 1 hora con una propuesta clara y práctica.",
    ctaWhatsapp: "Chat Directo por WhatsApp",
    ctaEmail: "Enviar Correo Directo",
    ctaLinkedin: "Ver Perfil en LinkedIn",

    formTitle: "Solicitar Presupuesto o Información",
    formName: "Tu Nombre Completo",
    formNamePlaceholder: "Ej: Juan Pérez",
    formEmail: "Tu Correo Electrónico",
    formEmailPlaceholder: "Ej: juan@empresa.com",
    formService: "¿En qué servicio estás interesado?",
    formServiceOption1: "Mantenimiento Web Mensual ($10 - $39/mes)",
    formServiceOption2: "Desarrollo de App Web (Laravel / Node / React)",
    formServiceOption3: "Corrección de Errores / APIs / Optimización",
    formServiceOption4: "Otro Proyecto / Consultoría Técnica",
    formMessage: "Detalles del Proyecto o Enlace a tu Web",
    formMessagePlaceholder: "Explícame tus objetivos, la dirección de tu web actual o qué funciones necesitas...",
    formSubmit: "Enviar Mensaje por WhatsApp",
    formSubmitEmail: "Enviar por Correo",
    copyEmail: "Copiar Correo",
    copied: "¡Copiado al Portapapeles!",

    footerCopyright: `© ${new Date().getFullYear()} Pawan Kumar. Todos los derechos reservados.`,
    footerSubtext: "Desarrollado con Next.js 15, React 19, TypeScript y Tailwind CSS.",
  },
};

