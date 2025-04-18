import React from 'react';
import './Header.css';

const Header = () => {

function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
  }
  function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    }
  return (
    <>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
    <nav>
        <ul>
            <li><a href="#">Authenticotours</a></li>
            <li className='hideOnMobile'><a href="#">Activities</a></li>
            <li className='hideOnMobile'><a href="#">About</a></li>
            <li className='hideOnMobile'><a href="#">Reviews</a></li>
            <li className='hideOnMobile'><a href="#">Contact</a></li>
            <li className='hideOnMobile'><a href="#">EN/ES</a></li>
            <li className='hideOnMobile'><a href="#">Log in</a></li>
            <li className='menuButton' onClick={showSidebar}><a href="#"><span class="material-symbols-outlined">menu</span></a></li>
        </ul>
        
        <ul className="sidebar">
            <li onClick={hideSidebar}><a><span class="material-symbols-outlined">close</span></a></li>
            <li><a href="#">Authenticotours</a></li>
            <li><a href="#">Activities</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">EN/ES</a></li>
            <li className='login'><a href="#">Log in</a></li>
        </ul>
    </nav>
    </>
  )
}

export default Header