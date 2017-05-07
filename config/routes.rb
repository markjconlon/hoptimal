Rails.application.routes.draw do
  get 'user_beers/show'

  resources :users, only: [:create, :new, :edit, :update, :show]
  resources :beers, only: [:index, :show]

  resources :sessions, only: [:new, :create, :destroy]
end
