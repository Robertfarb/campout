class ChangeZipCodeToString < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :zip_code, :string
  end
end
