import * as APIUtil from '../util/bookings_api_util';

export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_ALL_BOOKINGS = 'RECEIVE_ALL_BOOKINGS';
export const CREATE_BOOKING = 'CREATE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const createBooking = booking => dispatch => (
  APIUtil.createBooking(booking).then(booking => {
    dispatch(receiveBooking(booking));
  }, err => dispatch(receiveBookingErrors(err.responseJSON)
))
)

export const requestAllBookings = () => dispatch => (
  APIUtil.fetchBookings().then(bookings => {
    dispatch(receiveAllBookings(bookings))
  }, err => dispatch(receiveBookingErrors(err)
))
)

export const deleteBooking = bookingId => dispatch => (
  APIUtil.deleteBooking(bookingId).then(booking => {
    dispatch(removeBooking(booking))
  }, err => dispatch(receiveBookingErrors(err.responseJSON)
))
)

export const receiveAllBookings = (bookings) => ({
  type: RECEIVE_ALL_BOOKINGS,
  bookings
})

export const receiveBooking = (booking) => ({
  type: RECEIVE_BOOKING,
  booking
})

export const receiveBookingErrors = payload => ({
  type: RECEIVE_BOOKING_ERRORS,
  payload
})

export const removeBooking = bookingId => ({
  type: REMOVE_BOOKING,
  bookingId
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});