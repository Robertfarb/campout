import React from 'react';
import { connect } from 'react-redux';
import Listing from './listing';
import { requestAllListings, requestListing } from '../../actions/listings_actions';
import {requestAllBookings} from '../../actions/bookings_actions';



const mapStateToProps = (state, ownProps) => {
  const listingId = ownProps.match.params.listingId
  const listing = state.entities.listings[ownProps.match.params.listingId]
  const host = state.entities.listings.host
  const photos = state.entities.listings.listingPhotos
  const loading = state.ui.loading.detailLoading

  
  return {
    listing,
    host,
    photos,
    listingId
  }
};

const mapDispatchToProps = dispatch => ({
  requestAllListings: () => dispatch(requestAllListings()),
  requestListing: (id) => dispatch(requestListing(id)),
  requestAllBookings: () => dispatch(requestAllBookings())
});

export default connect(mapStateToProps, mapDispatchToProps)(Listing);