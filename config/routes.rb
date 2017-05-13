Rails.application.routes.draw do
  get 'user_beers/show'

  # random beers route added to allow for json requests for random preference
  get '/beers/random/preference' => 'beers#random_by_preference'

  resources :user_beers, only: [:edit, :update, :destroy]
  resources :users, only: [:create, :new, :edit, :update, :show]

  # random beers route added to allow for json requests for un had random beers 
  get '/beers/random' => 'beers#random'
  resources :beers, only: [:index, :show] do
    resources :user_beers, only: [:new, :create]
  end

  post 'beers/search' => 'beers#search'

  resources :sessions, only: [:new, :create, :destroy]
end
