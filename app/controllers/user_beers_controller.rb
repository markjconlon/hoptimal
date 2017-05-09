class UserBeersController < ApplicationController
  def show
    @user_beers = UserBeer.where(user_id: current_user).order(created_at: :desc)
  end

  def create
    beer = Beer.find(params[:beer_id])
    @user_beer = UserBeer.new
    @user_beer.beer = beer
    @user_beer.user = current_user

    if @user_beer.save
      redirect_to beers_path
    else
      render :show
    end
  end

  private

  def user_beer_params
    params.require(:user_beer).permit(:user_id, :beer_id, :rating, :note)
  end
end
