import {React,useEffect,useState} from 'react'
import Header from '../../components/Header/Header'
import Carrousel from '../../components/Carrousel/Carrousel'
import TourContainer from '../../components/TourContainer/TourContainer'

const Home = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/media/index');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const indexPhotos = await response.json();

        // Extraer solo los valores de la propiedad "URL"
        const extractedUrls = indexPhotos.map(photo => photo.URL);
        setUrls(extractedUrls);
        console.log(extractedUrls);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
    <Header/>
    <Carrousel images={urls}/>
    <TourContainer/>
    <TourContainer/>
    <TourContainer/>
    </>
  )
}

export default Home