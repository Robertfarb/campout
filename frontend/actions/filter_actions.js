export const RECEIVE_FILTER = 'RECEIVE_FILTER';
export const RECEIVE_PRICE_FILTER = 'RECEIVE_PRICE_FILTER';
export const REMOVE_PRICE_FILTER = 'REMOVE_PRICE_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';
export const RECEIVE_CAPACITY_FILTER = 'RECEIVE_CAPACITY_FILTER';
export const REMOVE_CAPACITY_FILTER = 'REMOVE_CAPACITY_FILTER';
export const UPDATE_SITE_FILTER = 'UPDATE_SITE_FILTER';

export const receiveFilter = filter => ({
  type: RECEIVE_FILTER,
  filter,
})

export const removeFilter = filter => ({
  type: REMOVE_FILTER,
  filter,
})

export const receiveCapacityFilter = capacity => ({
  type: RECEIVE_CAPACITY_FILTER,
  capacity
})

export const removeCapacityFilter = () => ({
  type: REMOVE_CAPACITY_FILTER,
})

export const receivePriceFilter = price => ({
  type: RECEIVE_PRICE_FILTER,
  price,
})

export const removePriceFilter = () => ({
  type: REMOVE_PRICE_FILTER,
})

export const clearFilters = () => ({
  type: CLEAR_FILTERS
})

export const changeSiteFilter = filter => ({
  type: UPDATE_SITE_FILTER,
  filter
})

export const updateFilterValue = filter => dispatch => {
  dispatch(changeSiteFilter(filter))
}

