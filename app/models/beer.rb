class Beer < ApplicationRecord
  has_many :bar_beers
  has_many :user_beers
  belongs_to :category
  has_many :users, through: :user_beers

  has_many :bars, through: :bar_beers
  paginates_per 24


  accepts_nested_attributes_for :user_beers
end
