OpenDataContest::Application.routes.draw do
  
  # Client
  root 'client#index' #クライアント側のホームをルートディレクトリ
  get '/detail/:rdf' => "client#detail"
  
  # Admin
  
end
