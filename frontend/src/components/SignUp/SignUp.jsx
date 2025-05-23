import React, { useState } from 'react';
import { signup as signupAPI } from '../../api/signup';
import { login as loginAPI } from '../../api/login';
import { profilepic as profilepicAPI } from '../../api/profilepic';
import './SignUp.css'; 

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const result = await signupAPI(username, password);
      const loginResult = await loginAPI(username, password);
      
      // Guardar token en localStorage
      if (loginResult.token) {
        localStorage.setItem('token', loginResult.token);
      }
      
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
  
  function hideSignup() {
    const signupContainer = document.querySelector('.signupInput-container');
    signupContainer.style.display = 'none'; 
  }
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
    <form onSubmit={handleSignup}>
    <div className='close' onClick={hideSignup}><span className="material-symbols-outlined">close</span></div>
      <p className='input-text'>Create your account</p>
  
      <div className='input-group'>
        <label>Username:</label>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
  
      <div className='input-group'>
  <label>Password:</label>
  <div className="password-wrapper">
    <input
      type={showPassword ? "text" : "password"}
      placeholder="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <span
      className="toggle-password"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? "visibility_off" : "visibility"}
    </span>
  </div>
</div>

  
      <div className="input-group ">
      <label>Profile picture:</label>
        <input
        type="file"
        accept="image/*"
        onChange={(e) => setSelectedFile(e.target.files[0])}
        id="fileInput"
        style={{ display: 'none' }}
        />
      <label htmlFor="fileInput" className="custom-file-button">Choose file</label>
      </div>

      <div className="button-group">
        <button type="submit" className="submit-btn">Create Account!</button>
        <button type="button" onClick={displaylogin} className="login-btn">I already have an account</button>
      </div>
    </form>
    <div className='outclick' onClick={hideSignup}></div>
    </>
  );  
};

export default SignUp;