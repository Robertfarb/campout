import { connect } from 'react-redux';
import React from 'react';
import { createBooking, deleteBooking } from '../../actions/booking_actions';
import { requestListing } from '../../actions/listing_actions';
import BookingForm from './booking_form';

const mapStateToProps = (state) => ({
  bookings: state.entities.bookings,
  currentUserId: state.entities.session.id,
  currentListingId: state.entities.listings[ownProps.match.params.listingId]

});

const mapDispatchToProps = dispatch => {
  return {
    fetchListing: id => dispatch(fetchListing(id)),
    createBooking: booking => dispatch(createBooking(booking)),
    deleteBooking: id => dispatch(deleteBooking(id)),
    openModal: modalType => dispatch(openModal(modalType)),
    requestListing: id => dispatch(requestListing(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);