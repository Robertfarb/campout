import React from 'react';
import { connect } from 'react-redux';
import ListingIndex from './listings_index';
import { requestAllListings, requestListing } from '../../actions/listings_actions';
// import { selectAllListings } from '../../reducers/selectors'



const mapStateToProps = (state, ownProps) => {
  const listings = state.entities.listings
  const listingId = ownProps.match.params.listingId;
  const filters = state.ui.filters;

  return {
    listings,
    listingId,
    filters
  }
};

const mapDispatchToProps = dispatch => ({
  requestAllListings: () => dispatch(requestAllListings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingIndex);