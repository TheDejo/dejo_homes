import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Filter from './Filter.js';
import Listings from './Listings.js';
import '../App.css';
import '../Header.css';
import '../Filter.css';
import '../Listings.css';
import listingsData from "./data/listingsData.js";

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Adam',
      listingsData
    }
  }
// function App() {
render () {
  console.log(this.state.listingsData);
  return (
    <div>
      <Header/>
      <section id='content-area'>
        <Filter/>
        <Listings listingsData={this.state.listingsData}/>
      </section>
    </div>
  );
}
}
export default App;
const root = document.getElementById('root');
ReactDOM.render(<App />,root);
