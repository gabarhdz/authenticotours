import React, { useState } from 'react';
import { signup as signupAPI } from '../../api/signup'; // Renombramos la importación
import { login as loginAPI } from '../../api/login';
import { profilepic as profilepicAPI } from '../../api/profilepic';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);


  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const result = await signupAPI(username, password);
      const loginResult = await loginAPI(username, password);
      const putProfilePicture = await profilepicAPI(selectedFile)
      const commentContainer = document.querySelector('.commentInput-container')
      commentContainer.style.display = 'block'
      const signupContainer = document.querySelector('.signupInput-container');
      signupContainer.style.display = 'none'; 

    } catch (error) {
      console.error('Error en registro:', error.message);
    }
  };

  const displaylogin = () => { 
    
    const signupContainer = document.querySelector('.signupInput-container');
      signupContainer.style.display = 'none'; 
    const loginContainer = document.querySelector('.loginInput-container');
    loginContainer.style.display = 'block'; 

  }


  return (
    <form onSubmit={handleSignup}>
      <span>
        <p>Create your account</p>
        <div>
          <p>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </p>
        </div>
        <div>
          <p>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>
        </div>
        <div>
          <p>Profile picture</p>
          <input type="file" accept="image/*" onChange={(e) => setSelectedFile(e.target.files[0])} />
        </div>
        <button type="submit">Create Account!</button><button onClick={displaylogin}>Already have an acount?</button>
      </span>
    </form>
  );
};

export default SignUp;
