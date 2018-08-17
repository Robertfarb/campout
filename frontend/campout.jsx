import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {fetchReviews, createReview, updateReview, destroyReview} from './util/reviews_api_util';


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
  window.fetchReviews = fetchReviews;
  window.createReview = createReview;
  window.updateReview = updateReview;
  window.destroyReview = destroyReview;
  // window.requestAllListings = requestAllListings;
  // window.requestListing = requestListing;
  //testing//
});