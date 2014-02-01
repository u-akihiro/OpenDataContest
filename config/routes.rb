# encoding: utf-8

OpenDataContest::Application.routes.draw do
  
  get "hotspring/index"
  # Client
  root 'client#index' #クライアント側のホームをルートディレクトリ
  
  # 各コンテンツのルーティング
  get '/detail/:rdf' => "client#detail"
  #get "/sightseeing/" => 'controller#method'
  
  get '/api/:type' => "api#get"
  post '/api/:type' => 'api#post'
 
end
