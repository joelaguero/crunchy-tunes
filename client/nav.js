import React from 'react';
import Search from './search.jsx';

const Nav = ({ handleSearch, searching }) => (
  <nav className="navBar">
    <Search handleSearch = {handleSearch} searching={searching} />
    <a href="/login">{'Sign in'}</a>
    {' '}
    <a href="/logout">{'Sign out'}</a>
  </nav>
);

Nav.propTypes = {
  handleSearch: React.PropTypes.func.isRequired,
  searching: React.PropTypes.bool.isRequired,
};

export default Nav;
