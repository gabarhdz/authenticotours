import React from 'react'
import Carrousel from '../Carrousel/Carrousel'
import WhatsApp from '../logos/whastapp'
import './TourContainer.css'

const TourContainer = ({photos,tour_name,tour_description,min_people,duration}) => {
  return (
    <div className="tour-container">
      <div className="tour-image">
        <Carrousel images={photos}/>
      </div>
      
      <div className="tour-info">
        <div className="tour-info-header">
          <h2 className="tour-title">{tour_name}</h2>
          <p className="tour-duration">
            <strong>Duration: {duration} hours</strong>
          </p>
          <div className="tour-stars">⭐⭐⭐⭐⭐</div>
        </div>
        <p>
          Min of people: {min_people}
        </p>
        <p>

        </p>
        <p className="tour-description">
          {tour_description}
        </p>
      </div>
      
      <div className="tour-booking">
        <p className="tour-price">
          <span>Book now!</span>
        </p>
        <button><div><WhatsApp /></div> Contact via Whatsapp</button>
      </div>
    </div>
  );
};

export default TourContainer;