class AddListingToActivity < ActiveRecord::Migration[5.2]
  def change
    add_column :activities, :listing_id, :integer, indexed: true
  end
end
