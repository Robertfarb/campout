import merge from 'lodash/merge';
import {
  RECEIVE_ALL_LISTINGS,
  RECEIVE_LISTING,
  START_LOADING_ALL_LISTINGS,
  START_LOADING_SINGLE_LISTING,
} from '../actions/listings_actions';

const initialState = {
  indexLoading: false,
  detailLoading: false
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_LISTINGS:
      return merge({}, state, { indexLoading: false });
    case RECEIVE_LISTING:
      return initialState;
    case START_LOADING_ALL_LISTINGS:
      return merge({}, state, { indexLoading: true });
    case START_LOADING_SINGLE_LISTING:
      return merge({}, state, { detailLoading: true });
    default:
      return state;
  }
};

export default loadingReducer;