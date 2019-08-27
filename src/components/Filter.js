import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Adam',
    }
  }
// function Filter() {
render () {
  return (
    <section id="filter">
      <div className="inside">
          <h1>Filters</h1>
        <select name="neighborhood" className="filter-neighborhood">
          <option>Oakville</option>
        </select>
        <select name="housetype" className="filter-housetype">
          <option>Single Story</option>
        </select>
        <select name="rooms" className=" filter-rooms">
          <option>2 br</option>
        </select>
        <select name="baths" className="filter-baths">
          <option>1 ba</option>
        </select>
        <div className="filter-price">
          <span className="title">Price</span>
            <input type="text" name="min-price" className="min-price" placeholder="min price"/>
            <input type="text" name="max-price" className="max-price" placeholder="max price"/>
        </div>
        <div className="filter-square-feet">
          <span className="title">Square Feet</span>
            <input type="text" name="min-square-feet" className="min-square-feet" placeholder="min sqft"/>
            <input type="text" name="max-square-feet" className="max-square-feet" placeholder="max sqft"/>
        </div>
        <div id="bottom-filters" className="filter-extras">
          <span className="title">
            Extras
          </span>
          <label htmlFor="extras">
            <span>Pool</span>
            <input name="extras" value="pool" type="checkbox"/>
          </label>
          <label htmlFor="extras">
            <span>Finished Basement</span>
            <input name="extras" value="finished-basement" type="checkbox"/>
          </label>
          <label htmlFor="extras">
            <span>Two Car Garage</span>
            <input name="extras" value="two-car-garage" type="checkbox"/>
          </label>
        </div>
      </div>
    </section>
  );
}
}
export default Filter;

