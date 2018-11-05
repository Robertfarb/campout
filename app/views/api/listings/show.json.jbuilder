json.extract! @listing, :id, :title, :host_id, :description, :address, :long, :lat, :price_daily, :is_glamping, :pet_friendly, :is_toilets, :max_capacity, :has_showers, :checkin_after, :checkout_before

json.conditions do 
  json.weather @listing.curr_weather
  json.elevation @listing.elevation
  json.curr_conditions @listing.curr_conditions
end

json.host do
  json.id @listing.host.id
  json.username @listing.host.username
  json.first_name @listing.host.first_name
  json.last_name @listing.host.last_name
end

json.listingPhotos do
  @listing.photos.each do |photo|
    json.set! photo.id do
      json.id photo.id
      json.imgUrl url_for(photo)
    end
  end
end

json.reviews do
  @listing.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :user_id, :review_body
      json.author_username review.author.username
      json.author_name review.author.first_name
    end
  end
end