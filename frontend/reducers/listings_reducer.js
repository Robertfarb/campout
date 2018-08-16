import {RECEIVE_ALL_LISTINGS, RECEIVE_LISTING} from '../actions/listings_actions';
import merge from 'lodash/merge';

const listingsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = {};

  switch (action.type) {
    case RECEIVE_ALL_LISTINGS:
      return Object.assign(newState, action.listings)
      // return merge(newState, state, action.listings)
    case RECEIVE_LISTING:
      return merge(newState, state, {[action.listing.id]: action.listing})
    default:
      return state;
  }
}
export default listingsReducer;
