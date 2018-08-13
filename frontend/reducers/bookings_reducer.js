import {RECEIVE_ALL_BOOKINGS, RECEIVE_BOOKING,
        CREATE_BOOKING, RECEIVE_BOOKING_ERRORS,
        REMOVE_BOOKING} from '../actions/bookings_actions';
import merge from 'lodash/merge';

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = {};

  switch (action.type) {
    case RECEIVE_ALL_BOOKINGS:
      return action.bookings || {};
    case RECEIVE_BOOKING:
      return action.booking
      // return merge (newState, state, {[action.booking.id]: action.booking})
    case REMOVE_BOOKING:
      let updatedState = merge(newState, state);
      delete updatedState[action.bookingId];
      return updatedState;
    case CREATE_BOOKING:
      return merge(newState, state, {[action.booking.id]: action.booking})
    case RECEIVE_BOOKING_ERRORS:
      retun
      
    default:
      return state;
  }
}

export default bookingsReducer;
