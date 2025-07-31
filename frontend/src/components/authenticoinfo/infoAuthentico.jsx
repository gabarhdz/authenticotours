import React from 'react'
import './infoAuthentico.css'
import AuthenticoImg from '../imagenes/authenticotours.jpg'

const Authentico = () => {
  return (
    <div className="authentico-card">

      <img src={AuthenticoImg} alt="Authentico Tours" className="authentico-img" />

      <div className="authentico-info">

        <p className="auth-title">About:</p>
        <div className="auth-description">
          <p>Autentico Tours is a family business that offers personalized tours in Costa Rica. 
            We are committed to providing our clients with the best experience possible,
            and we take pride in our attention to detail and customer service.</p>
        </div>

        <div className="location">
          <span className="material-symbols-outlined">location_on</span>
          <p>Located in Brasilito, Santa Cruz, Guanacaste</p>
        </div>

        <div className="since">        
        <span class="material-symbols-outlined">calendar_month</span>
        <p>Doing tours since 2011</p>
        </div>

      </div>
    </div>
  )
}

export default Authentico
