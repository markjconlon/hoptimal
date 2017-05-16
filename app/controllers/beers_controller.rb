class BeersController < ApplicationController

  def index
    @q = Beer.ransack(params[:q])
    @beers = @q.result(distinct: true).page params[:page]
    # @beers_all = @beers.order(:name).page params[:page]
    respond_to do |format|
      format.html
      format.js
    end
  end

  def show
    @beer = Beer.find(params[:id])
    @user_beer = @beer.user_beers.new
    @bars= []
    @bar_where_beer_is_found = @beer.bar_beers
    @bar_where_beer_is_found.each do |bar|
      @bars << Bar.find(bar.bar_id)
    end
  end

  def search
    @q = Beer.ransack(params[:q])
    @beers = @q.result(distinct: true).page params[:page]
    render @beers, layout: false
  end

end
