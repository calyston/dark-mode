import React, { useState, useEffect } from 'react';
import toggleon from './toggle-on.png';
import toggleoff from './toggle-off.png';
import './App.css';

function Header() {
  const [theme, setTheme] = useState('light-mode');
  const toggleButton = document.getElementById('toggle');

  const toggleTheme = () => {
    if (theme === 'light-mode') {
      setTheme('dark-mode')
      toggleButton.src = toggleon
    } else {
      setTheme('light-mode')
      toggleButton.src = toggleoff
    }
  }
  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  return (
    <header>
      <nav>
        <section className="nav-container">
          <h3>Dark Mode</h3>
          <button className="toggle-button" onClick={toggleTheme}><img id="toggle" src={toggleoff} alt="toggle" /></button>
        </section>
      </nav>
    </header>
  )
}


export default Header;