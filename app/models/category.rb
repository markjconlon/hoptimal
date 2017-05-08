class Category < ApplicationRecord
  has_many :beers
  has_many :users
end
