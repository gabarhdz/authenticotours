import React from 'react'
import './CommentInput.css'

const CommentInput = () => {
    const publishComment = () => {
        // Aquí puedes agregar la lógica para publicar un comentario
        console.log('Publish comment');
    }

  return (
    <div className='comment-input-container'>
            <input type="text" placeholder="Title" className='comment-input' />
            <input type='text' placeholder="Comment" className='title-input' />
    </div>
  )
}

export default CommentInput