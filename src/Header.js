import React from 'react';
import toggleon from './toggle-on.png';
import './App.css';

function Header() {
  return (
    <header>
      <nav>
        <section class="nav-container">
          <img id="logo" src={toggleon} alt="logo" />
        </section>
      </nav>
    </header>
  )
}


export default Header;