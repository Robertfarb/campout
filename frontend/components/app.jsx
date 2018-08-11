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
import Footer from './footer/footer'


  const App = () => (
    <div>
      <NavBarContainer />
      <Modal />
      <Switch>
        <Route exact path="/listings/:listingId" component={ListingContainer} />
        {/* <Route path="/discover" component={searchInProgress} /> */}
        <Route exact path="/" component={MainPage} />
        <Route path="*" component={NotFound} />
        <Route path="/listings/*" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  )

  export default App;