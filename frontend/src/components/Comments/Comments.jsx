import React from 'react'
import './Comments.css'
import CommentCard from '../CommentCard/CommentCard'
import userPhoto from '../imagenes/defaultUser.png'
import StarRating from '../StarRating/StarRating'
const Comments = ({profile_pic,title,text,author,characteristics,rating}) => {
  return (
    <span className='comment-container'>
       <span>
        <img src={profile_pic} alt="" />
       </span>
       <span>
        <span className='comment-title'>
            <h2>{author}</h2>
            <StarRating stars={rating}/>
            <span className='characteristics'>
              {characteristics.map((characteristic, index) => (
                <div>
                  <CommentCard key={index} name={characteristic.name} />
                </div>
              ))}
            </span>
            <br />
            <h2>{title}</h2>
        </span>
        <p>
            {text }
        </p>
       </span>
    </span>
  )
}

export default Comments