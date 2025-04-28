import React, { useState, useEffect } from 'react'
import './SpecificInfoTour.css'

const SpecificInfoTour = ({ detailed_description, itinerary, tour_description, recommendations }) => {
  const [content, setContent] = useState(tour_description);
  const [active, setActive] = useState(1); 

  useEffect(() => {
    if (active === 1) {
      setContent(tour_description);
    } else if (active === 2) {
      setContent(detailed_description);
    } else if (active === 3) {
      setContent(itinerary);
    } else if (active === 4) {
      setContent(recommendations);
    }
  }, [active, tour_description, detailed_description, itinerary, recommendations]); 

  return (
    <div className="specificInfoTour">
      <div className='tourCategorieContainer'>
        <button 
          onClick={() => setActive(1)} 
          className={`tourButton ${active === 1 ? 'activeButton' : ''}`}
        >
          General Description
        </button>
        <button 
          onClick={() => setActive(2)} 
          className={`tourButton ${active === 2 ? 'activeButton' : ''}`}
        >
          Detailed Description
        </button>
        <button 
          onClick={() => setActive(3)} 
          className={`tourButton ${active === 3 ? 'activeButton' : ''}`}
        >
          Itinerary
        </button>
        <button 
          onClick={() => setActive(4)} 
          className={`tourButton ${active === 4 ? 'activeButton' : ''}`}
        >
          Recommendations
        </button>
      </div>
      <div className='infoContainer'>
        {Array.isArray(content) ? (
          content.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
  
}

export default SpecificInfoTour;
