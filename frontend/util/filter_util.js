export const applyListingFilters =  (filters, listings) => {
  let filteredListings = Object.values(listings);

  if (filters['glamping'] === true) {
    filteredListings = filteredListings.filter(listing => {
      if (listing.is_glamping) return listing
    });
  }

  if (filters['camping'] === true) {
    filteredListings = filteredListings.filter(listing => {
      if (listing.is_glamping === false) return listing
    });
  }

  if (filters['petFriendly'] === true) {
    filteredListings = filteredListings.filter(listing => {
      if (listing.pet_friendly) return listing
    });
  }

  if (filters['toilets'] === true) {
    filteredListings = filteredListings.filter(listing => {
      if (listing.is_toilets) return listing
    });
  }

  if (filters['showers'] === true) {
    filteredListings = filteredListings.filter(listing => {
      if (listing.has_showers) return listing
    });
  }

  if (filters['maxPrice'] < 10000) {
    filteredListings = filteredListings.filter(listing => {
      if (listing.price_daily < filters['maxPrice']) return listing
    });
  }

  if (filters['maxCapacity'] < 100) {
    filteredListings = filteredListings.filter(listing => {
      if (listing.max_capacity > filters['maxCapacity']) return listing
    });
  }

  return filteredListings;
}