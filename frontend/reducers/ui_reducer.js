import { combineReducers } from 'redux';

import modal from './modal_reducer';
import loading from './loading_reducer';
import mapBounds from './location_filters_reducer';
import filters from './filters_reducer';

export default combineReducers({
  modal,
  loading,
  mapBounds,
  filters
});