@listings.each do |listing|
  json.set! listing.id do
    json.extract! listing, :id, :title, :host_id, :description, :address, :long, :lat, :price_daily, 
                  :is_glamping, :pet_friendly, :is_toilets, :max_capacity, :has_showers, :checkin_after, 
                  :checkout_before
    json.activities listing.activities_arr
    
    listing.photos.each do |photo|
      json.listingIcon url_for(photo)
    end
  end
end

   