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
        <div className="footer-section browse">
          <h5>Browse</h5>
          <ul>
            <a href="#"><li>Host campers</li></a>
            <a href="#"><li>Discover Camps</li></a>
            <a href="#"><li>Gift Cards</li></a>
            <a href="#"><li>Help</li></a>
            <a href="#"><li>Contact</li></a>
          </ul>
        </div>
        <div className="footer-section browse">
          <h5>About</h5>
          <ul>
            <a href="#"><li>Journal</li></a>
            <a href="#"><li>Our Story</li></a>
            <a href="#"><li>The Team</li></a>
            <a href="#"><li>Careers</li></a>
            <a href="#"><li>Press Kit</li></a>
          </ul>
        </div>
        <div className="footer-section browse">
          <h5>Social</h5>
          <ul>
            <a href="#"><li>Facebook</li></a>
            <a href="#"><li>Twitter</li></a>
            <a href="#"><li>Instagram</li></a>
            <a href="#"><li>Pinterest</li></a>
            <a href="#"><li>Spotify</li></a>
          </ul>
          <ul>
          </ul>
        </div>
      </footer>
      <div className="footer-bottom-wrapper">
        <div className="footer-bottom">
          <p>Made in California.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;