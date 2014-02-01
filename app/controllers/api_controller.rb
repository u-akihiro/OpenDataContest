class ApiController < ApplicationController
  
  #初めの取得時(ページにジャンプした時)
  def get
    param = KyotoHelper.set_parameter(params[:type]);
    @json = KyotoHelper.fetch(param);
    render :json => @json
  end
  
  #もっと読むでロードする時(AJAX通信)
  def post
    param = KyotoHelper.set_parameter(params[:type], params[:offset])
    @json = KyotoHelper.fetch(param);
    render :json => @json
  end
  
end