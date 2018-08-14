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
import Footer from './footer/footer'
import ListingShow from './listings/listing_container';
import ListingsIndex from './listings/listings_index_container';


  const App = () => (
    <div>
      <NavBarContainer />
      <Modal />
      <Switch>
        <Route path="/listings/:listingId" component={ListingShow} />
        <Route exact path="/listings" component={ListingsIndex} />
        {/* <Route path="/discover" component={searchInProgress} /> */}
        <Route exact path="/" component={MainPage} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  )

  export default App;