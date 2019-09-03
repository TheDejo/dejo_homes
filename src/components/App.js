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
      neighborhood: 'All',
      houseType: 'All',
      bedrooms: 1,
      baths: 1,
      min_price: 0,
      max_price: 3000000,
      min_square_feet: 0,
      max_square_feet:10000,
      pool:false,
      finished_basement:false,
      two_car_garage:false,
      filteredData: listingsData,
      populateFormsData: "",
      sort_by: 'Lowest Price',
      view: 'grid'
    }
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForms = this.populateForms.bind(this)
    this.changeView = this.changeView.bind(this)
  }
  componentWillMount() {
    var listingsData = this.state.listingsData.sort((a,b) => {
      return a.price - b.price
    })

    this.setState({
      listingsData
    })
  }
  change(event) {
    var name = event.target.name;
    var value = (event.target.type === "checkbox") ? event.target.checked :event.target.value;

    this.setState ({
      [name]:value
    }, () => {
      console.log(this.state);
      this.filteredData()
    })
  }
  changeView(viewName) {
    this.setState ({
      view: viewName
    })
  }
  filteredData() {
    var newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price
          && item.price <= this.state.max_price
          && item.floorSpace >= this.state.min_square_feet
          && item.floorSpace <= this.state.max_square_feet
          && item.rooms >= this.state.bedrooms
          && item.bath >= this.state.baths
    })
    if (this.state.neighborhood !== 'All') {
      newData = newData.filter((item) => {
        return item.neighborhood === this.state.neighborhood
      })
    }
    if (this.state.houseType !== 'All') {
      newData = newData.filter((item) => {
        return item.houseType === this.state.houseType
      })
    }
    if(this.state.sort_by === 'price-descending') {
      newData = newData.sort((a,b) => {
        return a.price - b.price
      })
    }
    if(this.state.sort_by === 'price-ascending') {
      newData = newData.sort((a,b) => {
        return b.price - a.price
      })
    }
    this.setState({
      filteredData: newData
    })
  }
  populateForms() {
    // neighborhood
    var neighborhoods = this.state.listingsData.map((item) => {
      return item.neighborhood
    })
    neighborhoods = new Set(neighborhoods)
    neighborhoods = [...neighborhoods]

    neighborhoods = neighborhoods.sort()

    // houseType
    var houseTypes = this.state.listingsData.map((item) => {
      return item.houseType
    })
    houseTypes = new Set(houseTypes)
    houseTypes = [...houseTypes]

    houseTypes = houseTypes.sort()

    // rooms
    var beds = this.state.listingsData.map((item) => {
      return item.rooms
    })
    beds = new Set(beds)
    beds = [...beds]

    beds = beds.sort()

    // baths
    var bath = this.state.listingsData.map((item) => {
      return item.bath
    })
    bath = new Set(bath)
    bath = [...bath]

    bath = bath.sort()

    this.setState ({
      populateFormsData: {
        neighborhoods,
        houseTypes,
        beds,
        bath
      },
    },() => {
        console.log(this.state);
    })
  }

render () {
  return (
    <div>
      <Header/>
      <section id='content-area'>
        <Filter change={this.change} globalState={this.state} populateAction={this.populateForms}/>
        <Listings listingsData={this.state.filteredData} change={this.change} globalState={this.state} changeView={this.changeView}/>
      </section>
    </div>
  );
}
}
export default App;
const root = document.getElementById('root');
ReactDOM.render(<App />,root);
