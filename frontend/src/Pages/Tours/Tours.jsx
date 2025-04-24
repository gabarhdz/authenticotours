import React from 'react'
import { useParams } from 'react-router-dom';


import Header from '../../components/Header/Header'

const Tours = () => {
  const { slug } = useParams();
  console.log(slug)
  console.log(slug.replace(/-/g, ' ').toUpperCase())

  return (
    <>
    <Header />
    </>
  )
}

export default Tours