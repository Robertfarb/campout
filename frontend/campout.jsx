import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchSearchListings, fetchFilterListings} from './util/listings_api_util';
import {requestAllBookings,  deleteBooking, createBooking, receiveAllBookings} from './actions/bookings_actions';
import { updateFilterValue } from './actions/filter_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users : {[window.currentUser.id]: window.currentUser}
      },
      session: {id: window.currentUser.id}
    };
    store = configureStore(preloadedState);
    // delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);

  //testing//
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.requestAllBookings = requestAllBookings;
  window.receiveAllBookings = receiveAllBookings;
  window.fetchSearchListings = fetchSearchListings;
  window.fetchFilterListings = fetchFilterListings;
  window.updateFilterValue = updateFilterValue;
  // window.requestAllListings = requestAllListings;
  // window.requestListing = requestListing;
  //testing//
});