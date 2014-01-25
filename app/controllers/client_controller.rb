class ClientController < ApplicationController
  # トップページ
  def index 
    render 'index' 
  end
  
  def detail
    @data = KyotoHelper.fetch(params[:rdf])
    render 'detail'
  end
  
end