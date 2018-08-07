import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
// import configureStore from './store/store';
import { signup, login, logout } from './util/session_api_util'

document.addEventListener("DOMContentLodaed", () => {
  const root = document.getElementById("root");

  ReactDOM.render(<h1>Test</h1>, root)
  window.signup = signup;
  window.login = login;
  window.logout = logout;
});