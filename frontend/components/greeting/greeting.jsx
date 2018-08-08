import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login">
      <Link to="/">Login</Link>
    </nav>
  );

  const personalGreeting = () => (
    <hgroup className="logout-current-user">
      <h3>{currentUser.username}</h3>
      <button onClick={logout}>Logout</button>
    </hgroup>
  )

  return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;