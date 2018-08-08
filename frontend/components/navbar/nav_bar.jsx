import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ openModal, currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="logged-out-nav">
      <img src=""></img>
      <button onClick={() => openModal('login')}>Login</button>
    </nav>
  );

  const personalGreeting = () => (
    <hgroup className="logged-in-nav">
      <h3>{currentUser.username}</h3>
      <button onClick={logout}>Logout</button>
    </hgroup>
  )
  
  return currentUser ? personalGreeting() : sessionLinks();
}

export default Navbar;