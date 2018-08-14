import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import booking from './booking_errors_reducer';

export default combineReducers({
  session,
  booking
});