import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id]

  return ({
    currentUser,
    listingId: ownProps.listingId,
    review: { user_id: state.session.id, listing_id: ownProps.listingId, review_body: '' },
    formType: "Add Review"
  })
};

const mapDispatchToProps = dispatch => ({
  action: (review) => dispatch(createReview(review)),
  updateReview: (review) => dispatch(updateReview(review)),
  deleteReview: (review) => dispatch(deleteReview(review)),
  requestReviews: () => dispatch(requestReviews()),
  openModal: () => dispatch(openModal('login'))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);