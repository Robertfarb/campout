json.booking do
  json.set! @booking.id do
    json.extract! @booking, :guest_id, :listing_id, :check_in, :check_out, :total_price, :total_guests
  end
end

json.listing do
  json.set! @booking.listing.id do
    json.extract! @booking.listing, :title, :description
  end
  @booking.listing.photos.each do |photo|
    json.listingIcon url_for(photo)
  end
end