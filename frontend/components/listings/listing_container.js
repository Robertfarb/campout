import React from 'react';
import { connect } from 'react-redux';
import Listing from './listing';
import { requestAllListings, requestListing } from '../../actions/listings_actions';
import { requestAllBookings } from '../../actions/bookings_actions';
import { requestReviews, createReview, updateReview, deleteReview } from '../../actions/reviews_actions'

const mapStateToProps = (state, ownProps) => {
  const listingId = ownProps.match.params.listingId
  const listing = state.entities.listings[ownProps.match.params.listingId]
  const host = state.entities.listings.host
  const photos = state.entities.listings.listingPhotos
  const loading = state.ui.loading.detailLoading
  const currUser = state.entities.users[state.session.id]
  const reviews = state.entities.reviews

  return {
    listing,
    host,
    photos,
    listingId,
    currUser,
    reviews
  }
};

const mapDispatchToProps = dispatch => ({
  requestAllListings: () => dispatch(requestAllListings()),
  requestListing: (id) => dispatch(requestListing(id)),
  requestAllBookings: () => dispatch(requestAllBookings()),
  requestReviews: () => dispatch(requestReviews()),
  createReview: (review) => dispatch(createReview(review)),
  updateReview: (review) => dispatch(updateReview(review)),
  deleteReview: (review) => dispatch(deleteReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(Listing);