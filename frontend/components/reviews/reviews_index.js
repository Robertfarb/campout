import React from 'react';
import { connect } from 'react-redux';
import Review from './reviews_index'

const mapStateToProps = (state) => ({
  currentUser: users[state.session.id],
  reviews: state.entities.reviews
  
});

const mapDispatchToProps = dispatch => ({
  requestReviews: () => dispatch(requestReviews()),
  createReview: (review) => dispatch(createReview(review)),
  updateReview: (review) => dispatch(updateReview(review)),
  deleteReview: (review) => dispatch(deleteReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(Review);