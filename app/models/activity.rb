# == Schema Information
#
# Table name: activities
#
#  id         :bigint(8)        not null, primary key
#  hiking     :boolean          not null
#  biking     :boolean          not null
#  swimming   :boolean          not null
#  fishing    :boolean          not null
#  climbing   :boolean          not null
#  surfing    :boolean          not null
#  skiing     :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  listing_id :integer          not null
#

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
