import React, {Component} from 'react';
// import ReactDOM from 'react-dom';

class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Adam',
    }
    this.loopListings = this.loopListings.bind(this)
  }
loopListings () {
  const {listingsData} = this.props

  if(listingsData === undefined || listingsData.length === 0) {
    return "No results found"
  }

  return listingsData.map ((listing, index) => {
    return (<div className="col" key={index}>
      <div className="list">
        <div className="list-img" style={{background: `url("${listing.image}") no-repeat center center`}}>
          <span className="address">{listing.address}</span>
          <div className="details">
            <div className="col">
              <div className="user-img"></div>
            </div>
            <div className='col-2'>
              <div className="user-details">
                <span className="user-name">Mark Aurelius</span>
                <span className="post-date">08/10/2019</span>
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
  })
}
// function Listings() {
render () {
    return (
      <section id="listings">
        <section className="search-area">
          <div className="close-button">
            <i className="fa fa-times"></i>
          </div>
          <input type='text' name="search" placeholder="Search"/>
        </section>

        <section className="sort">
          <div className='main-results'>
            390 results found
          </div>
          <div className="sort-options">
            <select name="sort_by" className="sort_by" onChange={this.props.change}>
              <option value="price-descending">Lowest Price</option>
              <option value="price-ascending">Highest Price</option>
            </select>
            <div className="view">
              <i className="fa fa-list-ul"></i>
              <i className="fa fa-th"></i>
            </div>
          </div>
        </section>

        <section className="list-results">

          {this.loopListings()}

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

      </section>
  );
}
}

export default Listings;
