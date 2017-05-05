class CreateBeers < ActiveRecord::Migration[5.0]
  def change
    create_table :beers do |t|
      t.string :name
      t.string :category_id
      t.string :varietal
      t.string :origin
      t.string :brewery
      t.string :description
      t.string :style
      t.string :tasting_note
      t.string :image_url
      t.string :image_thumb_url

      t.timestamps
    end
  end
end
