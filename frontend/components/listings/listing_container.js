import React from 'react';
import { connect } from 'react-redux';
import Listing from './listing';
import { requestAllListings, requestListing } from '../../actions/listings_actions';



const mapStateToProps = (state, ownProps) => {
  // debugger;
  const listing = state.entities.listings[ownProps.match.params.listingId]
  const host = state.entities.listings.host
  const photos = state.entities.listings.photos
  
  return {
    listing,
    host,
    photos
  }
};

const mapDispatchToProps = dispatch => ({
  requestAllListings: () => dispatch(requestAllListings()),
  requestListing: (id) => dispatch(requestListing(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Listing);