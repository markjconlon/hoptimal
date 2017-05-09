class User < ApplicationRecord
  has_secure_password

  belongs_to :category
  has_many :user_beers
  has_many :beers, through: :user_beers


  validates :username, presence: true, uniqueness: true
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true


  def only_ids(had_before)
    beer_ids = []
    had_before.each do |beer|
      beer_ids << beer.beer_id
    end
    beer_ids
  end

  def random_by_preference(current_user)
    had_before = current_user.user_beers.all
    had_before_ids = only_ids(had_before)

    suggestions = []

    all_beers_of_type = Beer.where(category_id: category_id)

    not_had_before = []
    all_beers_of_type.each do |beer|
      if !(had_before_ids.include?(beer.id))
        not_had_before << beer
      end
    end

    if not_had_before.count >= 2
      first_result = not_had_before.sample
      suggestions << first_result
      second_result = not_had_before.sample
      suggestions << second_result
    elsif not_had_before.count == 1
      first_result = not_had_before.sample
      suggestions << first_result
    end
    return suggestions
  end

  def random_by_previous(current_user)
    rating_3_or_above = UserBeer.where(user_id: current_user, rating: nil)
    return Beer.where(id: (rating_3_or_above.last).beer_id)
  end

  def most_recent_4(current_user)
    UserBeer.where(user_id: current_user).order(:created_at).last(4)
  end
end
