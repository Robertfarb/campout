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



  
end
