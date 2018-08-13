import values from 'lodash/values';

export const SelectAllListings = (state) => values(state.entities.listings);

