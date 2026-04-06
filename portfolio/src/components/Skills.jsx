import { useLang } from '../context/LangContext'
import { useReveal } from '../hooks/useReveal'
import '../styles/Skills.css'

const categories = [
  {
    title: '// Frontend',
    tags: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Sass', 'Bootstrap', 'Axios'],
    dim: [],
  },
  {
    title: '// Backend',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'REST API'],
    dim: ['Node.js (aprendiendo)'],
  },
  {
    title: '// Datos & DevOps',
    tags: ['MySQL', 'Cloud / Oracle', 'Postman'],
    dim: ['Docker (básico)', 'Python (básico)', 'Scikit-learn (básico)'],
  },
  {
    title: '// Diseño & Otras',
    tags: ['UX/UI', 'Figma', 'Photoshop', 'Illustrator', 'Git / GitHub', 'SEO', 'WordPress', 'Shopify'],
    dim: [],
  },
]

const t = {
  label: { es: 'STACK TECNOLÓGICO', en: 'TECH STACK' },
  title: { es: 'Herramientas &\ntecnologías', en: 'Tools &\ntechnologies' },
}

export default function Skills() {
  const { lang } = useLang()
  const headerRef = useReveal()

  return (
    <section id="skills" className="skills">
      <div className="skills-header reveal" ref={headerRef}>
        <div className="section-label" style={{ justifyContent: 'center' }} data-num="02 /">
          {t.label[lang]}
        </div>
        <h2 className="section-title">
          {t.title[lang].split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}
        </h2>
      </div>
      <div className="skills-grid">
        {categories.map(cat => {
          const ref = useReveal()
          return (
            <div className="skill-category reveal" key={cat.title} ref={ref}>
              <div className="skill-cat-title">{cat.title}</div>
              <div className="skill-tags">
                {cat.tags.map(tag => <span className="skill-tag" key={tag}>{tag}</span>)}
                {cat.dim.map(tag => <span className="skill-tag dim" key={tag}>{tag}</span>)}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}