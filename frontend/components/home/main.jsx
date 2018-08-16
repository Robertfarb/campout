import Footer from '../footer/footer'

import React from 'react';
import { Link } from 'react-router-dom';


class MainPage extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      geoLocation: ''
    }

    this.update = this.update.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentDidMount () {
    this.props.requestAllListings();
  }

  handleSearchInput () {
    //Write function to handle the search bar input and direct me to the /discover with the map centered
    // on the desired city (geocoder??)
  }

  render() {
    if (this.props.listings === undefined) return null;

    return (
      <div className="main-container">
        <div className="main-top">
          <div className="left-main">
            <h2>Campout makes camping easy.</h2><br/>
            <div className="tagline">
              <p>Book unique camping experiences at 300,000 <br /> campsites, ranches, vineyards, public parks and more.</p>
            </div>
            <div className="search-bar-container">
              <input onSubmit={() => this.props.history.push("/discover")} placeholder="Camping near me..." className="campsite-search" type="text"/>
              <button onClick={() => this.props.history.push("/discover")}className="splash-search">Search</button>
            </div>
          </div>
          <div className="right-main">
            <div className="right-img-conatiner">
              <a href={`#/listings/${parseInt(Object.keys(this.props.listings)[0])}`}><img src={window.images.yosemiteMain} alt="Yosemite National Park"/></a>
              <p><a href={`#/listings/${parseInt(Object.keys(this.props.listings)[0])}`}>Yosemite Nat. Park</a> hosted by National Park Service</p>
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
              <a href={`#/listings/${parseInt(Object.keys(this.props.listings)[4])}`}><div className="splash-listing-img">
                <img className="full-img" src="https://s3-us-west-1.amazonaws.com/campout-dev/vlad-shapochnikov-127780-unsplash.jpg" alt="" />
              </div></a>
              <footer className="splash-image-footer">
                <a href={`#/listings/${parseInt(Object.keys(this.props.listings)[4])}`}><h3>Crater Lake</h3></a>
                <p>Oregon</p>
              </footer>
            </div>
            <div className="splash-square">
              <a href={`#/listings/${parseInt(Object.keys(this.props.listings)[1])}`}><div className="splash-listing-img">
                <img className="full-img" src="https://s3-us-west-1.amazonaws.com/campout-dev/big_sur.jpg" alt="" />
              </div></a>
              <footer className="splash-image-footer">
                <a href={`#/listings/${parseInt(Object.keys(this.props.listings)[1])}`}><h3>Big Sur</h3></a>
              <p>California</p>
              </footer>
            </div>
            <div className="splash-square">
              <a href={`#/listings/${parseInt(Object.keys(this.props.listings)[3])}`}><div className="splash-listing-img">
                <img className="full-img" src="https://s3-us-west-1.amazonaws.com/campout-dev/zion.jpg" alt="" />
              </div></a>
              <footer className="splash-image-footer">
                <a href={`#/listings/${parseInt(Object.keys(this.props.listings)[3])}`}><h3>Zion</h3></a>
                <p>Utah</p>
              </footer>
            </div>
            <div className="splash-square">
              <a href={`#/listings/${parseInt(Object.keys(this.props.listings)[2])}`}><div className="splash-listing-img">
              <img className="full-img" src="https://s3-us-west-1.amazonaws.com/campout-dev/joshua_tree.jpg" alt="" />
              </div></a>
              <footer className="splash-image-footer">
                <a href={`#/listings/${parseInt(Object.keys(this.props.listings)[2])}`}><h3>Joshua Tree</h3></a>
                <p>California</p>
              </footer>
            </div>
            <div className="splash-square">
              <a href={`#/listings/${parseInt(Object.keys(this.props.listings)[5])}`}><div className="splash-listing-img">
                <img className="full-img" src="https://s3-us-west-1.amazonaws.com/campout-dev/grand_canyon.jpg" alt="" />
              </div></a>
              <footer className="splash-image-footer">
                <a href={`#/listings/${parseInt(Object.keys(this.props.listings)[5])}`}><h3>Grand Canyon</h3></a>
                <p>Arizona</p>
              </footer>
            </div>
            <div className="splash-square">
              <a href={`#/listings/${parseInt(Object.keys(this.props.listings)[6])}`}>
                <div className="splash-listing-img"><img className="full-img" src="https://s3-us-west-1.amazonaws.com/campout-dev/redwood.jpg" alt="" />
              </div></a>
              <footer className="splash-image-footer">
                <a href={`#/listings/${parseInt(Object.keys(this.props.listings)[6])}`}><h3>Redwoods</h3></a>
                <p>California</p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;