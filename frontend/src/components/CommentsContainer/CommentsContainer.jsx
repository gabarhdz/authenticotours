import {React,useEffect,useState} from 'react'
import './CommentsContainer.css'
import ATVtour from '../imagenes/atv.jpg'
import Comments from '../Comments/Comments'
const CommentsContainer = ({tour}) => {
    const[tourComments, setTourComments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch(`http://127.0.0.1:8000/api/comments/${tour}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const tourComments = await response.json();
        console.log(tourComments);
        setTourComments(tourComments);
      }catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  },[])
  return (
    <>
    <p id='comments-title'>
      Comments
    </p>
    <hr /> 
    <span className='comments-container'>
      <p>
        Publish a comment!  
      </p>
      <span>.</span>
      <span className={'comment'}>{tourComments.map((comment, index) => (
        <Comments 
        key={index} 
        title={comment.title} 
        text={comment.text} 
        profile_pic={`http://127.0.0.1:8000/${comment.user.profile.profile_pic}`} 
        author={comment.user.username} 
        characteristics={comment.characterisitcs}
        rating={comment.calification}
        />
        ))}</span>
    </span>
    </>
  )
}

export default CommentsContainer