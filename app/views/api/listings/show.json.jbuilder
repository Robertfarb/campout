json.extract! @listing, :id, :title, :host_id, :description, :address, :long, :lat, :price_daily, :is_glamping, :pet_friendly, :is_toilets, :max_capacity, :has_showers, :checkin_after, :checkout_before
json.activities @listing.activities_arr

json.host do
  json.set! @listing.host_id do
    json.id @listing.host.id
    json.username @listing.host.username
    json.first_name @listing.host.first_name
    json.last_name @listing.host.last_name
  end
end

json.listingPhotos do
  @listing.photos.each do |photo|
    json.set! photo.id do
      json.id photo.id
      json.imgUrl url_for(photo)
    end
  end
end
