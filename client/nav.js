import React from 'react';
import Search from './search.jsx';

const Nav = ({ handleSearch, searching }) => (
  <nav className="navBar">
    <Search handleSearch = {handleSearch} searching={searching} />
  </nav>
);

Nav.propTypes = {
  handleSearch: React.PropTypes.func.isRequired,
  searching: React.PropTypes.bool.isRequired,
};

export default Nav;
