import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { specificTour } from '../../api/specifictour';
import './Tours.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SpecificInfoTour from '../../components/SpecificInfoTour/SpecificInfoTour';
import PhotosContainer from '../../components/PhotosContainer/PhotosContainer';
import CommentsContainer from '../../components/CommentsContainer/CommentsContainer';

const Tours = () => {
  const { slug } = useParams();
  const [tourData, setTourData] = useState(null);
  const [commentName, setCommentName] = useState('');

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const tourName = slug.replace(/-/g, ' ').toUpperCase();
        const data = await specificTour(tourName);
        setTourData(data);
        setCommentName(data.tour_name);
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
      <div>
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
      </div>
      <div>
        <PhotosContainer photos={tourData ? tourData.photos : []} />
      </div>
      <div>
        {commentName ? (
          <CommentsContainer tour={commentName} />
        ) : (
          <p>Cargando comentarios...</p>
        )}
      </div>

      
      <Footer />
    </>
  );
};

export default Tours;
