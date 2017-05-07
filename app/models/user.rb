class User < ApplicationRecord
  has_secure_password

  has_many :user_beers
  has_many :beers, through: :user_beers
end
