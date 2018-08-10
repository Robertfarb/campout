import * as APIUtil from '../util/listings_api_util';

export const RECEIVE_ALL_LISTINGS = 'RECEIVE_ALL_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';

export const requestAllListings = () => dispatch => {
  return APIUtil.fetchListings()
  .then(listings => dispatch(receiveAllListings(listings)))
}

export const requestListing = (id) => dispatch => {
  return APIUtil.fetchListing(id)
  .then(listings => dispatch(receiveAllListings(listings)))
}

export const receiveAllListings = (listings) => ({
  type: RECEIVE_ALL_LISTINGS,
  listings
})

export const receiveListing = (listing) => ({
  type: RECEIVE_LISTING,
  listing
})