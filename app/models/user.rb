class User < ApplicationRecord
  has_secure_password

  has_many :user_beers
  has_many :beers, through: :user_beers

  def random_by_preference
    beer_id = nil
    until current_user.user_beers

    end
  end

  def most_recent_4(current_user)
    UserBeer.where(user_id: current_user).order(:created_at).last(4)
  end
end
