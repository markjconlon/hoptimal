class CreateBarBeers < ActiveRecord::Migration[5.0]
  def change
    create_table :bar_beers do |t|
      t.belongs_to :beer, foreign_key: true
      t.belongs_to :bar, foreign_key: true

      t.timestamps
    end
  end
end
