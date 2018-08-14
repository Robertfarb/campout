
json.set! @booking.id do
  json.extract! @booking, :guest_id, :listing_id, :check_in, :check_out, :total_price, :total_guests
end
