export const fetchReviews = (listingId) => (
  $.ajax({
    method: "GET",
    url: `api/listings/${listingId}/reviews`
  })
);

export const createReview = (review) => (
  $.ajax({
    method: "POST",
    url: `api/listings/${review.listing_id}/reviews`,
    data: { review }
  })
);

export const updateReview = review => (
  $.ajax({
    method: "PATCH",
    url: `api/reviews/${review.id}`,
    data: { review }
  })
);

export const destroyReview = review => (
  $.ajax({
    method: "DELETE",
    url: `api/reviews/${review.id}`
  })
);