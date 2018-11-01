import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { openModal } from '../../actions/modal_actions';
import { requestAllBookings } from '../../actions/bookings_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const currentUserId = currentUser === undefined ? 0 : currentUser.id;
  const listing_id = ownProps.listing.id;
  const bookings = state.entities.bookings;

  return ({
    currentUser,
    listingId: ownProps.listingId,
    review: { user_id: currentUserId, listing_id, review_body: '' },
    formType: "Add Review",
    bookings
  })
};

const mapDispatchToProps = dispatch => ({
  action: (review) => dispatch(createReview(review)),
  updateReview: (review) => dispatch(updateReview(review)),
  deleteReview: (review) => dispatch(deleteReview(review)),
  requestReviews: () => dispatch(requestReviews()),
  openModal: () => dispatch(openModal('login')),
  requestAllBookings: () => dispatch(requestAllBookings())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);