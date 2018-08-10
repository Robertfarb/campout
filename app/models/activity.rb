class Activity < ApplicationRecord
  validates :hiking, :biking, :swimming, :fishing, :climbing, :surfing, :skiing, inclusion: {in: [true, false]}
  
  belongs_to :listing,
  foreign_key: :listing_id,
  class_name: :Listing


  def to_hash
    hash = {}; self.attributes.each { |k,v| hash[k] = v }
    return hash
  end
end