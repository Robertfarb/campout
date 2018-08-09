class DeleteActivities < ActiveRecord::Migration[5.2]
  def change
    drop_table :activities
  end
end
