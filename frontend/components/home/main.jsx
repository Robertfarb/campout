import Footer from '../footer/footer'

import React from 'react';
import { Link } from 'react-router-dom';


class MainPage extends React.Component {



  render() {
    return (
      <div className="main-container">
        <div className="left-main">
          <h2>Campout makes camping easy.</h2><br/>
          <p>Book unique camping experiences at 300,000 campsites, ranches, vineyards, public parks and more.</p>
          <div className="search-bar-container">
            <input className="campsite-search" type="text"/>
          </div>
        </div>
        <div className="right-main">
          <div className="right-img-conatiner">
            <img src={window.images.yosemiteMain} alt="Yosemite National Park"/>
            <p>Yosemite Nat. Park hosted by National Park Service</p>
          </div>
        </div>
        <div className="splash-listing-images">
          
        </div>
      </div>
    );
  }
}

export default MainPage;