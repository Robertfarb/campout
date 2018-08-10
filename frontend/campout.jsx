import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { signup, login, logout } from './actions/session_actions';
import {openModal, closeModal} from './actions/modal_actions';
import {requestAllListings, requestListing} from './actions/listings_actions'

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
  window.requestAllListings = requestAllListings;
  window.requestListing = requestListing;
  // window.login = login;
  // window.logout = logout;
  // window.openModal= openModal;
  // window.closeModal= closeModal;
  //testing//
});