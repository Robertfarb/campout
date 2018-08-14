import { connect } from 'react-redux';
import React from 'react';
import { createBooking, deleteBooking, clearErrors, requestAllBookings} from '../../actions/bookings_actions';
import { requestListing } from '../../actions/listings_actions';
import BookingForm from './booking_form';

const mapStateToProps = (state, ownProps) => {
  return {
  bookings: state.entities.bookings,
  currentUserId: state.session.id,
  errors: state.errors.booking
}};

const mapDispatchToProps = dispatch => {
  return {
    createBooking: booking => dispatch(createBooking(booking)),
    deleteBooking: id => dispatch(deleteBooking(id)),
    openModal: modalType => dispatch(openModal(modalType)),
    requestListing: id => dispatch(requestListing(id)),
    clearErrors: () => dispatch(clearErrors()),
    requestAllBookings: () => dispatch(requestAllBookings())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);