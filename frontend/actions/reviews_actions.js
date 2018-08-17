import * as APIUtil from '../util/reviews_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const deleteReview = (review) => dispatch => (
  APIUtil.destroyReview(review)
  .then(review => dispatch(removeReview(review)))
)

export const requestReviews = () => dispatch => (
  APIUtil.fetchReviews()
  .then(reviews => dispatch(receiveReviews(reviews)))
);

export const createReview = (review) => dispatch => (
  APIUtil.createReview(review)
  .then(review => dispatch(receiveReview(review)))
)

export const updateReview = (review) => (
  APIUtil.updateReview(review)
  .then(review => dispatch(receiveReview(review)))
)

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
})

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
})

export const removeReview = review => ({
  type: REMOVE_REVIEW,
  review
})


