import React from 'react';
import { withRouter } from 'react-router-dom';
import ListingIndexItem from './listing_index_item';

class ListingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.applyListingFilters = this.applyListingFilters.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillUnmount () {
    this.props.clearFilters();
  }

  applyListingFilters () {
    let filters = this.props.filters;
    let filteredListings = Object.values(this.props.listings);

    if (filters['glamping'] === true) {
    filteredListings = filteredListings.filter(listing => {
      if (listing.is_glamping) return listing});
    }

    if (filters['camping'] === true) {
      filteredListings = filteredListings.filter(listing => {
        if (listing.is_glamping === false) return listing
      });
    }
    
    if (filters['petFriendly'] === true) {
    filteredListings = filteredListings.filter(listing => {
      if (listing.pet_friendly) return listing});
    }

    if (filters['toilets'] === true) {
      filteredListings = filteredListings.filter(listing => {
        if (listing.is_toilets) return listing
      });
    }

    if (filters['showers'] === true ){
      filteredListings = filteredListings.filter(listing => {
        if (listing.has_showers) return listing
      });
    }

    if (filters['maxPrice'] < 10000) {
      filteredListings = filteredListings.filter(listing => {
        if (listing.price_daily < filters['maxPrice']) return listing
      });
    }

    if (filters['maxCapacity'] < 100) {
      filteredListings = filteredListings.filter(listing => {
        if (listing.max_capacity > filters['maxCapacity']) return listing
      });
    }

    return filteredListings;
  }

  render() {
    const filtListings = this.applyListingFilters(this.props.listings);

    if (Object.keys(this.props.listings).length === 0 && this.props.listings.constructor === Object) {
      return (<div className="loading-container list-loader"><div className="loader">Loading...</div></div>)
     } else if (filtListings.length === 0) {
      return (
        <div className="no-listings-avail">
          <h1>Sorry, there are no listings available that match your Search!</h1>
        </div>
      )
    };

    return (
      <div className="listing-index">
      {filtListings.map(listing => (
        <ListingIndexItem key={listing.id} listing={listing}/> 
      ))}
    </div>
  )};
}

export default withRouter(ListingIndex);