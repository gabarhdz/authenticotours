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
  return (
    <form onSubmit={handleLogin}>
      <span>
        <p>Log In!</p>
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
        <button type="submit">Start!</button><button onClick={displaysignup}>You don't have an acount?</button>
      </span>
    </form>
  )
}

export default LogIn