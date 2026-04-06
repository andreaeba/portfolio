import { useLang } from '../context/LangContext'
import '../styles/Hero.css'

const t = {
  tag:  { es: 'Disponible para trabajar', en: 'Available for work' },
  role: { es: '> Fullstack Developer_',   en: '> Fullstack Developer_' },
  desc: {
    es: 'Transformo ideas en experiencias digitales con código limpio y una visión híbrida entre diseño y funcionalidad fullstack.',
    en: 'I transform ideas into digital experiences with clean code and a hybrid vision between design and full-stack functionality.',
  },
  cta1: { es: 'Ver proyectos →', en: 'View projects →' },
  cta2: { es: 'Contactame',      en: 'Contact me' },
}

export default function Hero() {
  const { lang } = useLang()
  return (
    <section id="hero" className="hero">
      <div className="hero-glow" />
      <div className="hero-glow2" />
      <div className="hero-content">
        <div className="hero-tag">{t.tag[lang]}</div>
        <h1 className="hero-name">
          Andrea<br /><span className="accent">Bermúdez</span>
        </h1>
        <div className="hero-role">{t.role[lang]}</div>
        <p className="hero-desc">{t.desc[lang]}</p>
        <div className="hero-ctas">
          <a href="#proyectos" className="btn-primary">{t.cta1[lang]}</a>
          <a href="#contacto"  className="btn-ghost">{t.cta2[lang]}</a>
        </div>
      </div>
      <div className="hero-scroll">scroll</div>
    </section>
  )
}