import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ openModal, currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="logged-out-nav nav">
      <div className="left">
        <Link to="/"><img className="nav-logo" src={window.images.logoPng} /></Link>
        <input className="nav-search" placeholder="Search..." type="text"/>
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
      <input className="nav-search"  type="text" placeholder="Search..."/>
    </div>
      <div className="right">
        <a className="github nav-link" href="https://github.com/robertfarb/"><i className="fa fa-github fa-2x"></i></a>
        <a className="linked-in nav-link" href="https://www.linkedin.com/in/robert-farb-613a3751/"><i className="fa fa-linkedin fa-2x"></i></a>
        <img className="smokey-icon" src={window.images.smokeyIcon} />
        <span className="current-user nav-link">{currentUser.username}</span>
        <button className="logout-button" onClick={logout}>Logout</button>
      </div>
    </hgroup>
  )
  
  return currentUser ? personalGreeting() : sessionLinks();
}

export default Navbar;