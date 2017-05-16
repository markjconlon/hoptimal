class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_username(params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      puts "#{request.referrer}"
      redirect_to request.referrer
      # redirect_to user_path("current"), notice: "Logged in!"
    else
      flash.now[:alert] = "Invalid username or password"
      render "new"
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to new_session_path, notice: "Logged out!"
  end
end
