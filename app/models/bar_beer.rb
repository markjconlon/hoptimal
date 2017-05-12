class BarBeer < ApplicationRecord
  belongs_to :beer
  belongs_to :bar
end
