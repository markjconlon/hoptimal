Rails.application.routes.draw do
  resources :users, only: [:create, :new, :edit, :update, :show]
  resources :beers, only: [:index, :show]

  resources :sessions, only: [:new, :create, :destroy, :show]
end
