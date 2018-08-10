# == Schema Information
#
# Table name: listings
#
#  id              :bigint(8)        not null, primary key
#  title           :string           not null
#  host_id         :integer          not null
#  description     :text             not null
#  address         :string           not null
#  long            :float            not null
#  lat             :float            not null
#  price_daily     :integer          not null
#  is_glamping     :boolean          not null
#  pet_friendly    :boolean          not null
#  is_toilets      :boolean          not null
#  max_capacity    :integer          not null
#  has_showers     :boolean          not null
#  checkin_after   :string           not null
#  checkout_before :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Listing < ApplicationRecord
  validates :title, :host_id, :description, :address, :long, :lat,
            :price_daily, :is_glamping, :pet_friendly, :is_toilets, :max_capacity, :has_showers,
            :checkin_after, :checkout_before, null: false
  
  belongs_to :host,
    foreign_key: :host_id,
    class_name: :User

  has_many :activities,
    foreign_key: :listing_id,
    class_name: :Activity

  has_many_attached  :photos

  
  def ensure_checkin_after
    self.checkin_after ||= "11:00 am"
  end

  def ensure_checkout_before
    self.checkout_before ||= "2:00 pm"
  end

  def activities_arr
    activities = []
    self.activities.first.to_hash.each do |activity, present|
      activities.push(activity) if present == true
    end
    activities
  end
end
