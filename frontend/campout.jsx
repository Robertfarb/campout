import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {deleteReview, requestReviews, createReview, updateReview, receiveReview} from './actions/reviews_actions';
import { create } from 'domain';
import { receiveAllListings } from './actions/listings_actions';
import { requestAllBookings } from './actions/bookings_actions';


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
  } else {
    store = configureStore();
  }
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);

  //testing//
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.deleteReview = deleteReview;
  window.requestReviews = requestReviews;
  window.createReview = createReview;
  window.updateReview = updateReview;
  window.receiveAllListings = receiveAllListings;
  window.receiveReview = receiveReview;
  window.requestAllBookings = requestAllBookings;
  //testing//
});