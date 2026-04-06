import { useLang } from '../context/LangContext'
import { useReveal } from '../hooks/useReveal'
import '../styles/About.css'

const t = {
  label: { es: 'SOBRE MÍ',   en: 'ABOUT ME' },
  title: { es: 'Venezolana en\nBuenos Aires,\ntransformando café en código.', en: 'Venezuelan in\nBuenos Aires,\ntransforming coffee into code.' },
  stats: [
    { num: '+4', es: 'años en tecnología',  en: 'years in tech' },
    { num: '+10', es: 'proyectos realizados', en: 'projects built' },
    { num: 'B2',  es: 'nivel de inglés',     en: 'english level' },
    { num: '∞',   es: 'ganas de aprender',   en: 'hunger to learn' },
  ],
}

export default function About() {
  const { lang } = useLang()
  const ref1 = useReveal()
  const ref2 = useReveal()

  return (
    <section id="sobre-mi" className="about">
      <div className="reveal" ref={ref1}>
        <div className="section-label" data-num="01 /">{t.label[lang]}</div>
        <h2 className="section-title">
          {t.title[lang].split('\n').map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </h2>
        <div className="about-stats">
          {t.stats.map(s => (
            <div className="stat-box" key={s.num}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{lang === 'es' ? s.es : s.en}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="reveal" ref={ref2}>
        <div className="terminal-box">
          <div className="terminal-bar">
            <div className="t-dot r" /><div className="t-dot y" /><div className="t-dot g" />
            <span>andrea@portfolio ~ whoami</span>
          </div>
          <div className="terminal-body">
            <div><span className="t-prompt">→ </span><span className="t-cmd">cat about.md</span></div>
            <br />
            <div className="t-out">Nombre: <span>Andrea Bermúdez</span></div>
            <div className="t-out">Ubicación: <span>Buenos Aires, Argentina 🇦🇷</span></div>
            <div className="t-out">Origen: <span>Venezuela 🇻🇪</span></div>
            <div className="t-out">Rol: <span>Fullstack Developer</span></div>
            <div className="t-out">Formación: <span>Ada ITW + Beca Code Your Future de Globant + Programa ONE de Oracle + autodidacta</span></div>
            <br />
            <div className="t-out">Background: <span>Marketing digital, campañas digitales, diseño gráfico,</span></div>
            <div className="t-out">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>e-commerce y más.</span></div>
            <br />
            <div className="t-out">Pasiones: <span>amor por el código limpio, píxel perfect compulsivo,</span></div>
            <div className="t-out">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Star Wars entusiasta y amo por la astronomía.</span></div>
            <br />
            <div><span className="t-prompt">→ </span><span className="t-cursor" /></div>
          </div>
        </div>
      </div>
    </section>
  )
}