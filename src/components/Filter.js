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
        <select name="neighborhood" className="filter-neighborhood" onChange={this.props.change}>
          <option value='Oakville'>Oakville</option>
          <option value='Kirkwood'>Kirkwood</option>
        </select>
        <select name="housetype" className="filter-housetype" onChange={this.props.change}>
          <option value='Single Story'>Single Story</option>
          <option value='Two Story'>Two Story</option>
        </select>
        <select name="rooms" className=" filter-rooms" onChange={this.props.change}>
          <option value='1'>1 br</option>
          <option value='2'>2 br</option>
          <option value='3'>3 br</option>
          <option value='4'>4 br</option>
        </select>
        <select name="baths" className="filter-baths" onChange={this.props.change}>
          <option value='1'>1 ba</option>
          <option value='2'>2 ba</option>
          <option value='3'>3 ba</option>
          <option value='4'>4 ba</option>
        </select>
        <div className="filter-price">
          <span className="title">Price</span>
            <input type="text" name="min_price" className="min-price" placeholder="min price" value={this.props.globalState.min_price} onChange={this.props.change}/>
            <input type="text" name="max_price" className="max-price" placeholder="max price" value={this.props.globalState.max_price} onChange={this.props.change}/>
        </div>
        <div className="filter-square-feet">
          <span className="title">Square Feet</span>
            <input type="text" name="min_square_feet" className="min-square-feet" placeholder="min sqft" value={this.props.globalState.min_square_feet} onChange={this.props.change}/>
            <input type="text" name="max_square_feet" className="max-square-feet" placeholder="max sqft" value={this.props.globalState.max_square_feet} onChange={this.props.change}/>
        </div>
        <div id="bottom-filters" className="filter-extras">
          <span className="title">
            Extras
          </span>
          <label htmlFor="extras">
            <span>Pool</span>
            <input name="pool" value="pool" type="checkbox" onChange={this.props.change}/>
          </label>
          <label htmlFor="extras">
            <span>Finished Basement</span>
            <input name="finished_basement" value="finished_basement" type="checkbox" onChange={this.props.change}/>
          </label>
          <label htmlFor="extras">
            <span>Two Car Garage</span>
            <input name="two_car_garage" value="two_car_garage" type="checkbox" onChange={this.props.change}/>
          </label>
        </div>
      </div>
    </section>
  );
}
}
export default Filter;
