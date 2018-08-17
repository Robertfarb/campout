json.reviews do 
  @reviews.each do |review|
    json.set! review.id do
      json.extract! review, :user_id, :listing_id, :review_body
      json.author_username review.author.username
      json.author_name review.author.first_name
    end
  end
end