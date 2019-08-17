import React from 'react';

function Header() {
  return (
      <header>
        <div className="logo">HOMEble</div>
        <nav>
          <a href="#">Search</a>
          <a href="#">About</a>
          <a href="#">Login</a>
          <a href="#" className="signup-button">Sign Up</a>
        </nav>
      </header>
  );
}

export default Header;
