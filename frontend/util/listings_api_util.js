export const fetchListings = () => (
  $.ajax({
    method: "GET",
    url: "api/listings"
  })
);

export const fetchListing = (id) => (
  $.ajax({
    method: "GET",
    url: `api/listings/${id}`
  })
);

export const fetchSearchListings = searchParams => (
  $.ajax({
    method: "GET",
    url: "api/listings",
    data: { searchParams }
  })
);