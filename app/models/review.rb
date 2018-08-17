class Review < ApplicationRecord
  validates :user_id, :listing_id, :review_body, presence: true

  belongs_to :author,
    foreign_key: :user_id,
    class_name: :User
  
  belongs_to :listing,
    foreign_key: :listing_id,
    class_name: :Listing
end