import React from 'react';
import { Provider } from 'react-redux';
import {Route, 
  Redirect, 
  Switch, 
  Link, 
  HashRouter} from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import Modal from './modal/modal';
import MainPage from './home/main';
import NotFound from './not_found/not_found'
import ListingContainer from './listings/listing_container';


  const App = () => (
    <div>
      <NavBarContainer />
      <Modal />
      <Switch>
        <Route exact path="/listings/:listingId" component={ListingContainer} />
        {/* <Route path="/discover" component={searchInProgress} /> */}
        <Route exact path="/" component={MainPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  )

  export default App;