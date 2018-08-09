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
#

class Activity < ApplicationRecord
  has_many :listings
end
