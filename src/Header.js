import React from 'react';
import toggleon from './toggle-on.png';
import toggleoff from './toggle-off.png';
import './App.css';

function Header() {
  return (
    <header>
      <nav>
        <section className="nav-container">
          <h3>Dark Mode</h3>
          <button className="toggle-button"><img id="toggle" src={toggleoff} alt="toggle" /></button>
        </section>
      </nav>
    </header>
  )
}


export default Header;