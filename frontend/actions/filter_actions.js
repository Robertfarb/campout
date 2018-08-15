import * as APIUtil from '../util/listings_api_util';

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';


export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return APIUtil.fetchSearchListings(getState().ui.filters)(dispatch);\
}s