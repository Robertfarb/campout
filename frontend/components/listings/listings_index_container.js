import React from 'react';
import { connect } from 'react-redux';
import ListingIndex from './listings_index';
import { requestAllListings, requestListing } from '../../actions/listings_actions';
import { clearFilters } from '../../actions/filter_actions';



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
  clearFilters: () => dispatch(clearFilters())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingIndex);