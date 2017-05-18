Rails.application.routes.draw do
  root 'beers#index'
  get 'user_beers/show'
  post 'user_beers' => 'user_beers#show'
  get 'user_beers' => 'user_beers#search'

  # random beers route added to allow for json requests for random preference
  get '/beers/random/preference' => 'beers#random_by_preference'

  # random beers route added to allow for json requests for un had random beers
  get '/beers/random' => 'beers#random'
  # link added to allow for json request for random beer by suggestion :STRECTHER GOAL
  get '/beers/suggestion' => 'beers#suggestion'


  resources :user_beers, only: [:edit, :update, :destroy]
  resources :users, only: [:create, :new, :edit, :update, :show]

  resources :beers, only: [:index, :show] do
    resources :user_beers, only: [:new, :create]
  end

  post 'beers/search' => 'beers#search'

  resources :sessions, only: [:new, :create, :destroy]

  resources :bars
end
