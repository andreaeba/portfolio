import { useLang } from '../context/LangContext'
import { useReveal } from '../hooks/useReveal'
import '../styles/Experience.css'

const items = [
  {
    date: '2025',
    role: { es: 'Hackathon Fullstack', en: 'Fullstack Hackathon' },
    company: 'Alura + NoCountry',
    desc: {
      es: 'Lideré el desarrollo del proyecto ChurnInsight, trabajando en un equipo multidisciplinario. Mi rol fue clave para conectar el frontend (React) con la API REST (Java), asegurando una experiencia de usuario fluida y técnica.',
      en: 'I led the development of the ChurnInsight project, working in a multidisciplinary team. My role was key in connecting the frontend (React) with the REST API (Java), ensuring a smooth and technical user experience.',
    },
    
  },
  {
    date: '2024',
    role: { es: 'Cursos de Java & DevOps', en: 'Java & DevOps Training' },
    company: 'Alura Latam + Oracle',
    desc: {
      es: 'Formación en Java orientado a objetos, Spring Boot y bases de Cloud Computing con Oracle. Comprensión del ecosistema backend y CI/CD.',
      en: 'Training in object-oriented Java, Spring Boot and Cloud Computing fundamentals with Oracle. Understanding of backend ecosystem and CI/CD.',
    },
    url: 'https://drive.google.com/file/d/1WCtQ_2UM4vfBah5LsiIvXQLTQbOP_aZa/view?usp=sharing',
  },
  {
    date: '2023',
    role: { es: 'Cursos de Java Developer', en: 'Java Developer Training' },
    company: 'Beca "Code Your Future" de Globant + Egg',
    desc: {
      es: 'Formación en Java orientado a objetos, Spring Boot and MySQL.',
      en: 'Training in object-oriented Java, Spring Boot and MySQL.',
    },
    url: 'https://drive.google.com/file/d/1Yzxnwyg6bqhKeRPX8QOO1C8B5VIDp1n6/view?usp=sharing',
  },
  {
    date: '2021 – 2022',
    role: { es: 'Frontend Development', en: 'Frontend Development' },
    company: 'Ada ITW',
    desc: {
      es: 'Formación formal en desarrollo frontend: HTML, CSS, Sass, JavaScript, React y TypeScript. Proyectos prácticos y trabajo en equipo con metodologías ágiles.',
      en: 'Formal frontend development training: HTML, CSS, Sass, JavaScript, React and TypeScript. Practical projects and teamwork with agile methodologies.',
    },
  },
  {
    date: '2017 – 2021',
    role: { es: 'Marketing Digital & E-commerce', en: 'Digital Marketing & E-commerce' },
    company: 'Independiente',
    desc: {
      es: '4 años desarrollando e-commerce en WordPress y Shopify, diseño gráfico, SEO y Facebook Ads. Base sólida en producto digital y experiencia de usuario.',
      en: '4 years developing e-commerce on WordPress and Shopify, graphic design, SEO and Facebook Ads. Solid foundation in digital product and user experience.',
    },
  },
]

const t = {
  label: { es: 'EXPERIENCIA & FORMACIÓN', en: 'EXPERIENCE & EDUCATION' },
  title: { es: 'Mi evolución digital_',        en: 'My\njourney' },
}

export default function Experience() {
  const { lang } = useLang()
  const headerRef = useReveal()
  const timelineRef = useReveal()

  return (
    <section id="experiencia" className="experience">
      <div className="reveal" ref={headerRef}>
        <div className="section-label" data-num="04 /">{t.label[lang]}</div>
        <h2 className="section-title">
          {t.title[lang].split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}
        </h2>
      </div>
      <div className="timeline reveal" ref={timelineRef}>
        {items.map(item => (
          <div className="timeline-item" key={item.date}>
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-role">{item.role[lang]}</div>
            <div className="timeline-company">{item.company}</div>
            <p className="timeline-desc">{item.desc[lang]}</p>
           
          </div>
        ))}
      </div>
    </section>
  )
}