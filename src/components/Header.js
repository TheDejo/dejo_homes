import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Adam',
    }
  }
// function Header() {
render () {
  return (
      <header>
        <div className="logo"><span className="home">HOME</span>ble</div>
        <nav>
          <a href="#">About</a>
          <a href="#">Login</a>
          <a href="#" className="signup-button">Sign Up</a>
        </nav>
      </header>
  );
}
}

export default Header;// import React from 'react';
import React, {Component} from 'react';
// import ReactDOM from 'react-dom';

class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Adam',
    }
  }
// function Header() {
render () {
  return (
      <header>
        <div className='button'>
          <i className="fa fa-bars"></i>
        </div>
        <div className="logo"><span className="home">HOME</span>ble</div>
        <nav>
          <a href="#">About</a>
          <a href="#">Login</a>
          <a href="#" className="signup-button">Sign Up</a>
        </nav>
      </header>
  );
}
}

export default Header;


