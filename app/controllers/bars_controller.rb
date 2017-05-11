class BarsController < ApplicationController
  def new
    @bar = Bar.new
  end

  def create
    @bar = Bar.new(bar_params)
    byebug
    if @bar.save
      redirect_to beers_path
    end
  end

  def show

  end

  private

  def bar_params
    params.require(:bar).permit(:address, :name)
  end

end
