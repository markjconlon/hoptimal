class CreateUserBeers < ActiveRecord::Migration[5.0]
  def change
    create_table :user_beers do |t|
      t.integer :user_id
      t.integer :beer_id
      t.text :note
      t.integer :rating 

      t.timestamps
    end
  end
end
