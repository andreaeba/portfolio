import { useLang } from '../context/LangContext'
import '../styles/Nav.css'

const links = [
  { href: '#sobre-mi', es: 'sobre mí',    en: 'about' },
  { href: '#skills',   es: 'skills',      en: 'skills' },
  { href: '#proyectos',es: 'proyectos',   en: 'projects' },
  { href: '#experiencia', es: 'experiencia', en: 'experience' },
  { href: '#contacto', es: 'contacto',    en: 'contact' },
]

export default function Nav() {
  const { lang } = useLang()
  return (
    <nav className="nav">
      <div className="nav-logo">AB<span>_</span>dev</div>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href}>{lang === 'es' ? l.es : l.en}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}