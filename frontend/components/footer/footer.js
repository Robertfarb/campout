import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="site-description">
          <h5>Campout is everywhere you want to camp.</h5>
          <p>
            Discover unique experiences on ranches, nature preserves, farms, vineyards, and public 
            campgrounds across the U.S. Book tent camping, treehouses, cabins, yurts, 
            primitive backcountry sites, car camping, airstreams, tiny houses, RV camping, 
            glamping tents and more.
          </p>
        </div>
        <div className="footer-links">
          <h5>Social</h5>
          <a className="github nav-link" href="https://github.com/robertfarb/"><i className="fa fa-github fa-2x"></i></a>
          <a className="linked-in nav-link" href="https://www.linkedin.com/in/robert-farb-613a3751/"><i className="fa fa-linkedin fa-2x"></i></a>
          <a className="linked-in nav-link" href="https://www.linkedin.com/in/robert-farb-613a3751/"><i className="fa fa-linkedin fa-2x"></i></a>
          <a className="linked-in nav-link" href="https://www.linkedin.com/in/robert-farb-613a3751/"><i className="fa fa-linkedin fa-2x"></i></a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;