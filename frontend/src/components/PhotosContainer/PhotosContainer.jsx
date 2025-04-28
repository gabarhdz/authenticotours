import React from 'react'
import './PhotosContainer.css'
import WhatsApp from '../logos/whastapp'

const PhotosContainer = ({photos,tour_name}) => {

  return (
    <span className='photos-container-main'>
      <h2>Tour's photos</h2>
        {photos.length > 0 ? (
          <div className="photos-container">
            {photos.map((photo, index) => (
              <div className="photo-card" key={photo.id}>
              <img key={index} src={photo.URL} alt={`Tour photo ${index + 1}`} className="tour-photo"  />
              <div className="photo-caption">{photo.ALT}</div>
              </div>
            ))}
          </div>
        ) : (
          <p>No hay fotos disponibles para este tour.</p>
        )}
        <button><div className="whats"><WhatsApp /></div><a target='_blank' href={`https://wa.me/50661392424?text=Hi,%20I%20saw%20in%20autenticotours.com%20the%20${tour_name}%20I%20want%20to%20know%20more%20about%20it!,%20could%20you%20send%20me%20more%20info?`}>Contact me</a></button>
    </span>
  )
}

export default PhotosContainer