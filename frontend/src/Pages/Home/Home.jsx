import { React, useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import HeaderInfo from '../../components/headerinfo/headerInfo';
import Carrousel from '../../components/Carrousel/Carrousel';
import ScrollDown from '../../components/scrolldown/scrollDown';
import Authentico from '../../components/authenticoinfo/infoAuthentico';
import TourContainer from '../../components/TourContainer/TourContainer';
import CommentsContainer from '../../components/CommentsContainer/CommentsContainer';
import Footer from '../../components/footer/footer';
import './Home.css';
import { tours as toursAPI } from '../../api/tours';

const Home = () => {
  const [urls, setUrls] = useState([]);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/media/index');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const indexPhotos = await response.json();
        const extractedUrls = indexPhotos.map(photo => photo.URL);
        setUrls(extractedUrls);
      } catch (error) {
        console.error('Error fetching media:', error);
      }
    };

    const fetchTours = async () => {
      try {
        const tourData = await toursAPI();
        setTours(tourData);
      } catch (error) {
        console.error('Error fetching tours:', error);
      }
    };

    fetchMedia();
    fetchTours();
  }, []);

  return (
    <>
      <Header />
      <div className='inicio-pagina'>
        <div className="info"><HeaderInfo /></div>
      <div className="carrusel"><Carrousel images={urls} /></div>
      </div>
      <ScrollDown />
      <div className="infotours" id="about">
        <Authentico />
      <div id="tours">
      {tours.map((tour) => {
        if (tour.tour_name === "index") return null; // 👈 No mostrar el tour llamado "index"

        const photosURL = tour.photos ? tour.photos.map(photo => photo.URL) : [];
        const includes = tour.includes ? tour.includes.map(include => include.name).join(', ') : '';

        return (
          <TourContainer
            key={tour.id}
            photos={photosURL}
            tour_name={tour.tour_name}
            tour_description={tour.tour_description}
            min_people={tour.min_people}
            duration={tour.duration}
            includes={includes}
          />
        );
      })}
      </div>
      </div>
      <CommentsContainer tour={'index'} />
      <Footer />
    </>
  );
};

export default Home;
