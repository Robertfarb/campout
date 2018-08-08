import React from 'react';
import { Provider } from 'react-redux';
import {Route, 
  Redirect, 
  Switch, 
  Link, 
  HashRouter} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';


  const App = () => (
    <div>
      <Modal />
      <header>
        <h1>Welcome to Campout!</h1>
        <GreetingContainer />
      </header>
    </div>
  )

  export default App;