import React from 'react';
import { Provider } from 'react-redux';
import {Route, 
  Redirect, 
  Switch, 
  Link, 
  HashRouter} from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import Modal from './modal/modal';
import MainPage from './home/main_container';
import NotFound from './not_found/not_found'
import Footer from './footer/footer'
import ListingShow from './listings/listing_container';
import UserProfile from './user/user_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import DiscoverContainer from './discover/discover_container';
import SearchContainer from './search/search_container';

const App = () => (
    <div>
      <NavBarContainer />
      <Modal />
      <Switch>
        <Route path="/listings/:listingId" component={ListingShow} />
        <Route path="/discover" component={DiscoverContainer} />
        <ProtectedRoute path="/users/:userId" component={UserProfile}/>
        <Route exact path="/" component={MainPage} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  )

  export default App;