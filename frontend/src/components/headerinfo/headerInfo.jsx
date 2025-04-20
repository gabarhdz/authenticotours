import React from 'react'
import './headerInfo.css'
import WhatsApp from '../logos/whastapp'

const HeaderInfo = () => {
  return (
    <>
    <div className="container">
    <h1 className="title"> By Marizio</h1>
    <h2 className="subtitle">Authentic Costa Rica Tours</h2>
    <h5><span class="material-symbols-outlined">location_on</span>Brasilito Santa Cruz Guanacaste</h5>
    <div id="tours-infoHeader">
        <div className="some-tours">
            <a href="#tours"><p>Know more about the tours</p> </a>
        </div>
        <button><div className="whats"><WhatsApp /></div><a target='_blank' href={`https://wa.me/50661392424?text=Hi,%20I%20saw%20the%20page%20autenticotours%20I%20want%20to%20know%20more%20about%20it!,%20could%20you%20send%20me%20more%20info?`}>Contact me</a></button>
    </div>
    </div>

    </>
  )
}

export default HeaderInfo