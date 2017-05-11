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

    beer_list = UserBeer.where(user_id: current_user.id)
    beer_list_ids = []
    beer_list.each do |beer|
      beer_list_ids << beer.beer_id
    end

    if beer_list_ids.include?(beer.id)
      flash[:alert] = 'Looks like you have already recorded this beer in My Beers'
      redirect_to beer_path(beer.id)
    else
      if @user_beer.save
        redirect_to beers_path
      end
    end

  end

  def edit
    @user_beer = UserBeer.find(params[:id])
    @beer = Beer.find(@user_beer.beer_id)
  end

  def update
    @user_beer = UserBeer.find(params[:id])
    if @user_beer.update_attributes(user_beer_params)
      redirect_to beers_path
    else
      render :show
    end
  end

  def destroy
    @user_beer = UserBeer.find(params[:id])
    @user_beer.destroy
    redirect_to user_beers_show_path
  end

private

 def user_beer_params
   params.permit(:rating, :note)
 end

end
