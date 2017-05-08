class BeersController < ApplicationController
  # index, show

  def index
    @q = Beer.ransack(params[:q])
    @beers = @q.result(distinct: true).page params[:page]
    respond_to do |format|
      format.html
      format.js
    end
  end

  def show
    @beer = Beer.find(params[:id])
  end

end
