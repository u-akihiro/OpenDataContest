OpenDataContest::Application.routes.draw do
  
  # Client
  root 'client#index' #クライアント側のホームをルートディレクトリ
  
  # 各コンテンツのルーティング
  get '/detail/:rdf' => "client#detail"
  #get "/sightseeing/" => 'controller#method'
  
  get '/api/:type' => "api#get"
  post '/api/:type' => 'api#post'
 
end
