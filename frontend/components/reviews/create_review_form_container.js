import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  listingId: ownProps.match.params.listingId,
  review: {user_id: currentUser.id, listing_id: listingId, review_body: ''},
  formType: "Add Review",
});

const mapDispatchToProps = dispatch => ({
  action: (review) => dispatch(createReview(review)),
  updateReview: (review) => dispatch(updateReview(review)),
  deleteReview: (review) => dispatch(deleteReview(review)),
  requestReviews: () => dispatch(requestReviews())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);