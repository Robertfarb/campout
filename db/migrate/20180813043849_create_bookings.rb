class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :guest_id, null: false
      t.integer :listing_id, null: false
      t.date :check_in, null: false
      t.date :check_out, null: false
      t.integer :total_price, null: false
      t.integer :total_guests, null: false
    end

    add_index :bookings, :guest_id
    add_index :bookings, :listing_id
  end
end