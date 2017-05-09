class UserBeersController < ApplicationController
  def show
    @user_beers = UserBeer.where(user_id: current_user).order(created_at: :desc)
  end

  def create
    beer = Beer.find(params[:beer_id])
    note = params[:note]
    rating = params[:rating]
    @user_beer = UserBeer.new
    @user_beer.beer = beer
    @user_beer.user = current_user
    @user_beer.note = note
    @user_beer.rating = rating

    if @user_beer.save
      redirect_to beers_path
    else
      render :show
    end
  end


end
