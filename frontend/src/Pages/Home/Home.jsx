import {React,useEffect,useState} from 'react'
import Header from '../../components/Header/Header'
import Carrousel from '../../components/Carrousel/Carrousel'
import TourContainer from '../../components/TourContainer/TourContainer'

const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/media/index');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const indexPhotos = await response.json();
        console.log(indexPhotos); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])


  return (
    <>
    <Header/>
    <Carrousel/>
    <TourContainer/>
    <TourContainer/>
    <TourContainer/>
    </>
  )
}

export default Home