class UsersController < ApplicationController
  before_action :ensure_logged_in, except: [:new, :create]
  before_action :show, only: %i(show)

  def new
    @user = User.new

    @category_preference= []
    Category.all.each do |category|
      @category_preference << [category.category_type]
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to user_path("current"), notice: "Logged in!"
    else
      render :new
    end

  end

  def show
    @user = current_user
    @user_recent_4 = @user.most_recent_4(current_user)
    @based_on_preference = @user.random_by_preference(current_user)
    @based_on_previous = @user.random_by_previous(current_user)
    @preference = (Category.find(current_user.category_id)).category_type

    @random_selection = @user.random_selection

    respond_to do |format|
      format.html

      format.json do
      render json: @user.beers.all, except: %i(created_at updated_at)
      end
    end
  end

  def edit
    @user = current_user
    @category_preference = []
    Category.all.each do |category|
      @category_preference << [category.category_type]
    end
  end

  def update
    @user = current_user

    if @user.update_attributes(user_params)
      redirect_to user_path("current")
    else
      render :edit
    end
  end


  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :username, :password, :password_confirmation, :category_id)
  end

end
