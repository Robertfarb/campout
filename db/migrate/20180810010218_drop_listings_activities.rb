class DropListingsActivities < ActiveRecord::Migration[5.2]
  def change
    drop_table :listing_activities
  end
end
