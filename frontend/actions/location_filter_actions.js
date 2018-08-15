import * as APIUtil from '../util/listings_api_util';

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';
export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return APIUtil.fetchFilterListings(getState().ui.filters)(dispatch);
}