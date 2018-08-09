class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.integer :host_id, null: false
      t.text :description, null: false
      t.string :address, null: false
      t.float :long, null: false
      t.float :lat, null: false
      t.integer :price_daily, null: false
      t.boolean :is_glamping, null: false
      t.boolean :pet_friendly, null: false
      t.boolean :is_toilets, null: false
      t.integer :max_capacity, null: false
      t.boolean :has_showers, null: false
      t.string :checkin_after, null: false
      t.string :checkout_before, null: false

      t.timestamps
    end

    add_index :listings, :host_id
  end
end
