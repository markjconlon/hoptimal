class UsersController < ApplicationController
  # new, create, show, edit, update

  def new
    @user = User.new
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
    @user_recent_4 = UserBeer.where(user_id: current_user).order(:created_at).last(2)
  end

  def edit
    @user = current_user
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
    params.require(:user).permit(:first_name, :last_name, :email, :username, :password, :password_confirmation, :preference)
  end

end
