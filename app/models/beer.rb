class Beer < ApplicationRecord
  has_many :bars
  has_many :user_beers
  belongs_to :category
  has_many :users, through :user_beers
end
