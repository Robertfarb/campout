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

  has_many :bookings,
    foreign_key: :listing_id,
    class_name: :Booking

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
    .where("lat > ?", bounds[:southWest][:lat])
    .where("long > ?", bounds[:southWest][:long])
    .where("long < ?", bounds[:northEast][:long])
  end
  
  def ensure_checkin_after
    self.checkin_after ||= "11:00 am"
  end

  def ensure_checkout_before
    self.checkout_before ||= "2:00 pm"
  end

   {
      northEast: {"lat"=>"37.80971", "lng"=>"-122.39208"},
      southWest: {"lat"=>"37.74187", "lng"=>"-122.47791"}
    }

  # def activities_arr
  #   activities = []
  #   self.activities.first.to_hash.each do |activity, present|
  #     activities.push(activity) if present == true
  #   end
  #   activities
  # end

  def curr_weather
    lat = self.lat.to_s
    long = self.long.to_s
    response = HTTParty.get "https://api.openweathermap.org/data/2.5/weather?lat=#{lat}&lon=#{long}&appid=bcb83c4b54aee8418983c2aff3073b3b&units=imperial", {accept: :json}
    response.parsed_response["main"]["temp"].to_int
  end

  def elevation
    lat = self.lat.to_s
    long = self.long.to_s
    response = HTTParty.get "https://maps.googleapis.com/maps/api/elevation/json?locations=#{lat},#{long}&key=AIzaSyA3imQIBSdT5CA2gHrew5dZBP2QmmdTISc", {accept: :json}
    response.parsed_response["results"].first["elevation"].to_int
  end

  def curr_conditions
    lat = self.lat.to_s
    long = self.long.to_s
    response = HTTParty.get "https://api.openweathermap.org/data/2.5/weather?lat=#{lat}&lon=#{long}&appid=bcb83c4b54aee8418983c2aff3073b3b&units=imperial", {accept: :json}
    response.parsed_response["weather"].first["main"]
  end
end
