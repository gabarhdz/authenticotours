// Modificación para LogIn.jsx
import React from 'react'
import './LogIn.css'
import { login as loginAPI} from '../../api/login'

const LogIn = () => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
              const loginResult = await loginAPI(username, password);
              console.log('Usuario logueado con éxito:', loginResult);
              
              // Guardar token en localStorage
              if (loginResult.token) {
                localStorage.setItem('token', loginResult.token);
              }
              
              const loginContainer = document.querySelector('.loginInput-container');
              loginContainer.style.display = 'none'; 
              const commentContainer = document.querySelector('.commentInput-container');
              commentContainer.style.display = 'block'; // Muestra el contenedor del comentario
        
        } catch (error) {
              console.error('Error en registro:', error.message);
        }
    }

    const displaysignup = () => {
      const signupContainer = document.querySelector('.signupInput-container');
      signupContainer.style.display = 'block'; 
      const loginContainer = document.querySelector('.loginInput-container');
      loginContainer.style.display = 'none'; 
    }
    
    function hideLogin() {
      const loginContainer = document.querySelector('.loginInput-container');
      loginContainer.style.display = 'none'; 
    }
    const [showPassword, setShowPassword] = React.useState(false)
  return (
    <>
    <form onSubmit={handleLogin} className="login-form">
    <div className="close" onClick={hideLogin}>
    <span className="material-symbols-outlined">close</span>
    </div>

    <p className="form-title-login">Log In!</p>

    <div className="input-group-login">
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>

    <div className="input-group-login">
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

      <div className="button-group-login">
      <button type="submit" className="submit-btn">Start!</button>
      <button type="button" className="login-btn" onClick={displaysignup}>
        You don't have an account? sign up!
      </button>
      </div>
    </form>
    <div className='outclick' onClick={hideLogin}></div>
    </>
  )
}

export default LogIn