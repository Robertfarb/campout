# == Schema Information
#
# Table name: bookings
#
#  id           :bigint(8)        not null, primary key
#  guest_id     :integer          not null
#  listing_id   :integer          not null
#  check_in     :date             not null
#  check_out    :date             not null
#  total_price  :integer          not null
#  total_guests :integer          not null
#

class Booking < ApplicationRecord
  validates :guest_id, :guest_id, :listing_id, :check_in, :check_out, :total_guests, presence: true

  belongs_to :user,
    foreign_key: :guest_id,
    class_name: :User
  
  belongs_to :listing,
    foreign_key: :listing_id,
    class_name: :Listing
end