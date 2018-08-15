import merge from 'lodash/merge';
import { UPDATE_FILTER } from '../actions/location_filter_actions';


const filtersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = {};

  const defaultFilters = {
    glamping: 'false',
    pet_friendly: 'false',
    toilets: 'false',
    max_capacity: 100,
    showers: 'false',
    min_price: 0,
    max_price: 10000
  }

  switch (action.type) {
    case UPDATE_FILTER:
      return action.value
    default:
      return state;
  }
};

export default filtersReducer;