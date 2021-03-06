import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchBar from '../search/search_container';

const Navbar = ({ openModal, currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="logged-out-nav nav">
      <div className="left">
        <Link to="/"><img className="nav-logo" src={window.images.logoPng} /></Link>
        <SearchBar />
      </div>
      <div className="right">
        <a className="github nav-link" href="https://github.com/robertfarb/"><i className="fa fa-github fa-2x"></i></a>
        <a className="linked-in nav-link" href="https://www.linkedin.com/in/robert-farb-613a3751/"><i className="fa fa-linkedin fa-2x"></i></a>
        <button className="signup-button" onClick={() => openModal('signup')}>Sign up</button>
        <button className="login-button" onClick={() => openModal('login')}>Log in</button>
      </div>
    </nav>
  );

  const personalGreeting = () => (
    <hgroup className="logged-in-nav nav">
    <div className="left">
      <Link to="/"><img className="nav-logo" src={window.images.logoPng} /></Link>
        <SearchBar />
    </div>
      <div className="right">
        <a className="github nav-link" href="https://github.com/robertfarb/"><i className="fa fa-github fa-2x"></i></a>
        <a className="linked-in nav-link" href="https://www.linkedin.com/in/robert-farb-613a3751/"><i className="fa fa-linkedin fa-2x"></i></a>
        <a href={`#/users/${currentUser.id}`}><img className="smokey-icon" src={window.images.smokeyIcon} /></a>
        <a href={`#/users/${currentUser.id}`}><span className="current-user nav-link">{currentUser.username}</span></a>
        <button className="logout-button" onClick={logout}>Logout</button>
      </div>
    </hgroup>
  )
  
  return currentUser ? personalGreeting() : sessionLinks();
}

export default withRouter(Navbar);