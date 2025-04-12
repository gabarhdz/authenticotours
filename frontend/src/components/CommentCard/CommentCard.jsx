import React from 'react'
import './CommentCard.css'
const CommentCard = ({name}) => {
  return (
    <div className='comment-card'>
        {name}
    </div>
  )
}

export default CommentCard