import React from 'react';
import { Provider } from 'react-redux';
import {Route, 
  Redirect, 
  Switch, 
  Link, 
  HashRouter} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';


  const App = () => (
    <div>
      <header>
        <h1>Welcome to Campout!</h1>
        <GreetingContainer />
      </header>
    </div>
  )

  export default App;