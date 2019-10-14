import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <nav>
          <h1 className="nav-header">React Router Mini</h1>

          <div className="nav-links">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>

          </div>

        </nav>



      </div>
    </div>
  );
};

export default Navigation;
