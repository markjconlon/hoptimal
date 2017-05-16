class BarsController < ApplicationController
  before_action :ensure_logged_in
  def new
    @bar = Bar.new
  end

  def create
    @bar = Bar.new(bar_params)
    if @bar.save
      redirect_to beers_path
    end
  end

  def show
    @bar = Bar.find(params[:id])
  end

  private

  def bar_params
    params.require(:bar).permit(:address, :name)
  end

end
