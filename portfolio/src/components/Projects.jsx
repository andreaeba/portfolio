import { useLang } from '../context/LangContext'
import { useReveal } from '../hooks/useReveal'
import '../styles/Projects.css'

const projects = [
  {
    num: '// 001',
    featured: true,
    badge: '★ HACKATHON · Alura + NoCountry',
    title: 'ChurnInsight',
    desc: {
      es: 'Sistema de predicción de cancelación de suscripciones (churn) desarrollado en equipo. Combina un modelo de Machine Learning entrenado en Python con una API REST en Java/Spring Boot y un dashboard en React. El modelo predice la probabilidad de baja de un cliente y genera recomendaciones de retención en tiempo real.',
      en: 'Team-built subscription churn prediction system. Combines a Python-trained ML model with a Java/Spring Boot REST API and a React dashboard. The model predicts churn probability and generates real-time retention recommendations.',
    },
    stack: ['React', 'Java', 'Spring Boot', 'Python', 'scikit-learn', 'REST API'],
    links: [{ label: 'GitHub →', href: 'https://github.com/andreaeba/repo-base-protected' }],
  },
  {
    num: '// 002',
    title: 'Password Generator',
    desc: {
      es: 'Generador de contraseñas seguras con configuración de longitud, uso de mayúsculas, números y símbolos. Interfaz limpia con feedback visual de fortaleza.',
      en: 'Secure password generator with configurable length, uppercase, numbers and symbols. Clean UI with visual strength feedback.',
    },
    stack: ['JavaScript', 'HTML5', 'CSS3'],
    links: [
      { label: 'Demo →', href: 'https://andreaeba.github.io/generador-de-contrasenias/' },
      { label: 'GitHub →', href: 'https://github.com/andreaeba/generador-de-contrasenias' },
    ],
  },
  {
    num: '// 003',
    title: 'Library Management System',
    desc: {
      es: 'Plataforma de gestión integral diseñada para optimizar el control de inventario de libros y la administración de préstamos. El sistema permite realizar operaciones CRUD.',
      en: 'Comprehensive management platform designed to streamline book inventory control and loan administration. The system enables full CRUD (Create, Read, Update, Delete) operations.',
    },
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JPA/Hibernate', 'Thymeleaf', 'MySQL'],
    links: [
      { label: 'GitHub →', href: 'https://github.com/andreaeba/biblioteca' },
    ],
  },
  {
    num: '// 004',
    title: 'To-do App',
    desc: {
      es: 'aplicación intuitiva diseñada para la gestión de tareas diarias. Permite a los usuarios añadir, marcar como completadas y eliminar tareas de forma eficiente, ayudando a mantener el flujo de trabajo organizado mediante una interfaz minimalista y reactiva.',
      en: 'intuitive application designed for daily task management. It allows users to efficiently add, mark as completed, and delete tasks, helping maintain an organized workflow through a minimalist and reactive interface.',
    },
    stack: ['React', 'HTML5', 'CSS3'],
    links: [
      { label: 'GitHub →', href: 'https://github.com/andreaeba/todo-app' },
    ],
  },
  {
    num: '// 005',
    title: 'Job Finder',
    desc: {
      es: 'Plataforma de empleo con funciones CRUD completas. Permite gestionar vacantes (crear, editar, borrar) y aplicar filtros dinámicos por ubicación, categoría y experiencia para búsquedas precisas..',
      en: 'Job search app with full CRUD features. Manage listings (create, edit, delete) and use dynamic filters by location, category, and seniority for precise results.',
    },
    stack: ['JavaScript', 'HTML5', 'CSS3'],
    links: [
      { label: 'Demo →', href: 'https://andreaeba.github.io/job-finder-app/' },
      { label: 'GitHub →', href: 'https://github.com/andreaeba/job-finder-app' },
    ],
  },
  {
    num: '// 006',
    title: 'Editor de Memes',
    desc: {
      es: 'Plataforma de empleo con funciones CRUD completas. Permite gestionar vacantes (crear, editar, borrar) y aplicar filtros dinámicos por ubicación, categoría y experiencia para búsquedas precisas..',
      en: 'Job search app with full CRUD features. Manage listings (create, edit, delete) and use dynamic filters by location, category, and seniority for precise results.',
    },
    stack: ['JavaScript', 'HTML5', 'CSS3'],
    links: [
      { label: 'Demo →', href: 'https://andreaeba.github.io/editor-de-memes/' },
      { label: 'GitHub →', href: 'https://github.com/andreaeba/editor-de-memes' },
    ],
  },
]

const t = {
  label: { es: 'PROYECTOS',      en: 'PROJECTS' },
  title: { es: 'Lo que construí', en: "What I've built" },
}

export default function Projects() {
  const { lang } = useLang()
  const headerRef = useReveal()

  return (
    <section id="proyectos" className="projects">
      <div className="reveal" ref={headerRef}>
        <div className="section-label" data-num="03 /">{t.label[lang]}</div>
        <h2 className="section-title">{t.title[lang]}</h2>
      </div>
      <div className="projects-grid">
        {projects.map(p => {
          const ref = useReveal()
          return (
            <div
              key={p.title}
              className={`project-card reveal ${p.featured ? 'featured' : ''}`}
              ref={ref}
            >
              {p.badge && <div className="project-badge">{p.badge}</div>}
              <div className="project-num">{p.num}</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc[lang]}</p>
              <div className="project-stack">
                {p.stack.map(s => <span className="stack-tag" key={s}>{s}</span>)}
              </div>
              <div className="project-links">
                {p.links.map(l => (
                  <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="project-link">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}