# encoding: utf-8

OpenDataContest::Application.routes.draw do

  resources :accounts

  # Client
  root 'client#index' #クライアント側のホームをルートディレクトリ

  # 各コンテンツのルーティング
  get '/detail/:rdf' => "client#detail"

  #get "/sightseeing/" => 'controller#method'

  # hotsprintのapi
  get '/api/hotspring' => 'hotspring#fetch'
  get '/hotspring' => 'hotspring#fetch'
  # get 'hotspring/index'

  # API情報(野口のみ使用？？)
  get '/api/:type' => "api#get"
  post '/api/:type' => 'api#post'

end
