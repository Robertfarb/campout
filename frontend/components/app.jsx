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
import Footer from './footer/footer';
import MainPage from './home/main';


  const App = () => (
    <div>
      <NavBarContainer />
      <Modal />
      <Switch>
        {/* <Route exact path="/listings/:listingId" component={inProgress} />
        <Route path="/discover" component={searchInProgress} /> */}
        <Route path="/" component={MainPage} />
        <Route component={test} />
      </Switch>
    </div>
  )

  export default App;