Rails.application.routes.draw do
  get 'user_beers/show'
  resources :user_beers, only: [:edit, :update, :destroy]

  resources :users, only: [:create, :new, :edit, :update, :show]
  resources :beers, only: [:index, :show] do
    resources :user_beers, only: [:new, :create]
  end
  post 'beers/search' => 'beers#search'

  resources :sessions, only: [:new, :create, :destroy]
end
