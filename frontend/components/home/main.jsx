import Footer from '../footer/footer'

import React from 'react';
import { Link } from 'react-router-dom';


class MainPage extends React.Component {
  constructor (props){
    super(props);
  }


  render() {
    return (
      <div className="main-container">
        <div className="left-main">
          <h2>Campout makes camping easy.</h2><br/>
          <div className="tagline">
            <p>Book unique camping experiences at 300,000 <br /> campsites, ranches, vineyards, public parks and more.</p>
          </div>
          <div className="search-bar-container">
            <input placeholder="Camping near me..." className="campsite-search" type="text"/>
          </div>
        </div>
        <div className="right-main">
          <div className="right-img-conatiner">
            <img src={window.images.yosemiteMain} alt="Yosemite National Park"/>
            <p><Link to="/">Yosemite Nat. Park</Link> hosted by National Park Service</p>
          </div>
        </div>
        <div className="splash-listing-images">

        </div>
      </div>
    );
  }
}

export default MainPage;