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
        <div className="main-top">
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
        </div>
        <div className="splash-listing-images">
          <h2>Discover camping...</h2>
          <div className="splash-square-grid">
            <div className="splash-square">
              <div className="splash-listing-img"><img className="full-img" src="https://s3-us-west-1.amazonaws.com/campout-dev/puppy-1234691_1920.jpg" alt="Pet friendly Camping"/></div>
              <footer className="splash-image-footer">
                <h3>Pet friendly camping</h3>
                <p>Best options near me</p>
              </footer>
            </div>
            <div className="splash-square">
              <div className="splash-listing-img"><img className="full-img" src="https://s3-us-west-1.amazonaws.com/campout-dev/glapming.jpg" alt="Glamping" /></div>
              <footer className="splash-image-footer">
                <h3>Glamping near me</h3>
                <p>Best options near me</p>
              </footer>
            </div>
            <div className="splash-square">
              <div className="splash-listing-img"><img className="full-img" src="https://s3-us-west-1.amazonaws.com/campout-dev/martine-jacobsen-344052-unsplash.jpg" alt="" /></div>
              <footer className="splash-image-footer">
                <h3>Beach camping</h3>
                <p>Best options near me</p>
              </footer>
            </div>
            <div className="splash-square">
              <div className="splash-listing-img"><img className="full-img" src="https://s3-us-west-1.amazonaws.com/campout-dev/vlad-shapochnikov-127780-unsplash.jpg" alt="" /></div>
              <footer className="splash-image-footer">
                <h3>Crater Lake</h3>
                <p>Oregon</p>
              </footer>
            </div>
            <div className="splash-square">
              <div className="splash-listing-img"><img className="full-img" src="https://s3-us-west-1.amazonaws.com/campout-dev/big_sur.jpg" alt="" /></div>
              <footer className="splash-image-footer">
              <h3>Big Sur</h3>
              <p>California</p>
              </footer>
            </div>
            <div className="splash-square">
              <div className="splash-listing-img"><img className="full-img" src="https://s3-us-west-1.amazonaws.com/campout-dev/zion.jpg" alt="" /></div>
              <footer className="splash-image-footer">
                <h3>Zion</h3>
                </p>Utah</p>
              </footer>
            </div>
            <div className="splash-square">
              <div className="splash-listing-img"><img className="full-img" src="https://s3-us-west-1.amazonaws.com/campout-dev/joshua_tree.jpg" alt="" /></div>
              <footer className="splash-image-footer">
                <h3>Joshua Tree</h3>
                <p>California</p>
              </footer>
            </div>
            <div className="splash-square">
              <div className="splash-listing-img"><img className="full-img" src="https://s3-us-west-1.amazonaws.com/campout-dev/grand_canyon.jpg" alt="" /></div>
              <footer className="splash-image-footer">
                <h3>Grand Canyon</h3>
                <p>Arizona</p>
              </footer>
            </div>
            <div className="splash-square">
              <div className="splash-listing-img"><img className="full-img" src="https://s3-us-west-1.amazonaws.com/campout-dev/redwood.jpg" alt="" /></div>
              <footer className="splash-image-footer">
                <h3>Redwoods</h3>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;