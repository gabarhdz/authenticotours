import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { specificTour } from '../../api/specifictour';
import './Tours.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SpecificInfoTour from '../../components/SpecificInfoTour/SpecificInfoTour';

const Tours = () => {
  const { slug } = useParams();
  const [tourData, setTourData] = useState(null);

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const tourName = slug.replace(/-/g, ' ').toUpperCase();
        const data = await specificTour(tourName);
        setTourData(data);
      } catch (error) {
        console.error('Error fetching tour:', error);
      }
    };

    if (slug) {
      fetchTourData();
    }
  }, [slug]);

  return (
    <>
      <Header />
      <div>
        <h1>{tourData ? tourData.tour_name : 'Cargando...'}</h1>
      </div>
      <hr />
      <span>
      {tourData ? (
        <SpecificInfoTour
          detailed_description={tourData.detailed_description}
          itinerary={tourData.itinereray}
          tour_description={tourData.tour_description}
          recommendations={tourData.recommendations}
        />
      ) : (
        <p>Cargando información del tour...</p>
      )}
      </span>
      
      <Footer />
    </>
  );
};

export default Tours;
