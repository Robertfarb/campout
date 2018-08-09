import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ openModal, currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="logged-out-nav nav">
      <img className="nav-logo" src={window.images.logoPng} />
      <button className="login-button" onClick={() => openModal('login')}>Log in</button>
    </nav>
  );

  const personalGreeting = () => (
    <hgroup className="logged-in-nav nav">
      <img className="nav-logo" src={window.images.logoPng} />
      <h3>{currentUser.username}</h3>
      <button onClick={logout}>Logout</button>
    </hgroup>
  )
  
  return currentUser ? personalGreeting() : sessionLinks();
}

export default Navbar;