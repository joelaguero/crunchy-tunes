import React from 'react';
import Search from './Search.jsx';

const Nav = ({ handleSearch, searching }) => (
  <nav id="nav-bar" className="grid">
      <div id="logo" className="col-3-12">Frankenstein</div>
      <div id="search-container" className="col-6-12">
        <Search handleSearch = {handleSearch} searching={searching} />
      </div>
      <div id="account-actions-container" className="col-3-12">
        <button href="/login">{'Sign in'}</button>
        <button href="/logout">{'Sign out'}</button>
      </div>
  </nav>
);

Nav.propTypes = {
  handleSearch: React.PropTypes.func.isRequired,
  searching: React.PropTypes.bool.isRequired,
};

export default Nav;
