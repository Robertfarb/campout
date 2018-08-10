json.array! @listings do |listing|
  json.extract! listing, :id, :title
  listing.photos do |photo|
    json.photoUrl url_for(listing.photo)
  end
end