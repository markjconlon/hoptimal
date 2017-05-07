class ChangeBeersCategoryIdType < ActiveRecord::Migration[5.0]
  def change
      change_column :beers, :category_id, 'integer USING CAST(category_id AS integer)'
  end
end
