import React from 'react';

function Listings() {
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
            <select name="sort-by" className="sort-by">
              <option value="price-ascending">Highest Price</option>
              <option value="price-ascending">Lowest Price</option>
            </select>
            <div className="view">
              <i className="fa fa-list-ul"></i>
              <i className="fa fa-th"></i>
            </div>
          </div>
        </section>

        <section className="list-results">
          <div className="list">
            <div className="list-img">
              <span className="address">Address</span>
              <div className="details">
                <div className="user-img"></div>
                <div className="user-details">
                  <span className="user-name">Marcus Aurelius</span>
                  <span className="post-date">08/10/2019</span>
                </div>
                <div className="list-details">
                  <div className="floor-space">
                    <i className="fa fa-home"></i>
                      <span>2500 ft&sup2;</span>
                  </div>
                  <div className="bedrooms">
                    <i className="fa fa-bed"></i>
                      <span>3 br</span>
                  </div>
                  <div className="baths">
                    <i className="fa fa-bath"></i>
                      <span>2 ba</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <span>$1450 / mo</span>
              <span><i className="fa fa-map-marker"></i>Oakville,MO</span>
            </div>
          </div>
        </section>

        <section className="pagination">
          <ul className="pagination-numbers">
            <li>Prev</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>Next</li>
          </ul>
        </section>

      </section>
  );
}

export default Listings;
