class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_username(params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to user_url, :notice => "Logged in!"
    else
      flash.now[:alert] = "invalid username or password"
      render "new"
    end
  end

  def destroy
    sessions[:user_id] = nil
    redirect_to new_session_url, :notice => "Logged out!"
  end
end
