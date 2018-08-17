import * as APIUtil from '../util/listings_api_util';

export const RECEIVE_ALL_LISTINGS = 'RECEIVE_ALL_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const START_LOADING_ALL_LISTINGS = 'START_LOADING_ALL_LISTINGS';
export const START_LOADING_SINGLE_LISTING = 'START_LOADING_SINGLE_LISTING'

export const requestAllListings = (bounds) => dispatch => {
  dispatch(startLoadingAllListings());
  return APIUtil.fetchSearchListings(bounds)
  .then(listings => dispatch(receiveAllListings(listings)))
}

export const requestListing = (id) => dispatch => {
  dispatch(startLoadingSingleListing());
  return APIUtil.fetchListing(id)
  .then(listing => dispatch(receiveListing(listing)))
}

export const updateFilteredListings = (filteredListings) => dispatch => {
  dispatch(receiveAllListings(filteredListings));
}

export const receiveAllListings = (listings) => ({
  type: RECEIVE_ALL_LISTINGS,
  listings
})

export const receiveListing = (listing) => ({
  type: RECEIVE_LISTING,
  listing
})

export const startLoadingAllListings = () => ({
  type: START_LOADING_ALL_LISTINGS
});

export const startLoadingSingleListing = () => ({
  type: START_LOADING_SINGLE_LISTING
});