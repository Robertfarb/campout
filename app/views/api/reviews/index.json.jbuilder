@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :user_id, :listing_id, :review_body
    json.author_username review.author.username
    json.author_name review.author.first_name
  end
end
