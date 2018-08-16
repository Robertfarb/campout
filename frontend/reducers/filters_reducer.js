import merge from 'lodash/merge';
import { RECEIVE_FILTER, RECEIVE_PRICE_FILTER,
        REMOVE_PRICE_FILTER, REMOVE_FILTER,
        CLEAR_FILTERS, RECEIVE_CAPACITY_FILTER,
        REMOVE_CAPACITY_FILTER } from '../actions/filter_actions';


const filtersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = {};

  const defaultFilters = {
    camping: false,
    glamping: false,
    petFriendly: false,
    toilets: false,
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
    case RECEIVE_CAPACITY_FILTER:
      return merge(newState, state, {maxCapacity: action.capacity});
    case REMOVE_CAPACITY_FILTER:
      return {maxCapacity: 100}
    case CLEAR_FILTERS:
      return defaultFilters;
    case REMOVE_FILTER:
      return {[action.filter]: false}
    default:
      return state;
  }
};

export default filtersReducer;