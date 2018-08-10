import {RECEIVE_ALL_LISTINGS, RECEIVE_LISTING} from '../actions/listings_actions';
import merge from 'lodash/merge';

const listingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let listings;
  const newState = {};

  switch (action.type) {
    case RECEIVE_ALL_LISTINGS:
      return merge(newState, state, action.listings)
    case RECEIVE_LISTING:
      return merge(newState, state, action.listing)
    default:
      return state;
  }
}

export default listingsReducer;