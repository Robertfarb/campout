Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :listings, only: [:show, :index] do
      resources :bookings, only: [:create]
      resources :reviews, only: [:create, :index]
    end

    resources :bookings, only: [:index, :show, :destroy]
    resources :reviews, only: [:update, :destroy]
  end

  root "static_pages#root"
end
