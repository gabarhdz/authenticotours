import React from 'react'
import './PhotosContainer.css'

const PhotosContainer = ({photos}) => {

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
    </span>
  )
}

export default PhotosContainer