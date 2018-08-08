import React from 'react';
import { Provider } from 'react-redux';
import {Route, 
  Redirect, 
  Switch, 
  Link, 
  HashRouter} from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import Modal from './modal/modal';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';


  const App = () => (
    <div>
      <NavBarContainer />
      <Modal />
      <header>
        <h1>Welcome to Campout!</h1>
      </header>
    </div>
  )

  export default App;