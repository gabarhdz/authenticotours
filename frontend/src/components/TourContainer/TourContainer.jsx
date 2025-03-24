import React from 'react'
import Carrousel from '../Carrousel/Carrousel'
import WhatsApp from '../logos/whastapp'
import './TourContainer.css'

const TourContainer = () => {
  return (
    <div className="tour-container">
      <div className="tour-image">
        <Carrousel />
      </div>

      {/* Contenido del tour */}
      <div className="tour-info">
        <h2 className="tour-title">Fishing Tour</h2>
        <p className="tour-duration">
          <strong>Duration: 4 hours</strong>
        </p>
        <div className="tour-stars">
          ⭐⭐⭐⭐⭐
        </div>
        <p className="tour-description">
          Embark on an unforgettable fishing adventure that promises both
          relaxation and thrill! Our fishing tour offers a half-day trip lasting
          5 hours, where you can immerse yourself in the beauty of nature while
          casting your line into pristine waters.
        </p>

        {/* Precio y botón de WhatsApp */}
        <div className="tour-booking">
          <p className="tour-price">
            book from <span>$60</span> now!
          </p>
          <button><WhatsApp /> Contact via Whatsapp</button>
        </div>
      </div>
    </div>
  );
};

export default TourContainer;
