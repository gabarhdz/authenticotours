import React from 'react';
import './StarRating.css'; 
import { VscStarFull } from "react-icons/vsc";

const StarRating = ({ stars = 5 }) => {
  const maxStars = 5; // o cambialo si querés otro máximo
  const starArray = Array.from({ length: stars }, (_, i) => i);

  return (
    <div className='container-star'>
      {starArray.map((_, index) => (
        <span key={index} className='star' ><VscStarFull /></span>
      ))}
    </div>
  );
};



export default StarRating;