import { useLang } from '../context/LangContext'
import { useReveal } from '../hooks/useReveal'
import '../styles/Contact.css'

const t = {
  pre:   { es: '// let\'s work together', en: '// let\'s work together' },
  title: { es: '¿Hablamos?',             en: "Let's talk?" },
  sub: {
    es: 'Estoy buscando mi primera oportunidad como Fullstack Developer. Si tenés un proyecto interesante o una posición abierta, escribime.',
    en: "I'm looking for my first opportunity as a Fullstack Developer. If you have an interesting project or an open position, reach out.",
  },
}

const socials = [
  { label: 'GitHub',    href: 'https://github.com/andreaeba' },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/andreaeba/' },
  { label: 'Twitter/X', href: 'https://www.twitter.com/andreeeae' },
]

export default function Contact() {
  const { lang } = useLang()
  const ref = useReveal()

  return (
    <section id="contacto" className="contact">
      <div className="contact-inner reveal" ref={ref}>
        <div className="contact-pre">{t.pre[lang]}</div>
        <h2 className="contact-title">
          <span className="accent">{t.title[lang].replace('¿', '¿').split('?')[0]}</span>?
        </h2>
        <p className="contact-sub">{t.sub[lang]}</p>
        <a href="mailto:andreabusb@gmail.com" className="contact-email">
          andreabusb@gmail.com
        </a>
        <div className="social-links">
          {socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-link">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}