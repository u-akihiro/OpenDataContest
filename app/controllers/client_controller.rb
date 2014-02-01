class ClientController < ApplicationController
 
  # トップページ
  def index 
    render 'index' 
  end
  
  def detail
    @param = params[:rdf]
    render 'detail'
  end
   
end