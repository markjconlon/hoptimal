class Bar < ApplicationRecord
  has_many :bar_beers
  has_many :beers, through: :bar_beers
  
  geocoded_by :address
  after_validation :geocode
end
