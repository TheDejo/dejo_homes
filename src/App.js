import React from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import Listings from './components/Listings';
import './App.css';
import './Header.css';
import './Filter.css';
import './Listings.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <section id='content-area'>
        <Filter/>
        <Listings/>
      </section>
    </div>
  );
}
export default App;
