import React from 'react'
import './headerInfo.css'
import WhatsApp from '../logos/whastapp'

const HeaderInfo = () => {
  const whatsappMessage = `Hi, I saw the page autenticotours.com and I want to know more about it! Could you send me more info?`;

  return (
    <div className="container">
      <h1 className="title">By Marizio</h1>
      <h2 className="subtitle">Authentic Costa Rica Tours</h2>
      <h5>
        <span className="material-symbols-outlined">location_on</span>
        Brasilito, Santa Cruz, Guanacaste
      </h5>

      <div id="tours-infoHeader">
        <div className="some-tours">
          <a href="#tours">
            <p>Know more about the tours</p>
          </a>
        </div>

        {/* Botón WhatsApp como enlace con estilo de botón */}
        <a
          className="whatsapp-button"
          href={`https://wa.me/50661392424?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="whats">
            <WhatsApp />
          </div>
          Contact me
        </a>
      </div>
    </div>
  );
};

export default HeaderInfo;