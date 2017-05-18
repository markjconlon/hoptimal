class UserBeersController < ApplicationController
  before_action :ensure_logged_in
  def index
    @user = current_user.beers
    @q = @user.ransack(params[:q])
    @user_beers = @q.result(distinct: true).page params[:page]
    @user_beers = UserBeer.where(user_id: current_user).order(created_at: :desc)
    # respond_to do |format|
    #   format.html
    #   format.json do
    #     render json: @UserBeer, except: %i(created_at updated_at)
    #   end
    # end
  end

  def create
    beer = Beer.find(params[:beer_id])
    note = params[:user_beer][:note]
    rating = params[:user_beer][:rating]
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

  def search
    @user = current_user.beers
    @q = @user.ransack(params[:q])
    @user_beers = @q.result(distinct: true).page params[:page]
    render "search", layout: false
  end

private

 def user_beer_params
   params.require(:user_beer).permit(:note, :rating, :q)
 end

end
