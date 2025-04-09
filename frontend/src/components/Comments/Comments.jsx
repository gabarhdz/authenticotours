import React from 'react'
import './Comments.css'
import CommentCard from '../CommentCard/CommentCard'
const Comments = ({profile_pic,title,text}) => {
  return (
    <span className='comment-container'>
       <span>
        <img src={profile_pic} alt="" />
       </span>
       <span>
        <span className='comment-title'>
            <h2>{title}</h2>
            <span>
                <CommentCard name={'good'} />
            </span>
        </span>
        <p>
            {text }
        </p>
       </span>
    </span>
  )
}

export default Comments