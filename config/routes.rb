Rails.application.routes.draw do
  resources :users, only: [:create, :new, :edit, :update]
  resources :beers, only: [:index, :show]
end
