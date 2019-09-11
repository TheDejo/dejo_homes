import React, {Component} from 'react';
// import ReactDOM from 'react-dom';

class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Adam',
      showFilter: false, // new
    }
    this.neighborhoods = this.neighborhoods.bind(this)
    this.houseTypes = this.houseTypes.bind(this)
    this.beds = this.beds.bind(this)
    this.bath = this.bath.bind(this)
    this.showFilter = this.showFilter.bind(this) //new
    this.closeFilter = this.closeFilter.bind(this) //new
  }

  // new
  showFilter(event) {
    event.preventDefault();
    this.setState({showFilter: true}, () => {
      document.addEventListener('click',this.closeFilter)
    });
  }
  closeFilter(event) {
    if (!this.dropMenu.contains(event.target)) {
    this.setState({showFilter: false}, () => {
      document.removeEventListener('click',this.closeFilter)
      });
    }
  }
  componentWillMount() {
    this.props.populateAction()
  }
  neighborhoods() {
    if(this.props.globalState.populateFormsData.neighborhoods !== undefined) {
      var {neighborhoods} = this.props.globalState.populateFormsData
      console.log(neighborhoods);
      return neighborhoods.map((item) => {
        return (
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }
  houseTypes() {
    if(this.props.globalState.populateFormsData.houseTypes !== undefined) {
      var {houseTypes} = this.props.globalState.populateFormsData
      console.log(houseTypes);
      return houseTypes.map((item) => {
        return (
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }
  beds() {
    if(this.props.globalState.populateFormsData.beds !== undefined) {
      var {beds} = this.props.globalState.populateFormsData
      console.log(beds);
      return beds.map((item) => {
        return (
          <option key={item} value={item}>{item}+ br</option>
        )
      })
    }
  }
  bath() {
    if(this.props.globalState.populateFormsData.bath !== undefined) {
      var {bath} = this.props.globalState.populateFormsData
      console.log(bath);
      return bath.map((item) => {
        return (
          <option key={item} value={item}>{item}+ ba</option>
        )
      })
    }
  }

render () {
  return (
    <section id="filter">
    <button onClick={this.showFilter}> Filter </button>
      {
        this.state.showFilter //new
          ? ( //new
              <div className="inside" ref={(element) => {this.dropMenu = element;}}>
                <span className='title'>City</span>
                <select name="neighborhood" className="filter-neighborhood" onChange={this.props.change}>
                  <option value='All'>All</option>
                    {this.neighborhoods()}
                </select>
                <span className='title'>Type</span>
                <select name="houseType" className="filter-houseType" onChange={this.props.change}>
                  <option value='All'>All</option>
                  {this.houseTypes()}
                </select>
                <span className='title'>Bedrooms</span>
                <select name="bedrooms" className=" filter-rooms" onChange={this.props.change}>
                  {this.beds()}
                </select>
                <span className='title'>Baths</span>
                <select name="baths" className="filter-baths" onChange={this.props.change}>
                  {this.bath()}
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
            )
            : (
              null
            )
      }
    </section>
  );
}
}
export default Filter;
