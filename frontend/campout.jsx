import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { signup, login, logout } from './actions/session_actions';
import {openModal, closeModal} from './actions/modal_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);

  //testing//
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.openModal= openModal;
  window.closeModal= closeModal;
  //testing//
});