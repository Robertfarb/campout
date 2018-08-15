import {
  RECEIVE_BOOKING,
  RECEIVE_BOOKING_ERRORS, CLEAR_ERRORS
} from '../actions/bookings_actions';


export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BOOKING_ERRORS:
      debugger;
      return action.payload || [];
    case RECEIVE_BOOKING:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};