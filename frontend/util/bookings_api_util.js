export const fetchBookings = (id) => (
  $.ajax({
    method: "GET",
    url: "api/bookings"
  })
)

export const createBooking = (booking) => (
  $.ajax({
    method: "POST",
    url: `api/listings/${booking.listing.id}/bookings`,
    data: { booking }
  })
) 

export const deleteBooking = id => {
  $.ajax({
    method: "DELETE",
    url: `api/bookings/${id}`
  })
}