class UserBeersController < ApplicationController
  def show
    @user_beers = UserBeer.where(user_id: current_user)
  end
end
