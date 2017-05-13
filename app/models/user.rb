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


  def collection_to_sample_from(current_user, all_beers_of_type)
    had_before = current_user.user_beers.all
    had_before_ids = had_before.map{|beer| beer.beer_id}
    not_had_before = []
    all_beers_of_type.each do |beer|
      if !(had_before_ids.include?(beer.id))
        not_had_before << beer
      end
    end
    return not_had_before
  end

  def random_by_preference(current_user)
    all_beers_of_type = Beer.where(category_id: category_id)
    not_had_before = collection_to_sample_from(current_user, all_beers_of_type)

    return not_had_before.sample
  end

  def random_by_previous(current_user)
    rating_3_or_above = UserBeer.where(user_id: current_user.id, rating: [3, 4, 5])
    if rating_3_or_above.count == 0
      return nil
    else
      beer_id_for_category = rating_3_or_above.sample.beer_id
      category_to_pull_from = Beer.find(beer_id_for_category).category_id
    end
    # Now have to check if they have cleared the category chosen in category_to_pull_from
    # category_cleared? = (UserBeer.where(user_id: current_user.id)
    # if condition
    #
    # else
    #
    # end

    all_beers_of_type = Beer.where(category_id: category_to_pull_from)

    not_had_before = collection_to_sample_from(current_user, all_beers_of_type)
    return not_had_before.sample
  end

  def most_recent_4(current_user)
    UserBeer.where(user_id: current_user).order(:created_at).last(4)
  end


  def random_selection
    #refactored to work more efficiently
    # arr = []
    # UserBeer.all.each{|x| arr << x.beer_id}
    # arr1 = []
    # Beer.all.each{|x| arr1 << x.id}
    # random = arr1 - arr
    # random.count
    # Beer.find(random.sample)

    (Beer.all - beers).sample
  end
end
