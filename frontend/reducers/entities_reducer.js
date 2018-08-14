import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import listings from './listings_reducer';
import bookings from './bookings_reducer';

export default combineReducers({
    users: usersReducer,
    listings: listings,
    bookings
});