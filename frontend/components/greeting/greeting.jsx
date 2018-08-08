import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ openModal, currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login">
      <button onClick={() => openModal('login')}>Login</button>
    </nav>
  );

  const personalGreeting = () => (
    <hgroup className="logout-current-user">
      <h3>{currentUser.username}</h3>
      <button onClick={logout}>Logout</button>
    </hgroup>
  )

  // debugger;
  return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;