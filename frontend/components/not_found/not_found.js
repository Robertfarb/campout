import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="not-found-container">
    <h1>404. Sorry the page you were looking for was not found.</h1>
    <img className="not-found-tent" src={window.images.notFound}/>
    <center><Link to="/">Return to Home Page</Link></center>
  </div>
);

export default NotFound;