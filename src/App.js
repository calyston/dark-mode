import React from 'react';
import Header from './Header';
import Article from './Article';
import data from './data';
import toggleon from './toggle-on.png';
import toggleoff from './toggle-off.png';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <section className="page-container">
        {data.map((item) => {
          return <Article key={item.id} {...item} />
        })}
      </section>
    </div>
  );
}

export default App;
