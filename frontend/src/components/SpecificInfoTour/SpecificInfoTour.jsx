import React, { useState } from 'react';
import './SpecificInfoTour.css';

const SpecificInfoTour = ({ detailed_description, itinerary, tour_description, recommendations }) => {
  const [active, setActive] = useState(null);

  const toggleActive = (index) => {
    setActive(active === index ? null : index);
  };

  const renderContent = (content) => {
    if (Array.isArray(content)) {
      return content.map((item) => (
        <div key={item.id} className="infoItem">{item.name}</div>
      ));
    } else {
      return <p>{content}</p>;
    }
  };

  return (
    <div className="specificInfoTour">
      <div className="tourCategorieContainer">
        <div className="tourSection">
          <button
            onClick={() => toggleActive(1)}
            className={`tourButton ${active === 1 ? 'activeButton' : ''}`}
          >Description
          </button>
          {active === 1 && <div className="infoContainer">{renderContent(tour_description)}</div>}
        </div>
        <div className="tourSection">
          <button
            onClick={() => toggleActive(3)}
            className={`tourButton ${active === 3 ? 'activeButton' : ''}`}
          >
            Itinerary
          </button>
          {active === 3 && <div className="infoContainer">{renderContent(itinerary)}</div>}
        </div>

        <div className="tourSection">
          <button
            onClick={() => toggleActive(4)}
            className={`tourButton ${active === 4 ? 'activeButton' : ''}`}
          >
            Recommendations
          </button>
          {active === 4 && <div className="infoContainer">{renderContent(recommendations)}</div>}
        </div>
      </div>
    </div>
  );
};

export default SpecificInfoTour;
