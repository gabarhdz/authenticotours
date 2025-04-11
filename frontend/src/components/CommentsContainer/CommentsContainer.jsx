import React, { useEffect, useState } from 'react';
import './CommentsContainer.css';
import Comments from '../Comments/Comments';
import Summarize from '../Summarize/Summarize';

const CommentsContainer = ({ tour }) => {
  const [tourComments, setTourComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/comments/${tour}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTourComments(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [tour]);

  // Calcula el promedio de calificación, o muestra "N/A" si no hay comentarios
  const computedAverage =
    tourComments.length > 0
      ? (tourComments.reduce((acc, comment) => acc + comment.calification, 0) / tourComments.length).toFixed(1)
      : 'N/A';

  return (
    <>
      <p id='comments-title'>Comments</p>
      <hr /> 
      <span className='comments-container'>
        <p>Publish a comment!</p>
        <span>
          {/* Se pasa la cantidad de comentarios como "comment" */}
          <Summarize average={computedAverage} comment={tourComments.length} />
        </span>
        <span className='comment'>
          {tourComments.map((comment, index) => (
            <Comments 
              key={index} 
              title={comment.title} 
              text={comment.text} 
              profile_pic={`http://127.0.0.1:8000/${comment.user.profile.profile_pic}`} 
              author={comment.user.username} 
              characteristics={comment.characterisitcs}
              rating={comment.calification}
            />
          ))}
        </span>
      </span>
    </>
  );
};

export default CommentsContainer;
