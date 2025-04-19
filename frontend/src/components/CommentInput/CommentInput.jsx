import React, { useState } from 'react';
import './CommentInput.css';
import { comment as  commentAPI } from '../../api/comment';

const characteristicsList = [
  { id: 1, label: 'Good' },
  { id: 2, label: 'Affordable' },
  { id: 3, label: 'Profesional' },
  { id: 4, label: 'Comfortable' },
  { id: 5, label: 'Exciting' },
  { id: 6, label: 'Well-organized' },
  { id: 7, label: 'Relaxing' },
  { id: 8, label: 'Safe' },
];

const CommentInput = ({tour}) => {
  const [calification, setCalification] = useState(3);
  const [selectedChars, setSelectedChars] = useState([]);

const handleCheckboxChange = (id) => {
  if (selectedChars.includes(id)) {
    setSelectedChars(selectedChars.filter((charId) => charId !== id));
  } else {
    setSelectedChars([...selectedChars, id]);
  }
};
  const publishComment = () => {
    console.log('Publicar comentario con:');
    console.log('Características seleccionadas (IDs):', selectedChars);
    const data = commentAPI(
      document.querySelector('.comment-input').value,
      document.querySelector('.title-input').value,
      calification,
      tour,
      selectedChars
    );
    console.log('Comentario:', data);
    alert('Comentario publicado!');
    hideComment()
    window.location.reload()
  };
  function hideComment() {
    const commentContainer = document.querySelector('.commentInput-container');
    commentContainer.style.display = 'none'; 
  }

  return (
  <>
    <form onSubmit={(e) => e.preventDefault()}>
      <div className='comment-input-container'>
      <div className='closeComment' onClick={hideComment}><span class="material-symbols-outlined">close</span></div>
        <input type="text" placeholder="Title" className='comment-input' />
        <input type="text" placeholder="Comment" className='title-input' />

        <div className="checkbox-group">
          <p>Caracteristics:</p>
          {characteristicsList.map(({ id, label }) => (
  <label key={id} className="checkbox-option">
    <input
      type="checkbox"
      value={id}
      checked={selectedChars.includes(id)}
      onChange={() => handleCheckboxChange(id)}
    />
    {label}
  </label>
))}

        </div>

        <div className="range-group">
          <label htmlFor="calification">Calification: {calification}</label>
          <input
            type="range"
            name="calification"
            min="1"
            max="5"
            value={calification}
            onChange={(e) => setCalification(e.target.value)}
            className="calificacion-input"
          />
        </div>

        <button type="submit" onClick={publishComment}>Enviar</button>
      </div>
    </form>
    <div className='outclick' onClick={hideComment}></div>
    </>
  );
};

export default CommentInput;
