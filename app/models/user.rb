class User < ApplicationRecord
  has_secure_password

  has_many :user_beers
  has_many :beers, through: :user_beers

  # def only_ids(had_before)
  #   beer_ids = []
  #   had_before.each do |beer|
  #     beer_ids << beer.beer_id
  #   end
  #   beer_ids
  # end
  #
  # def random_by_preference(current_user)
  #   had_before = current_user.user_beers.all
  #   had_before_ids = only_ids(had_before)
  #
  #   category_id = (Category.find_by(category_type: current_user.preference)).id
  #   suggestions = []
  #   # cannot call beers in here
  #   all_beers_of_type = Beers.where(category_id: category_id)
  #   if had_before_ids.count == all_beers_of_type.count
  #     return false
  #   else
  #     until suggestions.length == 2
  #       # get random beers to return
  #     end
  #   end
  # end

  def most_recent_4(current_user)
    UserBeer.where(user_id: current_user).order(:created_at).last(4)
  end
end
