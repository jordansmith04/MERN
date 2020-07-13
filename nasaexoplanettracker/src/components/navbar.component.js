import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">NASA Exoplanet Tracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Exoplanets</Link>
          </li>
          <li className="navbar-item">
          <Link to="/pictures" className="nav-link">Daily Picture</Link>
          </li>
          <li className="navbar-item">
          <Link to="/quotes" className="nav-link">Inspirational Quotes</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}