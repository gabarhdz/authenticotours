import React from 'react'

const PhotosContainer = ({photos}) => {
  return (
    <span>
        {photos.map((photo, index) => (
            <img key={index} src={photo} alt={`Photo ${index + 1}`} className="photo" />
        ))}
    </span>
  )
}

export default PhotosContainer