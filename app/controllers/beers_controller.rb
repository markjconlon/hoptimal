class BeersController < ApplicationController
  # index, show

  def index
    @beers = Beer.all
  end

  def show
    @beer = Beer.find(params[:id])
  end

end
