# == Schema Information
#
# Table name: listing_activities
#
#  id          :bigint(8)        not null, primary key
#  listing_id  :integer          not null
#  activity_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class ListingActivity < ApplicationRecord
  belongs_to :listing,
    foreign_key: :listing_id,
    class_name: :Listing

  belongs_to :activity,
    foreign_key: :activity_id,
    class_name: :activity
end
