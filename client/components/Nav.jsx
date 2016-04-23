import React from 'react';
import Search from './Search.jsx';

const Nav = ({ handleSearch, searching, user }) => {
  const handleLogin = function handleLogin() { window.location = '/login'; };
  const handleLogout = function handleLogout() { window.location = '/logout'; };

  const logInOut = user ? (<button onClick={handleLogout}>{'Sign out'}</button>) : (<button onClick={handleLogin}>{'Sign in'}</button>);
  const greeting = user ? (<div className="greeting">{'Hello, ' + user.firstName + '!'}</div>) : (<div className="greeting">{'Welcome to Frankenstein!'}</div>);

  return (
    <nav id="nav-bar" className="grid">
      <div id="logo-container">
        <div id="logo" className="col-3-12">
          FRANKENSTEIN
          {greeting}
        </div>
      </div>
      <div id="search-container" className="col-6-12">
        <Search handleSearch = {handleSearch} searching={searching} />
      </div>
      <div id="account-actions-container" className="col-3-12">
        {logInOut}
      </div>
    </nav>
  );
};

Nav.propTypes = {
  handleSearch: React.PropTypes.func.isRequired,
  searching: React.PropTypes.bool.isRequired,
};

export default Nav;
