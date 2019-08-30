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
      listingsData,
      min_price: 0,
      max_price: 3000000,
      min_square_feet: 0,
      max_square_feet:10000,
      pool:false,
      finished_basement:false,
      two_car_garage:false,
    }
    this.change = this.change.bind(this)
  }
  change(event) {
    var name = event.target.name;
    var value = (event.target.type === "checkbox") ? event.target.checked :event.target.value;

    this.setState ({
      [name]:value
    }, () => {
      console.log(this.state);
    })
  }
// function App() {
render () {
  return (
    <div>
      <Header/>
      <section id='content-area'>
        <Filter change={this.change} globalState={this.state}/>
        <Listings listingsData={this.state.listingsData}/>
      </section>
    </div>
  );
}
}
export default App;
const root = document.getElementById('root');
ReactDOM.render(<App />,root);
