import React from 'react';
import { connect } from 'react-redux';
import { deleteBooking, clearErrors, requestAllBookings } from '../../actions/bookings_actions';
import UserIndex from './user_index';

const mapStateToProps = (state, ownProps) => ({
    bookings: state.entities.bookings,
    currentUser: state.entities.users[ownProps.match.params.userId]
});

const mapDispatchToProps = dispatch => {
  return {
    deleteBooking: id => dispatch(deleteBooking(id)),
    clearErrors: () => dispatch(clearErrors()),
    requestAllBookings: () => dispatch(requestAllBookings())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);