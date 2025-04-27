import React, { useState, useEffect } from 'react'

const SpecificInfoTour = ({ detailed_description, itinerary, tour_description, recommendations }) => {
  const [content, setContent] = useState(tour_description);
  const [active, setActive] = useState(1); // Cambié a 1 para que empiece con general description

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
        <button onClick={() => setActive(1)}>
          General Description
        </button>
        <button onClick={() => setActive(2)}>
          Detailed Description
        </button>
        <button onClick={() => setActive(3)}>
          Itinerary
        </button>
        <button onClick={() => setActive(4)}>
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
  )
}

export default SpecificInfoTour;
