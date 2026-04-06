import React from 'react';
import { useLang } from '../context/LangContext'; // Asegúrate de que esta ruta sea correcta
import '../styles/LangToggle.css';

const LangToggle = () => {
  const { lang, setLang } = useLang();

  return (
    <div className="lang-toggle-container">
      <button 
        className={`lang-btn ${lang === 'es' ? 'active' : ''}`} 
        onClick={() => setLang('es')}
      >
        ES
      </button>
      <button 
        className={`lang-btn ${lang === 'en' ? 'active' : ''}`} 
        onClick={() => setLang('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LangToggle;