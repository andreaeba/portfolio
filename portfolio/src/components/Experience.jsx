import { useLang } from "../context/LangContext";
import { useReveal } from "../hooks/useReveal";
import "../styles/Experience.css";
import Projects from "./Projects";

const items = [
  {
    date: "2025",
    role: { es: "Hackathon Fullstack", en: "Fullstack Hackathon" },
    company: "Alura + NoCountry",
    desc: {
      es: "Lideré el desarrollo del proyecto ChurnInsight, trabajando en un equipo multidisciplinario. Mi rol fue clave para conectar el frontend (React) con la API REST (Java), asegurando una experiencia de usuario fluida y técnica.",
      en: "I led the development of the ChurnInsight project, working in a multidisciplinary team. My role was key in connecting the frontend (React) with the REST API (Java), ensuring a smooth and technical user experience.",
    },
    links: [
      { label: "Ver showcase →", href: "https://nocountry.tech/hackathon-one-ii-latam/cmj3ky3vt00ufke01ipvngjhz" },

    ],
  },
  {
    date: "2024",
    role: { es: "Backend Developer Java & DevOps", en: "Backend Developer Java & DevOps" },
    company: "Alura Latam + Oracle",
    desc: {
      es: "Formación en Java orientado a objetos, Spring Boot y bases de Cloud Computing con Oracle. Comprensión del ecosistema backend y CI/CD.",
      en: "Training in object-oriented Java, Spring Boot and Cloud Computing fundamentals with Oracle. Understanding of backend ecosystem and CI/CD.",
    },
    links: [
      { label: "Ver diploma →", href: "https://drive.google.com/file/d/1WCtQ_2UM4vfBah5LsiIvXQLTQbOP_aZa/view?usp=sharing" },
    ],
    
  },
  {
    date: "2023",
    role: { es: "Backend Java Developer", en: "Backend Java Developer" },
    company: 'Beca "Code Your Future" de Globant + Egg',
    desc: {
      es: "Formación en Java orientado a objetos, Spring Boot and MySQL.",
      en: "Training in object-oriented Java, Spring Boot and MySQL.",
    },
    links: [
      { label: "Ver diploma →", href: "https://drive.google.com/file/d/1Yzxnwyg6bqhKeRPX8QOO1C8B5VIDp1n6/view?usp=sharing" },
    ],
  },
  {
    date: "2021 – 2022",
    role: { es: "Frontend Development", en: "Frontend Development" },
    company: "Ada ITW",
    desc: {
      es: "Formación formal en desarrollo frontend: HTML, CSS, Sass, JavaScript, React y TypeScript. Proyectos prácticos y trabajo en equipo con metodologías ágiles.",
      en: "Formal frontend development training: HTML, CSS, Sass, JavaScript, React and TypeScript. Practical projects and teamwork with agile methodologies.",
    },
  },
  {
    date: "2017 – 2026",
    role: {
      es: "Marketing Digital & E-commerce",
      en: "Digital Marketing & E-commerce",
    },
    company: "Varias empresas",
    desc: {
      es: "9 años desarrollando e-commerce en WordPress y Shopify, diseño gráfico, SEO y Facebook Ads. Base sólida en producto digital y experiencia de usuario.",
      en: "9 years developing e-commerce on WordPress and Shopify, graphic design, SEO and Facebook Ads. Solid foundation in digital product and user experience.",
    },
  },
  {
    date: "2011 - 2015",
    role: {
      es: "Técnico en Administración de Aduanas",
      en: "Customs Administration Technician",
    },
    company: "Universidad Simón Bolívar",
    desc: {
      es: "Profesional egresado cualificado para plantear y desarrollar políticas y estrategias empresariales orientadas a los negocios internacionales, elaborando propuestas que faciliten los procesos de importación y exportación, procedimientos aduaneros, logística internacional, estudios de mercados y manejo de mercaderías con responsabilidad y compromiso.",
      en: "Qualified graduate capable of developing and implementing business policies and strategies focused on international trade, creating proposals that streamline import and export processes, customs procedures, international logistics, market research, and the responsible and committed handling of goods.",
    },
    links: [
      { label: "Ver diploma →", href: "https://drive.google.com/file/d/1RPUa4-WV_RPxQp7qPDnKkTGOx71nq9kA/view" },
    ],
  },
];

const t = {
  label: { es: "EXPERIENCIA & FORMACIÓN", en: "EXPERIENCE & EDUCATION" },
  title: { es: "Mi evolución digital_", en: "My journey" },
};

export default function Experience() {
  const { lang } = useLang();
  const headerRef = useReveal();
  const timelineRef = useReveal();

  return (
    <section id="experiencia" className="experience">
      <div className="reveal" ref={headerRef}>
        <div className="section-label" data-num="04 /">
          {t.label[lang]}
        </div>
        <h2 className="section-title">
          {t.title[lang].split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </h2>
      </div>
      <div className="timeline reveal" ref={timelineRef}>
        {items.map((item) => (
          <div className="timeline-item" key={item.date}>
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-role">{item.role[lang]}</div>
            <div className="timeline-company">{item.company}</div>
            <p className="timeline-desc">{item.desc[lang]}</p>
            <div className="timeline-company">{item.diploma}</div>
            <div>
              {item.links &&
                item.links.map((link) => (
                  <a
                    
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="experience-links"
                  >
                    {link.label}
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
