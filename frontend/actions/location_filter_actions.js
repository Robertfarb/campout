import * as APIUtil from '../util/listings_api_util';
import { requestAllListings } from './listings_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const RECEIVE_GEOLOCATION = 'RECEIVE_GEOLOCATION';

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const receiveGeolocation = (geolocation) => ({
  type: RECEIVE_GEOLOCATION,
  geolocation
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return requestAllListings(getState().ui.mapBounds)(dispatch);
}