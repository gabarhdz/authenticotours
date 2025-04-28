import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(() => localStorage.getItem('token'));

  useEffect(() => {
    // Al montar, verificamos si hay un token en localStorage
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (token) {
      // Logout: removemos token y actualizamos estado
      localStorage.removeItem('token');
      setToken(null);
    } else {
      // Login: redirigimos a la página de login
      navigate('/login');
    }
  };

  const showSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) sidebar.style.display = 'flex';
  };

  const hideSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) sidebar.style.display = 'none';
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        rel="stylesheet"
      />
      <nav>
        <ul>
          <li><Link to="/">MarizioTours</Link></li>
          <li className="hideOnMobile"><a href="#tours">Activities</a></li>
          <li className="hideOnMobile"><a href="#about">About</a></li>
          <li className="hideOnMobile"><a href="#comments-section">Reviews</a></li>
          <li className="hideOnMobile"><a href="#">Contact</a></li>
          <li className="hideOnMobile"><a href="#">EN/ES</a></li>
          <li className="hideOnMobile">
            <a
            href="#"
            onClick={e => { e.preventDefault(); handleClick(); }}>
            {token ? 'Log out' : 'Log in'}
            </a>
           </li>
          <li className="menuButton" onClick={showSidebar}>
            <a href="#"><span className="material-symbols-outlined">menu</span></a>
          </li>
        </ul>

        <ul className="sidebar">
          <li onClick={hideSidebar}>
            <a href="#"><span className="material-symbols-outlined">close</span></a>
          </li>
          <li><a href="#">MarizioTours</a></li>
          <li><a href="#tours">Activities</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#comments-section">Reviews</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">EN/ES</a></li>
          <li className="login">
          <a
            href="#"
            onClick={e => { e.preventDefault(); handleClick(); }}
          >
            {token ? 'Log out' : 'Log in'}
          </a>
        </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
