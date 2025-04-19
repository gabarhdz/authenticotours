import React from 'react'
import Carrousel from '../Carrousel/Carrousel'
import WhatsApp from '../logos/whastapp'
import './TourContainer.css'

const TourContainer = ({photos,tour_name,tour_description,min_people,includes,duration}) => {
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
          <p>Min of people: {min_people}</p>
          <p>Includes:{includes}</p>
        </div>

        <p className="tour-description">{tour_description}</p>
        
      </div>
      
      <div className="tour-booking">
        <p className="tour-price">
          <span>Book now!</span>
          
        </p>
        <button><div className="whats"><WhatsApp /></div><a target='_blank' href={`https://wa.me/50661392424?text=Hi,%20I%20saw%20in%20autenticotours.com%20the%20${tour_name}%20I%20want%20to%20know%20more%20about%20it!,%20could%20you%20send%20me%20more%20info?`}>Contact me</a></button>
      </div>
    </div>
  );
};

export default TourContainer;