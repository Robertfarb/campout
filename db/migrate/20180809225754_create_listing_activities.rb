class CreateListingActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :listing_activities do |t|
      t.integer :listing_id, null: false
      t.integer :activity_id, null: false

      t.timestamps
    end

    add_index :listing_activities, :listing_id
    add_index :listing_activities, :activity_id
  end
end
