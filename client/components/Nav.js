import React from 'react';
import Search from './Search.jsx';
import Button from 'react-toolbox/lib/button';

const Nav = ({ handleSearch, searching }) => (
  <nav className="navBar">
    <Search handleSearch = {handleSearch} searching={searching} />
    <Button href="/login">{'Sign in'}</Button>
    {' '}
    <Button href="/logout">{'Sign out'}</Button>
  </nav>
);

Nav.propTypes = {
  handleSearch: React.PropTypes.func.isRequired,
  searching: React.PropTypes.bool.isRequired,
};

export default Nav;
