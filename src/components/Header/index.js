import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="Header">
      <NavLink key="home" className="Header-link left" exact to="/" activeClassName="active">Home</NavLink>
      <NavLink key="request-an-image" className="Header-link right" exact to="/request-an-image" activeClassName="active">Request an image</NavLink>
      <NavLink key="available-images" className="Header-link left" exact to="/available-images" activeClassName="active">Available images</NavLink>
    </nav>
  );
}

export default Header;