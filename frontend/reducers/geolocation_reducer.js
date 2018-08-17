import { RECEIVE_GEOLOCATION } from '../actions/location_filter_actions';
import merge from 'lodash/merge';

const geolocationReducer = (state = {address: ''}, action) => {
  Object.freeze(state);
  const newState = {};

  switch (action.type) {
    case RECEIVE_GEOLOCATION:
      return {address: action.geolocation}
    default:
      return state;
  }
}

export default geolocationReducer;
