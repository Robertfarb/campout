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
// import mainContainer from './home/mainContainer';


  const App = () => (
    <div>
      <NavBarContainer />
      <Modal />
      {/* <Switch>
        <Route exact path="/listings/:listingId" component={inProgress} />
        <Route path="/discover" component={searchInProgress} />
        <Route path="/" component={mainContainer} />
      </Switch> */}
    </div>
  )

  export default App;