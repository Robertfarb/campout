class AddNullFalse < ActiveRecord::Migration[5.2]
  def change
    change_column :activities, :listing_id, :integer, null: false
  end
end
