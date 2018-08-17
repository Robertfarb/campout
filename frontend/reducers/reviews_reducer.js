import { RECEIVE_REVIEWS, REMOVE_REVIEW,
         RECEIVE_REVIEW} from '../actions/reviews_actions'
import merge from 'lodash/merge';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = {};
  
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return Object.assign(newState, action.reviews)
    case RECEIVE_REVIEW:
      return merge(newState, state, {[action.review.id]: action.review});
    case REMOVE_REVIEW:
      let nextState = merge({}, state);
      delete nextState[action.review.id]
      return nextState
    default:
      return state;
  }
};

export default reviewsReducer;