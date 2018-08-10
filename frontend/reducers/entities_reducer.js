import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import listings from './listings_reducer';

export default combineReducers({
    users: usersReducer,
    listings
});