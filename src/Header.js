import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import toggleon from './toggle-on.png';
import toggleoff from './toggle-off.png';
import './App.css';

function Header() {
  const [theme, setTheme] = useState('light-mode');

  const toggleTheme = () => {
    if (theme === 'light-mode') {
      setTheme('dark-mode')
    } else {
      setTheme('light-mode')
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