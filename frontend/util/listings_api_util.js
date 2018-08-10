export const fetchListings = (listings) => (
  $.ajax({
    method: "GET",
    url: "api/listings"
  })
);

export const fetchListing = (id) => (
  $.ajax({
    method: "GET",
    url: `api/listing/${id}`
  })
);