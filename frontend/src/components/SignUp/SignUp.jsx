import React, { useState } from 'react';
import { signup as signupAPI } from '../../api/signup'; // Renombramos la importación
import { login as loginAPI } from '../../api/login';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const result = await signupAPI(username, password);
      console.log('Usuario registrado con éxito:', result);
      const loginResult = await loginAPI(username, password);
      console.log('Usuario logueado con éxito:', loginResult);


    } catch (error) {
      console.error('Error en registro:', error.message);
    }
  };

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
        <button type="submit">Create Account!</button>
      </span>
    </form>
  );
};

export default SignUp;
