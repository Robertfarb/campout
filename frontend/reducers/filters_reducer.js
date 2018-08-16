import merge from 'lodash/merge';
import { RECEIVE_FILTER, RECEIVE_PRICE_FILTER,
        REMOVE_PRICE_FILTER, REMOVE_FILTER,
        CLEAR_FILTERS  } from '../actions/location_filter_actions';


const filtersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = {};

  const defaultFilters = {
    glamping: false,
    petFriendly: false,
    toiets: false,
    group: false,
    maxCapacity: 100,
    showers: false,
    minPrice: 0,
    maxPrice: 10000
  }

  switch (action.type) {
    case RECEIVE_FILTER:
      return merge(newState, state, {[action.filter]: true});
    case RECEIVE_PRICE_FILTER:
      return merge(newState, state, {maxPrice: action.price});
    case REMOVE_PRICE_FILTER:
      return merge(newState, state, {maxPrice: 10000});
    case CLEAR_FILTERS:
      break
    case REMOVE_FILTER:
      return defaultFilters
    default:
      return state;
  }
};

export default filtersReducer;