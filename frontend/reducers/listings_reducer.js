import {RECEIVE_ALL_LISTINGS, RECEIVE_LISTING} from '../actions/listings_actions';
import merge from 'lodash/merge';

const listingsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = {};

  switch (action.type) {
    case RECEIVE_ALL_LISTINGS:
      return merge(newState, state, action.listings)
    case RECEIVE_LISTING:
      // debugger
      return merge(newState, state, {[action.listing.id]: action.listing})
      // return {[action.listing.id]: merge(newState, state, action.listing)}
    default:
      return state;
  }
}
export default listingsReducer;
