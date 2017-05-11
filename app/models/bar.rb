class Bar < ApplicationRecord
  has_many :beers

  geocoded_by :address
  after_validation :geocode
end
