import React from 'react';
import { connect } from 'react-redux';
import Explore from './explore';
// import { } from '../../actions/explore_actions';

const mapStateToProps = (state, ownProps) => {
  const listingId = ownProps.match.params.listingId
  const listing = state.entities.listings[ownProps.match.params.listingId]
  const host = state.entities.listings.host
  const photos = state.entities.listings.listingPhotos

  return {
    listing,
    host,
    photos,
    listingId
  }
};

const mapDispatchToProps = dispatch => ({
  requestAllListings: () => dispatch(requestAllListings()),
  requestListing: (id) => dispatch(requestListing(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Listing);