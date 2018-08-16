import React from 'react';
import { withRouter } from 'react-router-dom';
import ListingIndexItem from './listing_index_item'
import {selectAllListings} from '../../reducers/selectors';


class ListingIndex extends React.Component {
  constructor(props) {
    super(props);

    this.applyListingFilters = this.applyListingFilters.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.requestAllListings();
  }

  applyListingFilters () {
    debugger;
    const { filters, listings } = this.props;
    
    const filteredListings = Object.values(listings).filter(listing => {
      if (this.props.filters['glamping'] === true && listing.is_glamping) return;
      if (this.props.filters['camping'] === true && !listing.is_glamping) return;
      if (this.props.filters['petFriendly'] === true && listing.pet_friendly) return;
      if (this.props.filters['toilets'] === true && listing.is_toilets) return;
      if (this.props.filters['showers'] === true && listing.has_showers) return;
      if (this.props.filters['maxPrice'] && listing.price_daily < filters['maxPrice']) return;
      if (this.props.filters['maxCapacity'] && listing.max_capacity < filters['maxCapacity']) return;
    });

    return filteredListings;
  }


  render() {

    if (Object.values(this.props.listings).length === 0) {
      return (
        <div className="no-listings-avail">
          <h1>Sorry, there are no listings available for this location!</h1>
        </div>
      )
    }

    // const filteredListings = this.applyListingFilters(this.props.listings);


    return (
      <div className="listing-index">
      {Object.values(this.props.listings).map(listing => (
        <ListingIndexItem key={listing.id} listing={listing}/> 
      ))}
    </div>
  )}
}


export default ListingIndex;

