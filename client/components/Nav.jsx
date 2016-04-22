import React from 'react';
import Search from './Search.jsx';

const Nav = ({ handleSearch, searching }) => {
  const handleLogin = function handleLogin() { window.location = '/login'; };
  const handleLogout = function handleLogout() { window.location = '/logout'; };

  return (
    <nav id="nav-bar" className="grid">
      <div id="logo-container">
        <div id="logo" className="col-3-12">FRANKIE</div>
      </div>
      <div id="search-container" className="col-6-12">
        <Search handleSearch = {handleSearch} searching={searching} />
      </div>
      <div id="account-actions-container" className="col-3-12">
        <button onClick={handleLogin}>{'Sign in'}</button>
        <button onClick={handleLogout}>{'Sign out'}</button>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  handleSearch: React.PropTypes.func.isRequired,
  searching: React.PropTypes.bool.isRequired,
};

export default Nav;
