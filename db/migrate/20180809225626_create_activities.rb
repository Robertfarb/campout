class CreateActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :activities do |t|
      t.boolean :hiking, null: false
      t.boolean :biking, null: false
      t.boolean :swimming, null: false
      t.boolean :fishing, null: false
      t.boolean :climbing, null: false
      t.boolean :surfing, null: false
      t.boolean :skiing, null: false

      t.timestamps
    end
  end
end
