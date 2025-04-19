import React, { useEffect, useState } from 'react';
import './CommentsContainer.css';
import Comments from '../Comments/Comments';
import Summarize from '../Summarize/Summarize';
import { login } from '../../api/login';
import CommentInput from '../CommentInput/CommentInput';
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';

const CommentsContainer = ({ tour }) => {
  const [tourComments, setTourComments] = useState([]);
  const [token, setToken] = useState(null); 
  
  useEffect(() => {
    // Verificar si hay un token en localStorage al cargar el componente
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

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

  const calificationsTotal = tourComments.map((comment) => comment.calification);
  
  const showpublish = () => {
    // Verificar si hay token en localStorage en lugar de usar el estado
    const storedToken = localStorage.getItem('token');
    
    if(storedToken){
      const commentContainer = document.querySelector('.commentInput-container');
      commentContainer.style.display = 'block'; 
    } else {
      const loginContainer = document.querySelector('.signupInput-container');
      loginContainer.style.display = 'block'; 
    }
  };

  return (
    <div id="comments-section">
      <p id='comments-title'>Comments</p>
      <hr /> 

      <p>Publish a comment!</p>
      {
        tourComments.length !== 0 ?
        <>
          <Summarize average={computedAverage} comment={tourComments.length} califications={calificationsTotal} />
          <button onClick={showpublish}>
            <span className='comment-button'>Publish</span>
          </button>
          <div className='commentInput-container'>
            <CommentInput tour={tour}/>
          </div>
          <div className='signupInput-container'>
            <SignUp />
          </div>
          <div className='loginInput-container'>
            <LogIn />
          </div>
        </>
        : null
      }
      <span className='comments-container'>
        <span className='comment'>
          {tourComments.map((comment) => (
            <Comments 
              key={comment.id}
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
    </div>
  );
};

export default CommentsContainer;