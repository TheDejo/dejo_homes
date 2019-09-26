import React, {Component} from 'react';
// import ReactDOM from 'react-dom';

class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Adam',
    }
    this.loopListings = this.loopListings.bind(this)
    this.neighborhoods = this.neighborhoods.bind(this)
    this.houseTypes = this.houseTypes.bind(this)
    this.beds = this.beds.bind(this)
    this.bath = this.bath.bind(this)
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
loopListings () {
  const {listingsData} = this.props
  if(listingsData === undefined || listingsData.length === 0) {
    return "No results found"
  }

  return listingsData.map ((listing, index) => {
    if (this.props.globalState.view === 'grid') { // grid view
      return (
      <div className="col-md-3" key={index}>
        <div className="list">
          <div className="list-img" style={{background: `url("${listing.image}") no-repeat center center`}}>
            <span className="address">{listing.address}</span>
            <div className="details">
              <div className="col-md-3">
                <div className="user-img"></div>
              </div>
              <div className='col-md-9'>
                <div className="user-details">
                  <span className="user-name">Thoreau Realty</span>
                  <span className="post-date">{listing.date}</span>
                </div>
                <div className="list-details">
                  <div className="floor-space">
                    <i className="fa fa-home"></i>
                    <span>{listing.floorSpace} ft&sup2;</span>
                  </div>
                  <div className="bedrooms">
                    <i className="fa fa-bed"></i>
                    <span>{listing.rooms} br</span>
                  </div>
                  <div className="baths">
                    <i className="fa fa-bath"></i>
                    <span>{listing.bath} ba</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-info">
            <span className="price">${listing.price}</span>
            <span className="location"><i className="fa fa-map-marker"></i>{listing.neighborhood},{listing.state}</span>
          </div>
        </div>
      </div>)
      } else { // horizontal view
      return (
      <div className="col-md-12 col-lg-6" key={index}>
        <div className="list">
          <div className="list-img" style={{background: `url("${listing.image}") no-repeat center center`}}>
            <span className="address">{listing.address}</span>
            <div className="details">
              <div className="col-md-3" style={{width:'40%',textAlign:'center',padding:'0px'}}>
                <div className="user-img" style={{height:'70px',width:'70px'}}></div>
              </div>
              <div className='col-md-9' style={{fontSize:'24px',width:'60%'}}>
                <div className="user-details" style={{marginLeft:'0px'}}>
                  <span className="user-name" style={{fontSize:'20px'}}>Thoreau Realty</span>
                  <span className="post-date" style={{fontSize:'20px'}}>{listing.date}</span>
                </div>
                <div className="list-details">
                  <div className="floor-space">
                    <i className="fa fa-home"></i>
                    <span style={{fontSize:'14px',textAlign:'center'}}>{listing.floorSpace} ft&sup2;</span>
                  </div>
                  <div className="bedrooms">
                    <i className="fa fa-bed"></i>
                    <span style={{fontSize:'14px',textAlign:'center'}}>{listing.rooms} br</span>
                  </div>
                  <div className="baths">
                    <i className="fa fa-bath"></i>
                    <span style={{fontSize:'14px',textAlign:'center'}}>{listing.bath} ba</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-info">
            <span className="price">${listing.price}</span>
            <span className="location"><i className="fa fa-map-marker"></i>{listing.neighborhood},{listing.state}</span>
          </div>
        </div>
      </div>)
    }
  })
}
// function Listings() {
render () {
    return (
    <div>
      <section id="filter">
        <div className="inside">
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
          <span className="title">Price</span>
            <input type="text" name="min_price" className="min-price" placeholder="min price" value={this.props.globalState.min_price} onChange={this.props.change}/>
            <input type="text" name="max_price" className="max-price" placeholder="max price" value={this.props.globalState.max_price} onChange={this.props.change}/>
          <span className="title">Square Feet</span>
            <input type="text" name="min_square_feet" className="min-square-feet" placeholder="min sqft" value={this.props.globalState.min_square_feet} onChange={this.props.change}/>
            <input type="text" name="max_square_feet" className="max-square-feet" placeholder="max sqft" value={this.props.globalState.max_square_feet} onChange={this.props.change}/>
          <div id="bottom-filters" className="filter-extras">
            <span className="extras-title">
              Extras
            </span>
            <div className='extras-wrapper'>
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
        </div>
      </section>


      <section id="listings">
        <div className="listing-wrapper">
        <section className="sort">
          <div className='main-results'>
            {this.props.globalState.filteredData.length} results found
          </div>

          <div className="sort-options">
            <select name="sort_by" className="sort_by" onChange={this.props.change}>
              <option value="price-descending">Lowest Price</option>
              <option value="price-ascending">Highest Price</option>
            </select>
            <div className="view">
              <i className="fa fa-list-ul" onClick={this.props.changeView.bind(null,'box')}></i>
              <i className="fa fa-th" onClick={this.props.changeView.bind(null,'grid')}></i>
            </div>
          </div>
        </section>
        <section className="list-results">
          <div className='bottom-row'>
            {this.loopListings()}
          </div>
        </section>
        <section id="pagination">
          <ul className="pages">
            <li>Prev</li>
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>Next</li>
          </ul>
        </section>
        </div>
      </section>
    </div>
  );
}
}

export default Listings;
