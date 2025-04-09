import React from 'react'
import './CommentsContainer.css'
import ATVtour from '../imagenes/atv.jpg'
import Comments from '../Comments/Comments'
const CommentsContainer = () => {
  return (
    <>
    <Comments title={'So Good'} text={'lorem ipsum'} profile_pic={ATVtour}/>
    </>
  )
}

export default CommentsContainer