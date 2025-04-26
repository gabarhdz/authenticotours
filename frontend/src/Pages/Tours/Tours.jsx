import React from 'react'
import { useParams } from 'react-router-dom';
import './Tours.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';

const Tours = () => {
  const { slug } = useParams();
  console.log(slug)
  tourName = slug.replace(/-/g, ' ').toUpperCase()

  return (
    <>
    <Header />
    <Footer />
    </>
  )
}

export default Tours