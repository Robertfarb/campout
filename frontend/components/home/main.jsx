import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search/search_container';



class MainPage extends React.Component {
  constructor (props){
    super(props);

    this.update = this.update.bind(this);
    this.handlePriceFilter = this.handlePriceFilter.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentDidMount () {
    this.props.requestAllListings();
  }

  handleFilter(filter) {
    return e => {
      this.props.clearFilters();
      this.props.receiveFilter(filter);
      this.props.history.push('/discover')
    }
  }

  handleSearch (e) {
    this.props.receiveGeolocation(e.currentTarget.parentElement.children[0].children[0].children[0].value)
    .then(this.props.history.push("/discover"))
  }

  handlePriceFilter(price) {
    return e => {
      this.props.clearFilters();
      this.props.receivePriceFilter(price);
      this.props.history.push('/discover')
    }
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
            <div className="search-bar">
            <SearchBar className="campsite-search" />
              <button onClick={(e) => this.handleSearch(e)} className="splash-search">Search</button>
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
              <div onClick={this.handleFilter('petFriendly')} className="splash-listing-img"><img className="full-img" src="https://s3-us-west-1.amazonaws.com/campout-dev/puppy-1234691_1920.jpg" alt="Pet friendly Camping"/></div>
              <footer className="splash-image-footer">
                <h3 onClick={this.handleFilter('petFriendly')}>Pet friendly camping</h3>
                <p>Best options near me</p>
              </footer>
            </div>
            <div className="splash-square">
              <div onClick={this.handleFilter('glamping')} className="splash-listing-img"><img className="full-img" src="https://s3-us-west-1.amazonaws.com/campout-dev/glapming.jpg" alt="Glamping" /></div>
              <footer className="splash-image-footer">
                <h3 onClick={this.handleFilter('glamping')}>Glamping near me</h3>
                <p>Best options near me</p>
              </footer>
            </div>
            <div className="splash-square">
              <div onClick={this.handlePriceFilter(75)} className="splash-listing-img"><img className="full-img" src="https://s3-us-west-1.amazonaws.com/campout-dev/martine-jacobsen-344052-unsplash.jpg" alt="" /></div>
              <footer className="splash-image-footer">
                <h3 onClick={this.handlePriceFilter(75)}>Camping under $75</h3>
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