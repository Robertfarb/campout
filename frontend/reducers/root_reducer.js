import { combineReducers } from 'redux';
import entities from './entities_reducer';
import sessionReducer from './session_reducer';
import errors from './errors_reducer';

export default combineReducers ({
  entities,
  session: sessionReducer,
  errors,
})