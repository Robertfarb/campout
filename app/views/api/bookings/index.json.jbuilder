@bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking, :id, :guest_id, :listing_id, :check_in, :check_out, :total_price, :total_guests
    json.total_price booking.total_price
    json.total_days booking.total_days

    json.listing do
      json.extract! booking.listing, :id, :title, :description

      booking.listing.photos.each do |photo|
        json.listingIcon url_for(photo)
      end
    end


  end
end